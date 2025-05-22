<template>
  <div class="page_main">
    <div id="Wrap">
    <!-- header -->
    <header id="header">
      <div class="inner">
        <h1><a :href="mainPath" @click="onclickLogo"><img src="_img/comm/symbol.png" alt="" /><img src="_img/comm/logo.png" alt="punkvism" /></a></h1>
        <nav class="navbar">	
          <button class="closeBtn"><i class="xi-close"></i></button>
          <div class="mobile_member">
            <a @click="goMypage" class="my">MY PAGE</a>
            <a v-if="!getWalletAddress" @click="connectPhantomWallet()" class="wallet alert-view">SELECT WALLET</a>
            <a v-else @click="disconnectPhantomWallet()" class="wallet alert-view">{{ getWalletAddressShort }}</a>

          </div>
          <ul class="nav">
            <li><a href="#sec01"  @click.prevent="scrollToSection('sec01')">STORY</a></li>
            <li><a href="#sec011" @click.prevent="scrollToSection('sec011')">VISION</a></li>
            <li><a href="#sec02" @click.prevent="scrollToSection('sec02')">ROADMAP</a></li>
            <li><a href="#sec03" @click.prevent="scrollToSection('sec03')">UNIVERSE</a></li>
            <li><a href="#sec04" @click.prevent="scrollToSection('sec04')">TEAM</a></li>
            <li><a href="#sec06" @click.prevent="scrollToSection('sec06')">PARTNER</a></li>
            <li><a href="#sec05" @click.prevent="scrollToSection('sec05')">FAQ</a></li>
            <!-- <li><a @click="goRwa()" style="cursor: pointer;" class="rwa">RWA PLAN</a></li> -->
          </ul>
          <div class="mobile_nav_quick">
            <a @click="goMembership()" class="mem" style="cursor: pointer;">MEMBERSHIP</a>
            <a @click="goBenifit()" class="benefit"><img src="_img/comm/icon_kongz.png" alt="" style="cursor: pointer;"/> NFT Benefit</a>
          </div>
        </nav>
        <aside>
		<div class="bgm">
			<a href="#."><i class="xi-music"></i></a>
		</div>
          <div class="member">
            <a @click="goMembership()" class="my" style="cursor: pointer;">MEMBERSHIP</a>
            <a v-if="!getWalletAddress" @click="connectPhantomWallet()" class="wallet alert-view" style="cursor: pointer;">SELECT WALLET</a>
            <a v-else @click="disconnectPhantomWallet()" class="wallet alert-view" style="cursor: pointer;">{{ getWalletAddressShort }}</a>

          </div>
          <div class="mypage">
            <a @click="goMypage"><img src="_img/comm/icon_mypage.png" alt="" class="my alert-view" style="cursor: pointer;"></a>
          </div>
          <div class="sns">
            <button type="button" @click="toggleSns"><img src="_img/comm/icon_link.png" alt=""><i class="xi-angle-down-min"></i></button>
            <div v-if="showSnsLinks">
              <p>
                <a href="https://discord.gg/punkvism" target="_blank"><img src="_img/comm/icon_discord.png" alt="Discord go">Discord</a>
                <a href="https://twitter.com/punkvism" target="_blank"><img src="_img/comm/icon_x.png" alt="Twitter go">Twitter</a>
                <a href="https://www.youtube.com/@PUNKVISM" target="_blank"><img src="_img/comm/icon_youtube.png" alt="Youtube go">Youtube</a>
                <a href="https://open.kakao.com/o/g7x681Sg" target="_blank" class="membership"><img src="_img/comm/icon_kakaotalk.png" alt="Kakao go">Kakao</a>
                <a href="https://punkvism.medium.com/" target="_blank"><img src="_img/comm/icon_medium.png" alt="Mideum go">Mideum</a>
                <a href="https://blog.naver.com/punkvism" target="_blank"><img src="_img/comm/icon_blog.png" alt="blog go">Blog</a>
                <a href="https://www.instagram.com/punkvism_official/" target="_blank"><img src="_img/comm/icon_instargram.png" alt="Instagram go">Instagram</a>
                <a href="http://snowseed.io/" target="_blank"><img src="_img/comm/icon_snowseed.png" alt="SnowSeed go">SnowSeed</a>
				<a href="https://t.me/Punkvism" target="_blank" class="membership"><img src="_img/comm/icon_telegram.png" alt="Telegram go"></a>
              </p>
            </div>
          </div>
          <div class="lan">
            <button type="button" @click="toggleGlobal"><img src="_img/comm/icon_global.png" alt=""></button>
            <p v-if="showGlobal">
              <a :href="korPath" @click="onclickLanguage('kor')" class="alert-view">Kor</a>
              <a :href="engPath" @click="onclickLanguage('eng')">Eng</a>
              <!-- <a :href="idnPath" @click="onclickLanguage('idn')">Idn</a> -->
              <a href="#." @click="showAlert($event)" class="alert-view" data-title="Comming Soon" data-text="It will be in service soon." >Idn</a>
            </p>
          </div>

          <button class="menuBtn"><i class="xi-bars"></i></button>
        </aside>
      </div>
      <div class="page_bar"><span></span></div>
    </header>
    <!-- //header -->

    </div>
