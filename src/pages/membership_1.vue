<template>
<div class="page_main">
  <div id="Wrap">

    <!-- 본문 시작 -->
    <main role="main">
    <!-- main_container -->
    <div id="sub_container" class="membership1_wrap">
      
      <section class="mem_sec01 full_bg container">
        <h3>
          <p><img src="_img/membership/member_logo.png" alt="punkvism x fairmont" /></p>
          예약에 이용할<br class="mo_only_sm" /> NFT를 선택해 주세요
        </h3>
        <div class="nft_select">

          <a v-if="getPunky == true || getGenesis == true" href="/#/kor/membership/membership_punk1" class="is-active">
            <p><img src="_img/membership/member1_img1.png" class="wp100" alt="" /></p>
            <p>제네시스, 펑키콩즈</p>
          </a>
          <a v-else>
            <p><img src="_img/membership/member1_img1.png" class="wp100" alt="" /></p>
            <p>제네시스, 펑키콩즈</p>
          </a>

          <a v-if="getAlya == true || getFitri == true" href="/#/kor/membership/membership_alya1" class="is-active">
            <p><img src="_img/membership/member1_img2.png" class="wp100" alt="" /></p>
            <p>알야, 피트리</p>
          </a>
          <a v-else>
            <p><img src="_img/membership/member1_img2.png" class="wp100" alt="" /></p>
            <p>알야, 피트리</p>
          </a>

        </div>
         <div v-if="!getWalletAddress"><a @click.prevent="connectPhantomWallet()" class="btn btn-purple w240">NFT인증</a></div>
      </section>


    </div>
    <!-- //main_container -->
    </main>
    <!-- //본문 끝 -->

  </div>
</div>

<NotiModal ref="refNotiModal"/>
</template>


<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'