</div>

<!-- Background Music -->
<audio id="bg-music" autoplay loop>
    <source src="_img/comm/bg_music.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
<!-- Hidden Play Button -->
<button id="play-music" style="display: none;" onclick="playMusic()">Play Music</button>

<NotiModal ref="refNotiModal"/>

</template>
  
<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import wait from 'waait'
import { QSpinnerGears } from 'quasar'
import bs58 from "bs58"
import { formatUnits, parseUnits } from 'ethers'
import ERC20 from '@openzeppelin/contracts/build/contracts/ERC20.json'
import BN from 'bn.js' // BN 모듈 직접 import
import { route } from 'quasar/wrappers'
import Web3 from 'web3'
import {ethers} from 'ethers'
// import { createAppKit, useAppKit } from '@reown/appkit/vue'
// import { EthersAdapter } from '@reown/appkit-adapter-ethers'
// import { mainnet, arbitrum } from '@reown/appkit/networks'
import WalletConnect from "@dcentwallet/walletconnect-client"
import QRcodeModal from "@dcentwallet/qrcode-modal"
import DcentWebConnector from 'dcent-web-connector'
import { Alchemy, Network } from "alchemy-sdk"
import TransportWebUSB from "@ledgerhq/hw-transport-webusb"
import TransportWebHID from "@ledgerhq/hw-transport-webhid"
import AppEth from "@ledgerhq/hw-app-eth"  // 이더리움 앱 관련 라이브러리
import { listen } from "@ledgerhq/logs"
import Eth from "@ledgerhq/hw-app-eth" // Ethereum app on Ledger

import Swiper from 'swiper'
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/swiper-bundle.css'
import $ from 'jquery'

// alert
import Swal from "sweetalert2"

// Swiper에 모듈 등록
Swiper.use([Navigation, Autoplay])

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      isMusicPlayed: false,
      smallSize: false,
      showSnsLinks: false,
      showGlobal: false,
      ledgerGuidePc: false,
      ledgerGuideMobile: false,
      currentPage: 0, // 현재 페이지
      itemsPerPage: 12, // 한 페이지에 보여줄 항목 수
      projectSeq: 1,
      keyword: '',
      pageSize: 1000,
      noDataFlag: false,
      solanaWalletAddress: '',
      slide: 'first', // sec03에서 DR. ANANG swipe slide - carousel
      ownNftList: [],
      selectedNFT: [],
      airdropLogList:[],
      selectAll: false,
      modal: null,
      userAddress: '',
      message: '',
      signedMessage: '',
      
      // // PROD용 (ethereum)
      chainId: '0x1',
      chainName: 'Ethereum Mainnet',
      nativeCurrency_name: 'Ether',
      symbol: 'ETH',
      rpcUrls: 'https://rpc.ankr.com/eth',
      blockExplorerUrls: 'https://etherscan.io/',

      
      // 테스트용 (Sepolia)
      // chainId: '0xaa36a7',
      // chainName: 'Sepolia Testnet',
      // nativeCurrency_name: 'Sepolia Ether',
      // symbol: 'ETH',
      // // rpcUrls: 'https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID',
      // // rpcUrls: 'https://ethereum-sepolia-rpc.publicnode.com',
      // rpcUrls: ['https://ethereum-sepolia-rpc.publicnode.com'],
      // blockExplorerUrls: 'https://sepolia.etherscan.io/',


    }
  },
  components: {
  },
  watch: {
    getWalletAddress(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        this.handlePhantomAccountChange()
      }
    },

    $route() {
      // 페이지 이동 시 언어 메뉴 닫기
      this.showGlobal = false
    },
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
        return address.substr(0, 5) + '...' + address.substr(address.length - 5, 5)
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

    // 현재 페이지에 보여줄 항목 리스트 계산
    paginatedList() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.ownNftList.slice(start, end)
    },
    // 총 페이지 수 계산
    totalPages() {
      return Math.ceil(this.ownNftList.length / this.itemsPerPage)
    },

    // 다국어용 path
    korPath() {
      return this.localizedPath('', 'kor') // 한국어 경로
    },
    engPath() {
      return this.localizedPath('', 'eng') // 영어 경로
    },
    idnPath() {
      return this.localizedPath('', 'idn') // 인도네시아어 경로
    },
    mainPath() {
      // 현재 경로의 언어를 감지하고, 해당 언어의 메인 경로 생성
      const currentPath = this.$route.path
      const langMatch = currentPath.match(/^\/(eng|idn|kor)/)
      const currentLang = langMatch ? langMatch[1] : ''

      // 언어가 감지되면 해당 언어의 루트 경로 반환, 아니면 기본 루트로 이동
      return currentLang ? `/#/${currentLang}` : '/#/'
    },
    // benefitPath() {
    //   console.log(this.localizedPath('/membership/benefit'))
    //   return this.localizedPath('/membership/benefit')
    // },
    // mypagePath() {
    //   return this.localizedPath('/mypage')
    //   // return '/#/kor/mypage'
    // },
    // membershipPath() {
    //   console.log(this.localizedPath('/home/membership'))
    //   return this.localizedPath('/home/membership')
    //   // return '/#/kor/membership'
    // },
  },
  created: function () {
    this.locale = 'en-US'
    // // console.log(this.$q.platform.is.mobile)
    // const walletAddress = localStorage.getItem('WALLETADDRESS') ? localStorage.getItem('WALLETADDRESS') : this.$cookie.get('walletAddress')
    // const walletType = localStorage.getItem('WALLETTYPE') ? localStorage.getItem('WALLETTYPE') : this.$cookie.get('walletType')
    // if (walletAddress && walletType) {
    //   this.$store.dispatch('setWalletType', walletType)
    //   this.$store.dispatch('setWalletAddress', walletAddress)
    // }

    // const solanaWalletAddress = localStorage.getItem('SOLANAWALLETADDRESS') ? localStorage.getItem('SOLANAWALLETADDRESS') : this.$cookie.get('solanaWalletAddress')
    // const solanaWalletType = localStorage.getItem('SOLANAWALLETTYPE') ? localStorage.getItem('SOLANAWALLETTYPE') : this.$cookie.get('solanaWalletType')
    // if (solanaWalletAddress && solanaWalletType) {
    //   this.$store.dispatch('setSolanaWalletType', solanaWalletType)
    //   this.$store.dispatch('setSolanaWalletAddress', solanaWalletAddress)
    // }

    // 자동로그인 이슈로 쿠키를 세션으로 변경
    const walletAddress = sessionStorage.getItem('WALLETADDRESS')
    const walletType = sessionStorage.getItem('WALLETTYPE')
    if (walletAddress && walletType) {
      this.$store.dispatch('setWalletType', walletType)
      this.$store.dispatch('setWalletAddress', walletAddress)
    }

    const Uuid = sessionStorage.getItem('UUID')
    if (walletAddress && walletType) {
      this.$store.dispatch('setUuid', Uuid)
    }

    const solanaWalletAddress = sessionStorage.getItem('SOLANAWALLETADDRESS')
    const solanaWalletType = sessionStorage.getItem('SOLANAWALLETTYPE')
    if (solanaWalletAddress && solanaWalletType) {
      this.$store.dispatch('setSolanaWalletType', solanaWalletType)
      this.$store.dispatch('setSolanaWalletAddress', solanaWalletAddress)
    }

    // 화면 리사이즈 이벤트 핸들러
    window.addEventListener("resize", this.resizeEventHandler)
    if (document.body.offsetWidth < 1024) {
      this.smallSize = true
    }
  },
  destroy: function () {
    window.removeEventListener("resize", this.resizeEventHandler)
  },
  mounted: function () {
    // "Go to Top" 버튼 클릭 시 페이지 상단으로 이동
    document.querySelector('#gotop').addEventListener('click', (event) => {
        event.preventDefault() // 기본 동작(페이지 이동) 방지
        window.scrollTo({ top: 0, behavior: 'smooth' }) // 부드럽게 스크롤
    });

    // if (this.$q.platform.is.desktop) {
    //   if (window.ethereum) {
    //     // 지갑주소 변경 이벤트 구독
    //     window.ethereum?.on('accountsChanged', this.walletAccountsChangedMetamask)
    //     // 체인 변경 이벤트 구독
    //     window.ethereum?.on('chainChanged', this.handleChainChangedMetamask)
    //   }
    // }

    AOS.init()

    // 팬텀지갑 주소변경 이벤트
    this.handlePhantomAccountChange()

    this.$nextTick(() => {
      this.header()
    })
  },
  setup () {
    const { locale } = useI18n({ useScope: 'global' })

    return {
      locale,
    }
  },
  methods: {
    // 노티 모달
    noti(message) {
      this.$refs.refNotiModal.message = message
      this.$refs.refNotiModal.show()
    },
    onclickLanguage(lang) {
      if (lang == 'kor') {
        this.locale = 'ko-KR'
      } else if (lang == 'idn') {
        this.locale = 'id-ID'
      } else {
        this.locale = 'en-US'
      }
    },
    onclickLogo() {
      // store의 replayMainVideoCount 를 1 증가시켜서 main 화면의 watch에 의해 동영상이 다시 재생되도록 함.
      // ① header의 로고 클릭
      // ② store의 replayMainVideoCount + 1
      // ③ index.vue의 watch에서 변화 감지해서 resetKey +1
      // ④ resetKey가 달라져서 해당 div 리랜더링
      this.$store.dispatch('setReplayMainVideoCount', this.$store.getters.getReplayMainVideoCount + 1)
    },
    onclickRwaPlan() {
      // store의 replayMainVideoCount 를 1 증가시켜서 main 화면의 watch에 의해 동영상이 다시 재생되도록 함.
      // ① header의 로고 클릭
      // ② store의 replayMainVideoCount + 1
      // ③ index.vue의 watch에서 변화 감지해서 resetKey +1
      // ④ resetKey가 달라져서 해당 div 리랜더링
      this.$store.dispatch('setReplayRwaPlanVideoCount', this.$store.getters.getReplayRwaPlanVideoCount + 1)
    },
    localizedPath(basePath = '', targetLang = '') {
      const currentPath = this.$route.path

      // 현재 언어 추출 (eng, idn, kor)
      const langMatch = currentPath.match(/^\/(eng|idn|kor)/)
      const currentLang = langMatch ? langMatch[1] : ''

      // 언어가 지정되지 않은 경우 기본 언어 설정
      const langToUse = targetLang || currentLang || 'kor'

      // 현재 경로에서 언어 부분 제거
      let strippedPath = currentPath
      if (currentLang) {
        strippedPath = currentPath.replace(`/${currentLang}`, '')
      }

      // URL 파라미터 처리
      const currentQuery = this.$route.query
      const queryString = Object.keys(currentQuery).length
        ? '?' + new URLSearchParams(currentQuery).toString()
        : ''

      // 파라미터가 없는 경우 기존 로직 유지
      if (Object.keys(currentQuery).length === 0) {
        if (strippedPath.endsWith(basePath)) {
          return `/#/${langToUse}${strippedPath}`
        }
        return `/#/${langToUse}${basePath}`
      }

      // 파라미터가 있는 경우 새로운 경로 생성
      return `/#/${langToUse}${strippedPath}${queryString}`
    },
    // 페이지 변경
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page
      }
    },
    // 이전 페이지로 이동
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1
      }
    },
    // 다음 페이지로 이동
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1
      }
    },
    toggleSelectAll() {
      this.ownNftList.forEach(nft => {
        nft.selected = this.selectAll
      })
    },
    resizeEventHandler() {
      if (this.$q.platform.is.mobile || this.$q.platform.is.cordova || this.$q.platform.is.name === 'webkit' || document.body.offsetWidth < 1024) {
        this.smallSize = true
      } else {
        this.smallSize = false
      }
    },
    goMypage() {
      if (!this.getWalletAddress) {

        // console.log(this.locale)

        this.noti(this.$t('connect_your_wallet'))
        return
      }
      // this.$router.push('/mypage')

      let targetPath = ''
      if (this.$route.path.includes('kor')) {
        targetPath = '/kor/mypage'
      } else if (this.$route.path.includes('idn')) {
        targetPath = '/idn/mypage'
      } else {
        targetPath = '/eng/mypage'
      }
      this.$router.push(targetPath)
    },
    goMembership() {
      let targetPath = ''
      if (this.$route.path.includes('kor')) {
        targetPath = '/kor/membership'
      } else if (this.$route.path.includes('idn')) {
        targetPath = '/idn/membership'
      } else {
        targetPath = '/eng/membership'
      }
      this.$router.push(targetPath)
    },
    goBenifit() {
      let targetPath = ''
      if (this.$route.path.includes('kor')) {
        targetPath = '/kor/membership/benefit'
      } else if (this.$route.path.includes('idn')) {
        targetPath = '/idn/membership/benefit'
      } else {
        targetPath = '/eng/membership/benefit'
      }
      this.$router.push(targetPath)
    },
    goRwa() {
      let targetPath = ''
      if (this.$route.path.includes('kor')) {
        targetPath = '/kor/rwa'
      } else if (this.$route.path.includes('idn')) {
        targetPath = '/idn/rwa'
      } else {
        targetPath = '/eng/rwa'
      }
      this.$router.push(targetPath)

      this.onclickRwaPlan()
    },
    handleMintingClick(index, mintCurrencySymbolIndex) {
      if (this.getWalletAddress) {
        this.minting(index, mintCurrencySymbolIndex)
      } else {
        this.showWalletModal()
      }
    },
    toggleSns() {
      if(this.showGlobal) {
        this.toggleGlobal()
      }
      this.showSnsLinks = !this.showSnsLinks
    },
    toggleGlobal() {
      if(this.showSnsLinks) {
        this.toggleSns()
      }
      this.showGlobal = !this.showGlobal
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
    async connectPhantomWallet(pageCd) {
      let provider

      // Phantom 지갑 프로바이더 가져오기
      const getProvider = () => {
        if ('phantom' in window) {
          const anyWindow = window
          const provider = anyWindow.phantom?.solana // Solana 네트워크용

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

          this.solanaWalletAddress = walletAddress

          this.noti(this.$t('wallet_connected'))
          
          if (pageCd == 'mypage') {
            // console.log('this.$route.path: ' + this.$route.path)
            let targetPath = ''
            if (this.$route.path.includes('kor')) {
              targetPath = '/kor/mypage'
            } else if (this.$route.path.includes('idn')) {
              targetPath = '/idn/mypage'
            } else {
              targetPath = '/eng/mypage'
            }
            this.$router.push(targetPath)
          }
          
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

    // // http 상태에서 phantom 지갑 연결 이상
    // async connectPhantomWallet() {
    //   // 지갑 주소를 저장
    //   sessionStorage.setItem('WALLETADDRESS', 'B9C4gGDi9zB4EfkVooGFL5Cc37w5YtxxULfstTVuhZPz')
    //   sessionStorage.setItem('WALLETTYPE', 'phantom')
    //   this.$store.dispatch('setWalletAddress', 'B9C4gGDi9zB4EfkVooGFL5Cc37w5YtxxULfstTVuhZPz')
    //   this.$store.dispatch('setWalletType', 'phantom')
    //   localStorage.setItem('WALLETADDRESS', 'B9C4gGDi9zB4EfkVooGFL5Cc37w5YtxxULfstTVuhZPz')
    //   localStorage.setItem('WALLETTYPE', 'phantom')

    //   this.fetchNFTs()
    // },

    // Phantom 지갑 프로바이더 가져오는 메소드
    getPhantomProvider() {
      if ('phantom' in window) {
        const anyWindow = window
        const provider = anyWindow.phantom?.solana // Solana 네트워크용

        if (provider?.isPhantom) {
          return provider
        }
      }

      console.log("Phantom Wallet provider not found")
      return null // 프로바이더가 없는 경우 null 반환
    },

    // Phantom 계정 변경 핸들러
    handlePhantomAccountChange() {
      console.log("Initializing Phantom account change handler")
      const provider = this.getPhantomProvider()
      if (!provider) {
        console.log("Phantom provider not available")
        return
      }

      // accountChanged 이벤트 등록
      provider.on('accountChanged', (publicKey) => {
        if (publicKey) {
          // 새 계정으로 업데이트
          const walletAddress = publicKey.toBase58()
          console.log(`Switched to account: ${walletAddress}`)
          sessionStorage.setItem('WALLETADDRESS', walletAddress)
          this.$store.dispatch('setWalletAddress', walletAddress)

          // 필요한 로직 수행 (예: NFT 다시 로드)
          this.fetchNFTs()
        } else {
          // publicKey가 없으면 재연결 시도
          console.log('No account found, attempting to reconnect')
          provider.connect().catch((error) => {
            console.error('Failed to reconnect to Phantom Wallet:', error)
          })
        }
      })
    },


    // Phantom 지갑 연결 해제
    async disconnectPhantomWallet() {
      const provider = this.getPhantomProvider()
      if (provider) {
        try {
          await provider.disconnect() // Solana 네트워크용 disconnect 메서드
        } catch (e) {
          console.log('Error disconnecting Phantom Wallet:', e)
        }
      }

      // 상태 초기화
      this.$store.dispatch('setWalletAddress', '')
      this.$store.dispatch('setWalletType', '')
      localStorage.setItem('WALLETADDRESS', '')
      localStorage.setItem('WALLETTYPE', '')
      sessionStorage.removeItem('WALLETADDRESS')
      sessionStorage.removeItem('WALLETTYPE')
      
      localStorage.setItem('setAlya', '')
      localStorage.setItem('setFitri', '')
      localStorage.setItem('setPunkyKongz', '')
      localStorage.setItem('setGenesis', '')

      sessionStorage.setItem('ALYA', '')
      sessionStorage.setItem('FITRI', '')
      sessionStorage.setItem('PUNKYKONGZ', '')
      sessionStorage.setItem('GENESIS', '')

      this.$store.dispatch('setAlya', '')
      this.$store.dispatch('setFitri', '')
      this.$store.dispatch('setPunkyKongz', '')
      this.$store.dispatch('setGenesis', '')

      
      // localStorage.setItem('isPG', null)  //punky & genesis
      // localStorage.setItem('isAF', null)  //alya & fitri
      // sessionStorage.setItem('isPG', null)
      // sessionStorage.setItem('isAF', null)
      // this.$store.dispatch('setIsPG', null)
      // this.$store.dispatch('setIsAF', null)

      // console.log('this.$route.path: ' + this.$route.path)
      let targetPath = ''
      if (this.$route.path.includes('kor')) {
        targetPath = '/kor'
      } else if (this.$route.path.includes('idn')) {
        targetPath = '/idn'
      } else {
        targetPath = '/eng'
      }
      this.$router.push(targetPath)
    },
    checkAndRegisterUser(walletAddress) {
      // user 존재유무 체크 존재하지 않는 경우 신규 등록
      const param = {
        uid: walletAddress,
        wallet_address: walletAddress,
        wallet_type: this.getWalletType,
        reg_id: walletAddress,
      }
      this.$axios.post('/api/user/checkAndInsertUser', param)
      .then((response) => {
        if (response.data.resultCd === "SUCCESS") {
          // 서버에서 uuid 값을 받아와서 사용
          const uuid = response.data.returnValue
          // console.log('Received UUID:', uuid)

          sessionStorage.setItem('UUID', uuid)
          this.$store.dispatch('setUuid', uuid)
          localStorage.setItem('UUID', uuid)
          
        }
      })
      .catch((error) => {
        console.log('API 호출 실패:', error)
      })
    },
    copyValue(value) {
      if (!value) {
        this.$noti(this.$q, 'Value is Empty')
        return
      }
      // 클립보드로 복사하기
      this.$copyText(String(value)).then(this.copyValueSuccess, this.copyValueFail)
      },
    copyValueSuccess(e) {
      // console.log(e)
      this.$noti(this.$q, 'copied to clipboard')
    },
    copyValueFail(e) {
      // console.log(e)
      this.$noti(this.$q, 'copy failed')
    },
    goPage(index) {
      if (index === 0) {
        this.$router.push('/')
      } else {
        this.$router.push('/beastar' + index)
      }
    },

//////////////////////////////////////////////////////////////////////////////////
//                                script code                                   //
//////////////////////////////////////////////////////////////////////////////////
    header() {
      // 스크롤 이벤트 처리
      window.addEventListener("scroll", () => {
        const winScroll = window.scrollY // 스크롤 위치
        const bodyHeight = document.body.offsetHeight // body 전체 높이
        const winHeight = window.innerHeight // 브라우저 창 높이

        // 헤더에 스크롤 클래스 추가/제거
        const header = document.querySelector("header")
        if (winScroll > 100) {
          header.classList.add("scroll")
        } else {
          header.classList.remove("scroll")
        }

        // 페이지 진행 바 업데이트
        const progressBar = document.querySelector("header .page_bar span")
        if (progressBar) {
          progressBar.style.width = `${(winScroll / (bodyHeight - winHeight)) * 100}%`
        }
      })

      // 메뉴 버튼 클릭 이벤트 처리
      const menuBtn = document.querySelector("header aside .menuBtn")
      const closeBtn = document.querySelector("header nav .closeBtn")
      const nav = document.querySelector("header nav")

      if (menuBtn && nav) {
        menuBtn.addEventListener("click", () => {
          nav.classList.add("on")
        })
      }

      if (closeBtn && nav) {
        closeBtn.addEventListener("click", () => {
          nav.classList.remove("on")
        })
      }

      // SNS 버튼 클릭 이벤트 처리
      const snsButton = document.querySelector("header .sns button")
      if (snsButton) {
        snsButton.addEventListener("click", (e) => {
          const nextDiv = e.target.nextElementSibling
          if (nextDiv) {
            nextDiv.style.display =
              nextDiv.style.display === "none" || nextDiv.style.display === ""
                ? "block"
                : "none"
          }
        })
      }

      // 언어 선택 버튼 클릭 이벤트 처리
      const lanButton = document.querySelector("header .lan button")
      if (lanButton) {
        lanButton.addEventListener("click", (e) => {
          const nextP = e.target.nextElementSibling
          if (nextP) {
            nextP.style.display =
              nextP.style.display === "none" || nextP.style.display === ""
                ? "block"
                : "none"
          }
        })
      }

      // 페이지 전환 시 메뉴 닫기
      this.$watch(
        "$route",
        () => {
          if (nav) {
            nav.classList.remove("on") // 페이지 전환 시 'on' 클래스 제거
          }
        },
        { immediate: true }
      )
    },

    scrollToSection(id) {
      const target = document.getElementById(id)

      if (target) {
        // 현재 페이지에서 ID 섹션으로 스크롤
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        // 현재 경로의 언어 추출
        const currentPath = this.$route.path
        const langMatch = currentPath.match(/^\/(eng|idn|kor)/)
        const currentLang = langMatch ? langMatch[1] : 'kor'

        // 해당 언어의 메인 페이지로 이동 후 섹션으로 스크롤
        this.$router.push({ path: `/${currentLang}` }).then(() => {
          // DOM 렌더링 이후 약간의 지연 추가
          setTimeout(() => {
            const newTarget = document.getElementById(id)
            if (newTarget) {
              newTarget.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }, 10)
        })
      }
    },
    showAlert(event) {
      console.log(event)
      event.preventDefault()
      // 클릭한 요소에서 데이터 속성 가져오기
      const target = event.target
      const title = target.dataset.title || "" // data-title
      const text = target.dataset.text || "" // data-text

      // SweetAlert2 알림 호출
      if (title || text) {
        Swal.fire({
          icon: "warning",
          title: title,
          text: text,
        })
      }
    },

    // showAlert(title) {
    //   // SweetAlert2 알림 호출
    //   Swal.fire({
    //     icon: "warning",
    //     title: title,
    //     text: '',
    //   })
    // },

    playMusic() {
      const audio = document.getElementById('bg-music');
      const bgmButton = document.querySelector('.bgm a');
      if (!this.isMusicPlayed) {
        audio.play();
        this.isMusicPlayed = true;
        bgmButton.classList.add('is-play');
      } else {
        audio.pause();
        this.isMusicPlayed = false;
        bgmButton.classList.remove('is-play');
      }
    },
  },
  mounted() {
    // BGM 설정
    const handleDocumentClick = (e) => {
      if (!e.target.closest('.bgm a')) {
        if (!this.isMusicPlayed) {
          this.playMusic();
          document.removeEventListener('click', handleDocumentClick);
        }
      }
    };
    document.addEventListener('click', handleDocumentClick);

    const bgmButton = document.querySelector('.bgm a');
    if (bgmButton) {
      bgmButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.playMusic();
      });
    }
  },
})
</script>
  