export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      isPunky: false,
      isAlya: false,

      filterdNft_1: [],
      filterdNft_2: [],
    }
  },
  components: {
  },
  watch: {
  },
  mounted: function () {
    // this.fetchNFTs()
  },
  created: function () {
    // 자동로그인 이슈로 쿠키를 세션으로 변경
    const walletAddress = sessionStorage.getItem('WALLETADDRESS')
    const walletType = sessionStorage.getItem('WALLETTYPE')
    if (walletAddress && walletType) {
      this.$store.dispatch('setWalletType', walletType)
      this.$store.dispatch('setWalletAddress', walletAddress)
    }

    const alya = sessionStorage.getItem('ALYA')
    const fitri = sessionStorage.getItem('FITRI')
    const punkykongz = sessionStorage.getItem('PUNKYKONGZ')
    const genesis = sessionStorage.getItem('GENISES')
    // ALYA 상태 처리
    if (alya && alya === "true") {
      this.$store.dispatch('setAlya', true)
    } else {
      this.$store.dispatch('setAlya', false)
    }

    // FITRI 상태 처리
    if (fitri && fitri === "true") {
      this.$store.dispatch('setFitri', true)
    } else {
      this.$store.dispatch('setFitri', false)
    }

    // PUNKYKONGZ 상태 처리
    if (punkykongz && punkykongz === "true") {
      this.$store.dispatch('setPunkyKongz', true)
    } else {
      this.$store.dispatch('setPunkyKongz', false)
    }

    // GENESIS 상태 처리
    if (genesis && genesis === "true") {
      this.$store.dispatch('setGenesis', true)
    } else {
      this.$store.dispatch('setGenesis', false)
    }

    // 화면 리사이즈 이벤트 핸들러
    window.addEventListener("resize", this.resizeEventHandler)
    if (document.body.offsetWidth < 1024) {
      this.smallSize = true
    }
  },
  computed: {
    getWalletType () {
      return this.$store.getters.getWalletType
    },
    getWalletAddress () {
      return this.$store.getters.getWalletAddress
    },
    getWalletAddressShort () {
      const address = this.$store.getters.getWalletAddress
      if (address) {
        return address.substr(0, 7) + '...' + address.substr(address.length - 5, 5)
      } else {
        return address
      }
    },
    getWalletAddressLast () {
      const address = this.$store.getters.getWalletAddress
      if (address) {
        return '...' + address.substr(address.length - 4, address.legnth)
      } else {
        return address
      }
    },
    getUuid () {
      return this.$store.getters.getUuid
    },
    getAlya() {
      return this.$store.getters.getAlya
    },
    getFitri() {
      return this.$store.getters.getFitri
    },
    getPunky() {
      return this.$store.getters.getPunkykongz
    },
    getGenesis() {
      return this.$store.getters.getGenesis
    },
  },
  methods: {
    // 노티 모달
    noti(message) {
      this.$refs.refNotiModal.message = message
      this.$refs.refNotiModal.show()
    },
    async fetchNFTs() {
      const apiKey = this.$HELIUS_API_KEY // Helius API 키
      const url = `https://mainnet.helius-rpc.com/?api-key=${apiKey}`
      const ownerAddress = this.getWalletAddress
      const alyaCollectionAddress = this.$ALYA_COLLETION_ADDRESS
      const fitriCollectionAddress = this.$FITRI_COLLETION_ADDRESS
      const punkyCollectionAddress = this.$PUNKY_COLLETION_ADDRESS
      const genesisCollectionAddress = this.$GENESIS_COLLETION_ADDRESS

      try {
        // Helius API 호출
        const response = await this.$axios.post(url, {
          jsonrpc: "2.0",
          id: "my-id",
          method: "getAssetsByOwner",
          params: {
            ownerAddress: ownerAddress,
            page: 1,
            limit: 100,
          },
        })

        // 응답 데이터 처리
        const { result } = response.data
        const allNFTs = result.items
        // console.log("allNFTs", allNFTs)

        // 개별 컬렉션별 필터링
        this.filteredAlyaNFTs = allNFTs.filter((nft) =>
          nft.grouping?.some(
            (group) => group.group_key === "collection" && group.group_value === alyaCollectionAddress
          )
        )

        this.filteredFitriNFTs = allNFTs.filter((nft) =>
          nft.grouping?.some(
            (group) => group.group_key === "collection" && group.group_value === fitriCollectionAddress
          )
        )

        this.filteredPunkyNFTs = allNFTs.filter((nft) =>
          nft.grouping?.some(
            (group) => group.group_key === "collection" && group.group_value === punkyCollectionAddress
          )
        )

        this.filteredGenesisNFTs = allNFTs.filter((nft) =>
          nft.grouping?.some(
            (group) => group.group_key === "collection" && group.group_value === genesisCollectionAddress
          )
        )

        // console.log("Alya 컬렉션 필터링된 NFT:", this.filteredAlyaNFTs)
        // console.log("Fitri 컬렉션 필터링된 NFT:", this.filteredFitriNFTs)
        // console.log("Punky 컬렉션 필터링된 NFT:", this.filteredPunkyNFTs)
        // console.log("Genesis 컬렉션 필터링된 NFT:", this.filteredGenesisNFTs)

        // 각 컬렉션별 보유 여부 확인
        const hasAlyaNFTs = this.filteredAlyaNFTs.length > 0
        const hasFitriNFTs = this.filteredFitriNFTs.length > 0
        const hasPunkyNFTs = this.filteredPunkyNFTs.length > 0
        const hasGenesisNFTs = this.filteredGenesisNFTs.length > 0

        // console.log("hasAlyaNFTs:", hasAlyaNFTs)
        // console.log("hasFitriNFTs:", hasFitriNFTs)
        // console.log("hasPunkyNFTs:", hasPunkyNFTs)
        // console.log("hasGenesisNFTs:", hasGenesisNFTs)

        // 상태 저장
        localStorage.setItem('setAlya', hasAlyaNFTs)
        localStorage.setItem('setFitri', hasFitriNFTs)
        localStorage.setItem('setPunkyKongz', hasPunkyNFTs)
        localStorage.setItem('setGenesis', hasGenesisNFTs)

        sessionStorage.setItem('ALYA', hasAlyaNFTs)
        sessionStorage.setItem('FITRI', hasFitriNFTs)
        sessionStorage.setItem('PUNKYKONGZ', hasPunkyNFTs)
        sessionStorage.setItem('GENESIS', hasGenesisNFTs)

        this.$store.dispatch('setAlya', hasAlyaNFTs)
        this.$store.dispatch('setFitri', hasFitriNFTs)
        this.$store.dispatch('setPunkyKongz', hasPunkyNFTs)
        this.$store.dispatch('setGenesis', hasGenesisNFTs)

        // 페이지를 새로고침하거나 다른 처리를 추가할 수 있음
        // window.location.reload()
      } catch (error) {
        console.error("NFT 데이터를 가져오는 중 오류 발생:", error.message)
      }
    },

/////////////////////////////////////////////////////////////////
// phantom 지갑연결(솔라나 네트워크)
/////////////////////////////////////////////////////////////////
async connectPhantomWallet() {
      let provider;

      // Phantom 지갑 프로바이더 가져오기
      const getProvider = () => {
        if ('phantom' in window) {
          const anyWindow = window;
          const provider = anyWindow.phantom?.solana; // Solana 네트워크용

          if (provider?.isPhantom) {
            return provider
          }
        }

        window.open(
          'https://phantom.app/ul/browse/https%3A%2F%2Fpunkykongz.com?ref=https%3A%2F%2Fmyapp.com'
        )
        return null
      }

      provider = getProvider()
      if (!provider) {
        console.log('Phantom Wallet provider not found')
        return
      }

      // Phantom 지갑 연결 시도
      const handleConnect = async () => {
        try {
          const response = await provider.connect() // Solana 네트워크용 connect 메서드
          const walletAddress = response.publicKey.toString()

          // 지갑 주소를 저장
          sessionStorage.setItem('WALLETADDRESS', walletAddress)
          sessionStorage.setItem('WALLETTYPE', 'phantom')
          this.$store.dispatch('setWalletAddress', walletAddress)
          this.$store.dispatch('setWalletType', 'phantom')
          localStorage.setItem('WALLETADDRESS', walletAddress)
          localStorage.setItem('WALLETTYPE', 'phantom')

          this.fetchNFTs()

          this.noti(this.$t('wallet_connected'))

          this.solanaWalletAddress = walletAddress
        } catch (error) {
          this.$noti(this.$q, this.$t('failed' + error))
        }
      }

      // 연결 시도 실행
      await handleConnect()

      // 회원 정보 체크 및 등록
      try {
        this.checkAndRegisterUser(this.solanaWalletAddress)
      } catch (e) {
        console.log(e)
      }
    },
    
    // Phantom 지갑 프로바이더 가져오는 메소드
    getPhantomProvider() {
      if ('phantom' in window) {
        const anyWindow = window;
        const provider = anyWindow.phantom?.solana; // Solana 네트워크용

        if (provider?.isPhantom) {
          return provider;
        }
      }

      return null; // 프로바이더가 없는 경우 null 반환
    },

    // Phantom 계정 변경 핸들러
    handlePhantomAccountChange() {
      const provider = this.getPhantomProvider();
      if (!provider) return;

      // Phantom 지갑 연결 이벤트
      provider.on('connect', (publicKey) => {
        const walletAddress = publicKey.toString();
        console.log(`Connected to account ${walletAddress}`);
        sessionStorage.setItem('WALLETADDRESS', walletAddress);
        this.$store.dispatch('setWalletAddress', walletAddress);
        localStorage.setItem('WALLETADDRESS', walletAddress);
      });

      // Phantom 지갑 연결 해제 이벤트
      provider.on('disconnect', () => {
        console.log('Disconnected from Phantom Wallet');
        this.disconnectPhantomWallet();
      });
    },

    // Phantom 지갑 연결 해제
    async disconnectPhantomWallet() {
      const provider = this.getPhantomProvider();
      if (provider) {
        try {
          await provider.disconnect(); // Solana 네트워크용 disconnect 메서드
        } catch (e) {
          console.log('Error disconnecting Phantom Wallet:', e);
        }
      }

      // 상태 초기화
      this.$store.dispatch('setWalletAddress', '');
      this.$store.dispatch('setWalletType', '');
      localStorage.setItem('WALLETADDRESS', '');
      localStorage.setItem('WALLETTYPE', '');
      sessionStorage.removeItem('WALLETADDRESS');
      sessionStorage.removeItem('WALLETTYPE');
    },
  }
})
</script>
