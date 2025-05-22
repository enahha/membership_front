<template>
  <div class="header" :class="{ 'is-open': isOpen }">
    <div class="openBg"></div>
    <div>
      <h1 class="logo"><a @click="goHome('idn')"><img src="images/logo.png" alt=""></a></h1>

      <div class="inner">
        <nav class="pcNav">
          <ul>
            <li><a @click.prevent="goHome('idn')">MINT</a></li>
            <li><a @click.prevent="goHome('idn')">WTEC</a></li>
            <li><a @click.prevent="goHome('idn')">ALYA <span>l</span> FITRI</a></li>
            <li><a @click.prevent="goHome('idn')">BITCOIN</a></li>
            <li><a @click.prevent="goHome('idn')">MEMBERSHIP</a></li>
          </ul>
  
          <div class="right">
            <div class="nation">
              <div class="current"  @click="currentMenu = !currentMenu"><img src="images/india.png" alt=""></div>
              <div class="list" v-show="currentMenu">
                  <a @click="selectNation('')"><img src="images/usa.png" alt=""></a>
                  <a @click="selectNation('kor')"><img src="images/korea.png" alt=""></a>
              </div>
            </div>
            <a @click.prevent="selectNation('idn')" class="mypage">My Page</a>
          </div>
        </nav>

        <nav class="moNav">
          <div class="right">
            <div class="nation">
              <div class="list">
                <a @click="selectNation('')"><img src="images/usa.png" alt=""></a>
                <a @click="selectNation('kor')"><img src="images/korea.png" alt=""></a>
                <a @click="selectNation('idn')" class="current"><img src="images/india.png" alt=""></a>
              </div>
            </div>
            <a @click.prevent="selectNation('idn')" class="mypage">My Page</a>
          </div>
          
          <ul>
            <li><a @click.prevent="goHome('idn')">MINT</a></li>
            <li><a @click.prevent="goHome('idn')">WTEC</a></li>
            <li><a @click.prevent="goHome('idn')">ALYA <span>l</span> FITRI</a></li>
            <li><a @click.prevent="goHome('idn')">BITCOIN</a></li>
            <li><a @click.prevent="goHome('idn')">MEMBERSHIP</a></li>
          </ul>
        </nav>
  
        <a v-if="getWalletAddress" class="wallet" @click.prevent="disconnectMetamaskWallet()">
          <img src="logo/logo_metamask.png" width="30" alt="">
          {{ getWalletAddressLast }}
        </a>
        <a v-else class="wallet" @click.prevent="connectMetaMaskWallet()">
          <img src="logo/logo_metamask.png" width="30" alt="">
          Connect Wallet
        </a>

        <div class="side_buger">
          <div class="buger" @click="toggleOpen">
            <button>
              <span></span><span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>



  <div id="mypage">
    <div>
      <h2>My Page</h2>
      <ul class="tab">
        <li :class="{ on: activeTab === 'sec01' }" @click.prevent="setActiveTab('sec01')">Status <br>dipertahankan</li>
        <li :class="{ on: activeTab === 'sec02' }" @click.prevent="setActiveTab('sec02')">Permintaan <br>Withdraw</li>
        <li :class="{ on: activeTab === 'sec03' }" @click.prevent="setActiveTab('sec03')">Airdrop</li>
      </ul>

      <section v-show="activeTab === 'sec01'" class="sec01">
        <div class="part">
          <dl>
            <dt>total saldo WTEC</dt>
            <dd><img src="images/mypage_sec01_img01.png" alt="">{{ WtecTotalBalnce }} WTEC</dd>
          </dl>
          
          <dl>
            <dt>total saldo Bitcoin</dt>
            <dd><img src="images/mypage_sec01_img02.png" alt="">{{ BitcionTotalBalnce }} TH</dd>
          </dl>

          <dl>
            <dt>Alya, Fitri Reward</dt>
            <dd><a href="https://www.snowseed.io/" target="_blank">Check your rewards <img src="images/more_icon.png" alt=""></a></dd>
          </dl>
        </div>


        <ul class="list">
          <li v-if="quantityRetained_a > 0">
            <img src="images/silver_NFT.png" alt="">
            <div>
              <p><b>$ 1,250</b> {{ quantityRetained_a }} EA</p>
              <p><span>Mining period</span> {{ period_a }} Days</p>
              <p><span>WTEC </span> {{ mined_subtot_wtec_a }}</p>
              <p><span>BITCOIN </span> {{ mined_subtot_btc_a }}TH</p>
            </div>
          </li>

          <li v-if="quantityRetained_s > 0">
            <img src="images/gold_NFT.png" alt="">
            <div>
              <p><b>$ 2,500</b> {{ quantityRetained_s }} EA</p>
              <p><span>Mining period</span> {{ period_s }} Days</p>
              <p><span>WTEC </span> {{ mined_subtot_wtec_s }}</p>
              <p><span>BITCOIN </span> {{ mined_subtot_btc_s }}TH</p>
            </div>
          </li>

          <li v-if="quantityRetained_r > 0">
            <img src="images/purple_NFT.png" alt="">
            <div>
              <p><b>$ 5,000</b> {{ quantityRetained_r }} EA</p>
              <p><span>Mining period</span> {{ period_r }} Days</p>
              <p><span>WTEC </span> {{ mined_subtot_wtec_r }}</p>
              <p><span>BITCOIN </span> {{ mined_subtot_btc_r }}TH</p>
            </div>
          </li>

          <li v-if="quantityRetained_v > 0">
            <img src="images/red_NFT.png" alt="">
            <div>
              <p><b>$ 12,500</b> {{ quantityRetained_v }} EA</p>
              <p><span>Mining period</span> {{ period_v }} Days</p>
              <p><span>WTEC </span> {{ mined_subtot_wtec_v }}</p>
              <p><span>BITCOIN </span> {{ mined_subtot_btc_v }}TH</p>
            </div>
          </li>

          <li v-if="quantityRetained_me100 > 0">
            <img src="images/mypage_sec01_img03.png" alt="">
            <div>
              <p><b>$ 100</b> {{ quantityRetained_me100 }} EA</p>
              <p><span>Mining period</span> {{ period_me100 }} Days</p>
              <p><span>WTEC </span> {{ mined_subtot_wtec_me100 }}</p>
            </div>
          </li>

          <li v-if="quantityRetained_me1500 > 0">
            <img src="images/mypage_sec01_img04.png" alt="">
            <div>
              <p><b>$ 1,500</b> {{ quantityRetained_me1500 }} EA</p>
              <p><span>Mining period</span> {{ period_me1500 }} Days</p>
              <p><span>WTEC </span> {{ mined_subtot_wtec_me1500 }}</p>
            </div>
          </li>

          <li v-if="quantityRetained_me10000 > 0">
            <img src="images/mypage_sec01_img06.png" alt="">
            <div>
              <p><b>$ 10,000</b> {{ quantityRetained_me10000 }} EA</p>
              <p><span>Mining period</span> {{ period_me10000 }} Days</p>
              <p><span>WTEC </span> {{ mined_subtot_wtec_me10000 }}</p>
            </div>
          </li>
        </ul>

        <div class="btns">
          <a href="https://opensea.io/collection/bumiband" target="_blank">
            <span>
              <img src="images/mypage_sec01_img05.png" alt="">
              <span>BumiBand NFT</span>
            </span>
            <i class="xi-external-link"></i>
          </a>

          <a href="https://opensea.io/collection/me100" target="_blank">
            <span>
              <img src="images/mypage_sec01_img05.png" alt="">
              <span>BumiBand ME100</span>
            </span>
            <i class="xi-external-link"></i>
          </a>

          <a href="https://opensea.io/collection/me1500" target="_blank">
            <span>
              <img src="images/mypage_sec01_img05.png" alt="">
              <span>BumiBand ME1,500</span>
            </span>
            <i class="xi-external-link"></i>
          </a>

          <a href="https://opensea.io/collection/me10000" target="_blank">
            <span>
              <img src="images/mypage_sec01_img05.png" alt="">
              <span>BumiBand ME10,000</span>
            </span>
            <i class="xi-external-link"></i>
          </a>
        </div>
      </section>

      <section v-show="activeTab === 'sec02'" class="sec02">
        <form action="">
          <div class="radio">
            <input type="radio" name="select" id="select_1" @click="currency = 'WTEC'" checked>
            <label for="select_1">WTEC</label>
            <input type="radio" name="select" id="select_2" @click="currency = 'TH'">
            <label for="select_2">Bitcoin</label>
          </div>

          <div class="box1">
            <div>
              <p class="title">Jumlah Withdrawl</p>
              <button type="button">The total quantity</button>
            </div>

            <div>
              <input v-model="withdrawal.quantity" type="text" class="formboard">
              <span>{{ currency }}</span>
            </div>
          </div>

          <div class="box2">
            <p class="title">Alamat Withdraw</p>
            <input v-model="withdrawal.address" type="text" class="formboard">
          </div>

          <div class="box3">
            <p class="title">Withdrawal Fee</p>
            <p class="fee">{{ fee }} {{ currency }}</p>
          </div>

          <div class="box4">
            <p class="title">Syarat Penggunaan</p>
            <div class="formboard">
              <p>Biaya penarikan ditetapkan sebesar 5% dari jumlah WTEC yang diminta untuk penarikan.</p>
              <p>Anda dapat menarik sejumlah total WTEC yang Anda miliki.</p>
              <p>Jumlah penarikan dapat dimasukkan hingga 4 angka desimal.</p>
              <p>Setelah penarikan diproses, jumlah yang diminta dikurangi biaya akan disetorkan ke dompet tempat penarikan dilakukan.</p>
              <p>Pengajuan penarikan tersedia 24 jam sehari, dan diproses secara berurutan sesuai sistem setelah pengajuan penarikan.</p>
            </div>
          </div>

          <a @click="showComingSoonModal" class="btn" data-toggle="modal" data-target="#mypage_pop">Withdraw</a>
        </form>
      </section>

      <section v-show="activeTab === 'sec03'" class="sec01">
        <!-- solana wallet address -->
        <div class="part">
          <dl>
            <dt>Alamat Dompet Solana</dt>
            <dd>
              <a v-if="userVo?.solana_wallet_address" @click="showMintingApplyModal" style="cursor: pointer;">
                {{ userVo?.solana_wallet_address.substr(0, 4) }}...{{ userVo?.solana_wallet_address.substr(userVo?.solana_wallet_address.length - 4, userVo?.solana_wallet_address.legnth) }}
              </a>
              <a v-else @click="showMintingApplyModal" style="cursor: pointer;">Register</a>
            </dd>
          </dl>
          
          <dl>
            <dt>MEMETOON ID</dt>
            <dd>
              <a v-if="userVo?.memetoon_id" @click="showMemetoonIdRegisterModal" style="cursor: pointer;">
                {{ userVo?.memetoon_id }}
              </a>
              <a v-else @click="showMemetoonIdRegisterModal" style="cursor: pointer;">Register</a>
            </dd>
          </dl>
          
          <dl>
            <dt></dt>
            <dd></dd>
          </dl>
        </div>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      </section>

    </div>
  </div>

  <div class="footer">
    <div class="top">
      <div class="nation">
        <a @click="selectNation('')"><img src="images/usa.png" alt=""></a>
        <a @click="selectNation('kor')"><img src="images/korea.png" alt=""></a>
        <a @click="selectNation('idn')" class="current"><img src="images/india.png" alt=""></a>
      </div>
  
      <p class="info">
        <b>PURCHASE AND PARTNERSHIP INQUIRY</b>
        Sale_info@bumiband.com 
      </p>
    </div>
    <p class="copyright">COPYRIGHT © 2024 PT. COOP WORLD INDONESIA. ALL RIGHTS RESERVED.</p>
  </div>

  <ComingSoonModalIdn ref="refComingSoonModalIdn"/>
  <MintingApplyModalIdn ref="refMintingApplyModalIdn" @callback-applyMinting="callbackSolanaWalletAddress"/>
  <MemetoonAccountModalIdn ref="refMemetoonAccountModalIdn" @callback-memetoonAccount="callbackMemetoonAccount"/>

</template>

<script>
import { sha512 } from 'js-sha512'
import { defineComponent } from 'vue'
import { required, requiredNumber, minLength, maxLength, minValue, maxValue} from 'src/validation.js'
import {ethers} from 'ethers'

export default defineComponent({
  name: 'Mypage',
  data () {
    return {
      currentMenu: false,
      isOpen: false,
      activeTab: 'sec01', 
      WtecTotalBalnce: 0,
      BitcionTotalBalnce: 0,
      mined_subtot_wtec_a: 0,
      mined_subtot_wtec_s: 0,
      mined_subtot_wtec_r: 0,
      mined_subtot_wtec_v: 0,
      mined_subtot_btc_a: 0,
      mined_subtot_btc_s: 0,
      mined_subtot_btc_r: 0,
      mined_subtot_btc_v: 0,
      mined_subtot_wtec_me100: 0,
      mined_subtot_wtec_me1500: 0,
      mined_subtot_wtec_me10000: 0,
      quantityRetained_a: 0,
      quantityRetained_s: 0,
      quantityRetained_r: 0,
      quantityRetained_v: 0,
      period_a: 0,
      period_s: 0,
      period_r: 0,
      period_v: 0,
      quantityRetained_me100: 0,
      quantityRetained_me1500: 0,
      quantityRetained_me10000: 0,
      period_me100: 0,
      period_me1500: 0,
      period_me10000: 0,
      fee: 0,
      tab: 'retained',
      currency: 'WTEC',
      withdrawal: {
        quantity: '',
        address: '',
      },
      loading: true,
      userVo: {},
    }
  },
  components: {
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
        return address.substr(0, 6) + '...' + address.substr(address.length - 4, address.legnth)
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
  },
  created: function () {
    // console.log(this.$q.platform.is.mobile)
    const walletAddress = localStorage.getItem('WALLETADDRESS') ? localStorage.getItem('WALLETADDRESS') : this.$cookie.get('walletAddress')
    const walletType = localStorage.getItem('WALLETTYPE') ? localStorage.getItem('WALLETTYPE') : this.$cookie.get('walletType')
    if (walletAddress && walletType) {
      this.$store.dispatch('setWalletType', walletType)
      this.$store.dispatch('setWalletAddress', walletAddress)
    }

    this.fetchData()
    // this.Test()
  },
  mounted: function () {
    if (this.$q.platform.is.desktop) {
      if (window.ethereum) {
        // 지갑주소 변경 이벤트 구독
        window.ethereum?.on('accountsChanged', this.walletAccountsChangedMetamask)
        // 체인 변경 이벤트 구독
        window.ethereum?.on('chainChanged', this.handleChainChangedMetamask)
      }
    }
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen
    },
    selectNation(country) {
      this.$router.push('/mypage/'+ country)
    },
    // goMypage() {
    //   this.$router.push('mypage')
    // },
    goHome(country) {
      this.$router.push('/' + country)
    },
    navigateToSection(sectionId) {
      this.$router.push('/')
    },
    setActiveTab(tab) {
      this.activeTab = tab
    },
    scrollToSection(sectionId) {
      this.activeTab = sectionId;
      document.querySelector(`.${sectionId}`).scrollIntoView({ behavior: 'smooth' })
    },
    showComingSoonModal() {
      this.$refs.refComingSoonModalIdn.show()
    },
    async fetchContractAddress(seq) {
      const param = {
          seq: seq,
        }
      const resultSelectProject = await this.$axios.get('/api/project/selectProject', { params: { ...param }})
      return resultSelectProject.data.contract_address
    },


    // async Test() {
    //   const bumiList = {
    //     withGrade: [
    //       { grade: 'A', timeStamp: 1633123200n },
    //       { grade: 'A', timeStamp: 1718668800n },
    //       { grade: 'S', timeStamp: 1718668800n },
    //     ],
    //     withoutGrade: []
    //   };

    //   const me100List = {
    //     withGrade: [],
    //     withoutGrade: [
    //       { timeStamp: 1719376345n },
    //       { timeStamp: 1719388540n }
    //     ]
    //   };

    //   const me1500List = {
    //     withGrade: [],
    //     withoutGrade: [
    //       { timeStamp: 1719376345n },
    //       { timeStamp: 1719388540n }
    //     ]
    //   };

    //   const me10000List = {
    //     withGrade: [],
    //     withoutGrade: [
    //       { timeStamp: 1719376345n },
    //       { timeStamp: 1719388540n }
    //     ]
    //   };

    //   const now = Date.now() // 현재 일 단위 날짜

    //   this.calculateWtecTotalBalanceUsd(bumiList, me100List, me1500List, me10000List, now).then(totalBalances => {
    //     console.log('최종 WtecTotalBalanceUsd:', totalBalances.WtecTotalBalanceUsd)
    //     console.log('최종 BitcoinTotalBalance:', totalBalances.BitcoinTotalBalance)
    //   })
    // },



    // async calculateWtecTotalBalanceUsd(bumiList, me100List, me1500List, me10000List, baseTimestamp) {
    //   const rewards = {
    //     'a': 1250 / 1000,
    //     's': 2500 / 1000,
    //     'r': 5000 / 1000,
    //     'v': 12500 / 1000,
    //     'me100': 100 / 1000,
    //     'me1500': 1500 / 1000,
    //     'me10000': 10000/ 1000
    //   }

    //   const bitcoinRewards = {
    //     'a': 35,
    //     's': 70,
    //     'r': 150,
    //     'v': 350
    //   }

    //   const counts = {
    //     'a': 0,
    //     's': 0,
    //     'r': 0,
    //     'v': 0,
    //     'me100': 0,
    //     'me1500': 0,
    //     'me10000': 0
    //   }

    //   // withGrade 리스트 처리
    //   bumiList.withGrade.forEach(nft => {
    //     const timestamp = Number(nft.timeStamp)
    //     const remainingPeriod = this.calculateRemainingPeriod(timestamp, baseTimestamp, 1000)

    //     if (remainingPeriod > 1 && counts[nft.grade.toLowerCase()] !== undefined) {
    //       counts[nft.grade.toLowerCase()] += 1
    //     }
    //   })

    //   // withoutGrade 리스트 처리
    //   const processWithoutGrade = (list, grade) => {
    //     list.withoutGrade.forEach(nft => {
    //       const timestamp = Number(nft.timeStamp)
    //       const remainingPeriod = this.calculateRemainingPeriod(timestamp, baseTimestamp, 1000)

    //       if (remainingPeriod > 1 && counts[grade] !== undefined) {
    //         counts[grade] += 1
    //       }
    //     })
    //   }

    //   processWithoutGrade(me100List, 'me100')
    //   processWithoutGrade(me1500List, 'me1500')
    //   processWithoutGrade(me10000List, 'me10000')

    //   let WtecTotalBalanceUsd = 0
    //   let BitcoinTotalBalance = 0

    //   // 각 등급별 지급금을 곱하여 총 잔액 계산
    //   for (const grade in counts) {
    //     const gradeCount = counts[grade]
    //     if (rewards[grade] !== undefined) {
    //       const rewardPerNft = rewards[grade]
    //       let totalReward = 0
    //       let totalDaysPassed = 0

    //       // 유효한 NFT 필터링
    //       const validNfts = bumiList.withGrade.filter(nft => nft.grade.toLowerCase() === grade && this.calculateRemainingPeriod(Number(nft.timeStamp), baseTimestamp, 1000) > 0)
          
    //       // 각 NFT에 대해 지나간 일수 계산
    //       validNfts.forEach(nft => {
    //         const remainingPeriod = this.calculateRemainingPeriod(Number(nft.timeStamp), baseTimestamp, 1000)
    //         totalDaysPassed += (1000 - remainingPeriod)
    //         console.log('remainingPeriod : ' + remainingPeriod + '     grade: ' + nft.grade + '       totalDaysPassed : ' +  totalDaysPassed)
    //       })

    //       totalReward = gradeCount * rewardPerNft * totalDaysPassed
    //       console.log(`Grade ${grade}: 남은 기간이 0이 아닌 수 = ${gradeCount}, 보상 per NFT = ${rewardPerNft}, 총 지나간 일수 = ${totalDaysPassed}, 총 보상 = ${totalReward}`)
    //       WtecTotalBalanceUsd += totalReward
    //     }
    //     if (bitcoinRewards[grade] !== undefined) {
    //       const rewardPerNft = bitcoinRewards[grade]
    //       let totalReward = 0
    //       let totalDaysPassed = 0

    //       const validNfts = bumiList.withGrade.filter(nft => nft.grade.toLowerCase() === grade && this.calculateRemainingPeriod(Number(nft.timeStamp), baseTimestamp, 1000) > 0)
          
    //       validNfts.forEach(nft => {
    //         const remainingPeriod = this.calculateRemainingPeriod(Number(nft.timeStamp), baseTimestamp, 1000)
    //         totalDaysPassed += (1000 - remainingPeriod)
    //       })

    //       totalReward = gradeCount * rewardPerNft * totalDaysPassed
    //       console.log(`Bitcoin Grade ${grade}: 남은 기간이 0이 아닌 수 = ${gradeCount}, 보상 per NFT = ${rewardPerNft}, 총 지나간 일수 = ${totalDaysPassed}, 총 보상 = ${totalReward}`)
    //       BitcoinTotalBalance += totalReward
    //     }
    //   }

    //   console.log('총 WtecTotalBalanceUsd:', WtecTotalBalanceUsd)
    //   console.log('총 BitcoinTotalBalance:', BitcoinTotalBalance)
    //   return { WtecTotalBalanceUsd, BitcoinTotalBalance }
    // },


    async fetchData() {
      try {
        // user 테이블 조회 - 비동기
        const param = {
          wallet_address: this.getWalletAddress,
        }
        this.$axios.get('/api/user/selectUserByWalletAddress', { params: { ...param }})
          .then((result) => {
            // console.log(JSON.stringify(result.data))
            console.log(result.data)
            if (result.data) {
              // console.log(result.data)

              // 데이터 설정
              this.userVo = result.data
              // console.log(this.mintingVo.total_amount)
            } else {
              this.$noti(this.$q, this.$t('request_data_failed'))
            }
          })
          .catch((err) => {
            console.log(err)
          })
          
        const walletAddress = await this.$store.getters.getWalletAddress
        const contractAddresses = {
          bumiband: await this.fetchContractAddress(1),
          me100: await this.fetchContractAddress(4),
          me1500: await this.fetchContractAddress(5),
          me10000: await this.fetchContractAddress(6)
        }

        console.log(contractAddresses + '        contractAddress')

        const [bumibandList, me100List, me1500List, me10000List] = await Promise.all([
          this.getNftDetailList(walletAddress, contractAddresses.bumiband),
          this.getNftDetailList(walletAddress, contractAddresses.me100),
          this.getNftDetailList(walletAddress, contractAddresses.me1500),
          this.getNftDetailList(walletAddress, contractAddresses.me10000)
        ])

        const now = Date.now()
        // const now =  new Date('2024-06-27T09:54:34Z').getTime()
        const maxPeriod = 1000

        // withGrade
        const countsAndPeriods = bumibandList.withGrade?.reduce((acc, item) => {
          if (item.grade === 'A') acc.counts.a++
          if (item.grade === 'S') acc.counts.s++
          if (item.grade === 'R') acc.counts.r++
          if (item.grade === 'V') acc.counts.v++
          return acc
        }, { counts: { a: 0, s: 0, r: 0, v: 0 }, timestamps: [] })

        // 각 등급별로 가장 최근 타임스탬프를 찾아서 남은 기간 계산
        const latestTimestampA = this.findLatestTimestamp(bumibandList.withGrade?.filter(item => item.grade === 'A') || [])
        const latestTimestampS = this.findLatestTimestamp(bumibandList.withGrade?.filter(item => item.grade === 'S') || [])
        const latestTimestampR = this.findLatestTimestamp(bumibandList.withGrade?.filter(item => item.grade === 'R') || [])
        const latestTimestampV = this.findLatestTimestamp(bumibandList.withGrade?.filter(item => item.grade === 'V') || [])

        this.quantityRetained_a = countsAndPeriods.counts.a
        this.quantityRetained_s = countsAndPeriods.counts.s
        this.quantityRetained_r = countsAndPeriods.counts.r
        this.quantityRetained_v = countsAndPeriods.counts.v

        this.period_a = this.calculateRemainingPeriod(latestTimestampA, now, maxPeriod)
        this.period_s = this.calculateRemainingPeriod(latestTimestampS, now, maxPeriod)
        this.period_r = this.calculateRemainingPeriod(latestTimestampR, now, maxPeriod)
        this.period_v = this.calculateRemainingPeriod(latestTimestampV, now, maxPeriod)
        // console.log(this.period_a + ' !!!!!!!!!!!! this.period_a')
        // console.log(this.period_s + ' !!!!!!!!!!!! this.period_s')
        // console.log(this.period_r + ' !!!!!!!!!!!! this.period_r')
        // console.log(this.period_v + ' !!!!!!!!!!!! this.period_v')

        // withoutGrade
        this.quantityRetained_me100 = me100List.withoutGrade?.length || 0
        const latestTimestampMe100 = this.findLatestTimestamp(me100List.withoutGrade || [])
        this.period_me100 = this.calculateRemainingPeriod(latestTimestampMe100, now, maxPeriod)

        this.quantityRetained_me1500 = me1500List.withoutGrade?.length || 0
        const latestTimestampMe1500 = this.findLatestTimestamp(me1500List.withoutGrade || [])
        this.period_me1500 = this.calculateRemainingPeriod(latestTimestampMe1500, now, maxPeriod)

        this.quantityRetained_me10000 = me10000List.withoutGrade?.length || 0
        const latestTimestampMe10000 = this.findLatestTimestamp(me10000List.withoutGrade || [])
        this.period_me10000 = this.calculateRemainingPeriod(latestTimestampMe10000, now, maxPeriod)

        // Wtec, btc total balance 구하기
        // 총 보유 리스트 만들기
        const combinedList = []

        // Helper function to add items to combined list
        const addToList = (list, projectSeq, nftType) => {
          list.withGrade.forEach(item => combinedList.push({ project_seq: projectSeq, nft_id: Number(item.id), nft_type: item.grade.toLowerCase()}))
          list.withoutGrade.forEach(item => combinedList.push({ project_seq: projectSeq, nft_id: Number(item.id), nft_type: nftType}))
        }

        // Add items from each list
        addToList(bumibandList, 1)
        addToList(me100List, 4, 'me100')
        addToList(me1500List, 5, 'me1500')
        addToList(me10000List, 6, 'me10000')

        if(combinedList.length == 0) {
          console.log('No Nft Data')
          return
        }

        // NFT 타입별 채굴량 조회 - 총 보유량과 별개로 비동기 처리
        const paramNftTypePendingRewards = {
          nftInfoList: combinedList,
        }
        this.$axios.post('/api/minelog/selectMineLogNftTypePendingRewardsList', paramNftTypePendingRewards)
          .then((result) => {
            // console.log(JSON.stringify(result.data))
            console.log(result.data)
            if (result.data) {
              // console.log(result.data)

              // 데이터 설정
              for (let i = 0; i < result.data.length; i++) {
                const pendingRewardsObj = result.data[i]
                if (pendingRewardsObj) {
                  let amount = pendingRewardsObj.amount
                  if (pendingRewardsObj.mine_type == 'WTEC') {
                    // WTEC는 소수점 2자리 까지만 표시하고 나머지 자리는 버림
                    amount = Math.floor(pendingRewardsObj.amount * 100) / 100

                    if (pendingRewardsObj.nft_type == 'a') {
                      this.mined_subtot_wtec_a = amount
                    } else if (pendingRewardsObj.nft_type == 's') {
                      this.mined_subtot_wtec_s = amount
                    } else if (pendingRewardsObj.nft_type == 'r') {
                      this.mined_subtot_wtec_r = amount
                    } else if (pendingRewardsObj.nft_type == 'v') {
                      this.mined_subtot_wtec_v = amount
                    } else if (pendingRewardsObj.nft_type == 'me100') {
                      this.mined_subtot_wtec_me100 = amount
                    } else if (pendingRewardsObj.nft_type == 'me1500') {
                      this.mined_subtot_wtec_me1500 = amount
                    } else if (pendingRewardsObj.nft_type == 'me10000') {
                      this.mined_subtot_wtec_me10000 = amount
                    }
                  } else if (pendingRewardsObj.mine_type == 'BTC') {
                    // BTC는 소수점 자리는 버림
                    amount = Math.floor(pendingRewardsObj.amount)

                    if (pendingRewardsObj.nft_type == 'a') {
                      this.mined_subtot_btc_a = amount
                    } else if (pendingRewardsObj.nft_type == 's') {
                      this.mined_subtot_btc_s = amount
                    } else if (pendingRewardsObj.nft_type == 'r') {
                      this.mined_subtot_btc_r = amount
                    } else if (pendingRewardsObj.nft_type == 'v') {
                      this.mined_subtot_btc_v = amount
                    }
                  }
                }
              }
            } else {
              console.log('Result.data(selectMineLogPendingRewardsList) is null.')
              // this.$noti(this.$q, this.$t('request_data_failed'))
            }
          })
          .catch((err) => {
            console.log(err)
          })

        const pendingRewardsList = await this.calculateTotalBalance(combinedList)
        for (let i = 0; i < pendingRewardsList.length; i++) {
          if(pendingRewardsList[i].mine_type == 'BTC') {
            this.BitcionTotalBalnce = Math.floor(pendingRewardsList[i].amount)
          } else {
            this.WtecTotalBalnce = Math.floor(pendingRewardsList[i].amount * 100) / 100
          }
        }
        
      } catch (error) {
        console.error('Error fetching NFT details:', error)
      } finally {
        this.loading = false
      }
    },
    findLatestTimestamp(items) {
      if (items.length === 0) return 0
      return Math.max(...items.map(item => Number(item.timeStamp)))
    },
    calculateRemainingPeriod(timestamp, now, maxPeriod) {
      const daysInMillis = 1000 * 60 * 60 * 24
      const remainingPeriodInDays = maxPeriod - Math.floor((now - (timestamp * 1000)) / daysInMillis)
      console.log(remainingPeriodInDays + " .................remainingPeriodInDays")
      return Math.max(remainingPeriodInDays, 0)
    },
    async getNftDetailList(wallet_address, contract_address) {
      try {
        const provider = new ethers.providers.JsonRpcProvider(this.$BSC_NETWORK)
        const contract = new ethers.Contract(contract_address, this.$BNB_ABI, provider)

        // 사용자가 소유한 NFT의 총 개수를 가져옵니다.
        const balance = await contract.balanceOf(wallet_address)
        // console.log(`Total NFTs owned: ${balance.toString()}`)
        
        // 결과를 저장할 객체 초기화
        const nftDetailList = {
          withGrade: [], // grade가 있는 NFT의 배열
          withoutGrade: [] // grade가 없는 NFT의 배열
        }

        // 각 NFT의 URI를 가져와서 종류별로 분류합니다.
        for (let i = 0; i < balance; i++) {
          const tokenId = await contract.tokenOfOwnerByIndex(wallet_address, i)
          const tokenURI = await contract.tokenURI(tokenId)
          const timeStamp = await contract.getMintedTimestamp(tokenId)

          // tokenURI를 요청하고 JSON 형식의 메타데이터를 가져옵니다.
          const response = await fetch(tokenURI)
          if (!response.ok) {
            console.error(`Failed to fetch token URI: ${tokenURI}`)
            continue
          }
          const metadata = await response.json()
          // console.log('metadata : ', metadata)

          const gradeAttribute = metadata.attributes.find(attr => attr.trait_type === 'Grade')
          if (gradeAttribute) {
            const nftType = gradeAttribute.value
            // console.log('nftType : ', nftType)
            // grade와 timestamp 값을 포함한 객체 추가
            nftDetailList.withGrade.push({ grade: nftType, id: tokenId, timeStamp })
          } else {
            // timestamp 값만 포함한 객체 추가
            nftDetailList.withoutGrade.push({ id: tokenId, timeStamp })
          }
        }
        console.log('NFT List:', nftDetailList)
        return nftDetailList
      } catch (error) {
        console.error('Error fetching NFT details:', error)
        throw error
      }
    },
    
    // nftId 별 보유 WTEC현황, TH현황 조회
    async calculateTotalBalance(nftList) {
      const param = {
        nftInfoList: nftList,
      }
      const resultPendingRewardsList = await this.$axios.post('/api/minelog/selectMineLogPendingRewardsList', param)
      return resultPendingRewardsList.data
    },
    
    
    
    
    // WTEC Amount 구하기
    async getTokenAmountByUsdValue(usdValue) {
      const usdPrice = await this.getTheLatestPriceOfTheTradingPair()
      console.log(usdPrice + '  @#@#@#  usdPrice')
      console.log(usdValue + '  @#@#@#  usdValue')

      if (!usdPrice || usdPrice == 0) {
        return 0
      }
      const currencyAmount = Math.ceil(usdValue / usdPrice)
      // 소수점 처리

      return currencyAmount
    },
    // 시세 조회
    async getTheLatestPriceOfTheTradingPair(targetTokenSymbol) {
    // try {
      if (!targetTokenSymbol) {
        targetTokenSymbol = 'WTEC'
      }
      const param = {
        tokenSymbol: targetTokenSymbol,
      }
      const result = await this.$axios.get('/api/indodax/getIndodaxTokenPrice', { params: { ...param }})
      // console.log(resultKeyValue.data)
      if (result && result.data) {
        return result.data
      } else {
        this.$noti(this.$q, this.$t('no_data_indodax_token_price'))
        return 0
      }
    },
    ///////////////////////////////////////////////////////////////////////////
    // validation
    ///////////////////////////////////////////////////////////////////////////
    required(val) {
      const message = this.$t('validation_required')
      return required(val, message);
    },
    requiredNumber(val) {
      const message = this.$t('validation_required')
      return required(val, message);
    },
    minLength(val, length) {
      if (!val) {
        return true
      }
      const message = this.$t('validation_min_length') + ': ' + length
      return minLength(val, message, length);
    },
    maxLength(val, length) {
      if (!val) {
        return true
      }
      const message = this.$t('validation_max_length') + ': ' + length
      return maxLength(val, message, length);
    },
    minValue(val, value) {
      const message = this.$t('validation_min_value') + ': ' + value
      return minValue(val, message, value);
    },
    maxValue(val, value) {
      const message = this.$t('validation_max_value') + ': ' + value
      return maxValue(val, message, value);
    },
    ///////////////////////////////////////////////////////////////////////////
    validate() {
      let result = true
      // 지갑주소 유효성 체크
      if (!this.checkAddress(this.wallet_address)) {
        this.$noti(this.$q, this.$t('validation_failed_check_wallet_address'))
        result = false
      }
      if (!this.$refs.pwd.validate()) {
        this.$noti(this.$q, this.$t('validation_failed_pwd'))
        result = false
      }
      if (!this.$refs.pwdCheck.validate()) {
        this.$noti(this.$q, this.$t('validation_failed_pwd_check'))
        result = false
      }
      // 비밀번호 일치 확인
      if (this.pwd !== this.pwdCheck) {
        this.$noti(this.$q, this.$t('pwd_not_match'))
        result = false
      }
      if (!this.$refs.nickname.validate()) {
        this.$noti(this.$q, this.$t('validation_failed_nickname'))
        result = false
      }
      if (!this.$refs.name.validate()) {
        this.$noti(this.$q, this.$t('validation_failed_name'))
        result = false
      }
      if (!this.$refs.mobile_no.validate()) {
        this.$noti(this.$q, this.$t('validation_failed_mobile_no'))
        result = false
      }
      if (!this.$refs.home_address.validate()) {
        this.$noti(this.$q, this.$t('validation_failed_home_address'))
        result = false
      }
      if (!this.$refs.business_registration_no.validate()) {
        this.$noti(this.$q, this.$t('validation_failed_business_registration_no'))
        result = false
      }
      if (!this.$refs.company_address.validate()) {
        this.$noti(this.$q, this.$t('validation_failed_company_address'))
        result = false
      }
      if (!this.$refs.company_tel_no.validate()) {
        this.$noti(this.$q, this.$t('validation_failed_company_tel_no'))
        result = false
      }
      return result
    },
    // 지갑주소 유효성 검증
    /**
     * Checks if the given string is an address
     *
     * @method isAddress
     * @param {String} address the given HEX address
     * @return {Boolean}
     */
    checkAddress(address) {
      if (address.length === 42) {
        return true
      } else {
        return false
      }
      // // check if it has the basic requirements of an address
      // if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
      //   return false
      //     // If it's ALL lowercase or ALL upppercase
      // }
      // if (/^(0x|0X)?[0-9a-f]{40}$/.test(address) || /^(0x|0X)?[0-9A-F]{40}$/.test(address)) {
      //   // return true
      //   // Otherwise check each case
      //   return this.checkAddressChecksum(address)
      // } else {
      //   return false
      // }
    },
    async checkChain() {
      // 로그인 상태가 아니면 처리하지 않음
      if(!this.$store.getters.getWalletAddress) {
        return
      }

      // 메인넷 확인
      const walletType = this.$store.getters.getWalletType
      let chainId = ''
      if (walletType === 'kaikas') {
        chainId = window.klaytn.networkVersion
      } else if (walletType === 'metamask') {
        chainId = await window.ethereum.request({ method: 'eth_chainId' })
      } else {
        return true
      }
      if (chainId !== 8217 && chainId !== '0x2019') {
        // 메인넷이 아니므로 로그아웃
        this.logout()
        this.$noti(this.$q, this.$t('set_to_the_mainnet'))
        return false
      }
      return true
    },
    async connectMetaMaskWallet() {
      // this.$noti(this.$q, this.$t('wallet_metamask'))
      if (typeof window.ethereum !== 'undefined') {
        try {
          // ★★★★★★★ TODO: 배포시 주석 제거 ★★★★★★★
          // // MetaMask 네트워크를 BSC로 전환 또는 추가
          // await window.ethereum.request({
          //   method: 'wallet_addEthereumChain',
          //   params: [{
          //       chainId: '0x38', // 56 in decimal
          //       chainName: 'Binance Smart Chain',
          //       nativeCurrency: {
          //           name: 'Binance Coin',
          //           symbol: 'BNB',
          //           decimals: 18
          //       },
          //       rpcUrls: ['https://bsc-dataseed.binance.org/'],
          //       blockExplorerUrls: ['https://bscscan.com/']
          //   }]
          // })
          // ★★★★★★★ TODO: 배포시 주석 제거 ★★★★★★★

          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
          const walletAddress = accounts[0]
          // alert(walletAddress)

          // this.$store.dispatch('setWalletType', 'metamask')
          // this.$store.dispatch('setWalletAddress', walletAddress)

          this.$cookie.set('walletAddress', walletAddress)
          this.$cookie.set('walletType', 'metamask')
          this.$store.dispatch('setWalletAddress', walletAddress)
          this.$store.dispatch('setWalletType', 'metamask')
          localStorage.setItem('WALLETADDRESS', walletAddress)
          localStorage.setItem('WALLETTYPE', 'metamask')

          this.$router.go(0)

          // // ■■■ 회원정보 체크, 존재하지 않으면 가입화면으로 이동
          // this.checkUser(walletAddress)
        } catch (error) {
          console.log(error)
          this.$noti(this.$q, error.message)
        }
      } else {
        this.$noti(this.$q, this.$t('MetaMask is not installed.'))
        window.open('https://metamask.app.link/dapp/https://mint.bumiband.com')
        // window.open('https://metamask.app.link/dapp/https://')
      }
    },
    disconnectMetamaskWallet() {
      // console.log('들어옴!!!!!!!!!')
      // this.phantomDisconnecting()

      this.$store.dispatch('setWalletAddress', '')
      this.$store.dispatch('setWalletType', '')
      localStorage.setItem('WALLETADDRESS', '')
      localStorage.setItem('WALLETTYPE', '')
      this.$cookie.set('walletAddress', '')
      this.$cookie.set('walletType', '')
      this.$router.push('/idn')
    },
    walletAccountsChangedMetamask(accounts) {
      // console.log(accounts)
      this.$store.dispatch('setWalletType', 'metamask')
      this.$store.dispatch('setWalletAddress', accounts[0])
      this.$cookie.set('walletAddress', accounts[0])
      this.$cookie.set('walletType', 'metamask')
      localStorage.setItem('WALLETADDRESS', accounts[0])
      localStorage.setItem('WALLETTYPE', 'metamask')
      this.$router.go(0)

      // ■■■ 회원정보 체크, 존재하지 않으면 가입화면으로 이동
      // this.checkUser(accounts[0])
    },
    handleChainChangedMetamask(chainId) {
      console.log(chainId) // eth mainnet: 0x1, cypress: 0x2019, baobab: 0x3e9
      // We recommend reloading the page, unless you must do otherwise
      // window.location.reload();
      this.checkChain()
    },
    goBack() {
      // goBack 확인창 표시
      this.confirmGoBack = true
    },
    doGoBack() {
      this.$router.go(-1)
    },
    showMintingApplyModal() {
      this.$refs.refMintingApplyModalIdn.solanaWalletAddress = this.userVo.solana_wallet_address
      this.$refs.refMintingApplyModalIdn.show()
    },
    showMemetoonIdRegisterModal() {
      this.$refs.refMemetoonAccountModalIdn.memetoonAccount.id = this.userVo.memetoon_id
      this.$refs.refMemetoonAccountModalIdn.memetoonAccount.pwd = this.userVo.memetoon_pwd
      this.$refs.refMemetoonAccountModalIdn.show()
    },
    async callbackSolanaWalletAddress(sollanaWalletAddress) {
      this.$q.loading.show()
      /////////////////////////////////////////////////////////////////
      // update user.solana_wallet_address
      /////////////////////////////////////////////////////////////////
      const param = {
        uid: this.getWalletAddress,
        solana_wallet_address: sollanaWalletAddress,
        mod_id: this.getWalletAddress,
      }
      const result = await this.$axios.post('/api/user/updateUserSolanaWalletAddress', param)
      // console.log(result.data)

      this.$q.loading.hide()
      if (!result || !result.data || result.data.returnCd != 0) {
        this.$noti(this.$q, this.$t('process_failed') + ': updateUserSolanaWalletAddress')
        return // 모달창 닫히지 않음
      } else {
        this.$noti(this.$q, this.$t('process_success'))
        this.userVo = result.data.returnValue // 수정 이후 user 정보 설정
      }
      this.$refs.refMintingApplyModalIdn.close() // 모달창 닫기
    },
    async callbackMemetoonAccount(memetoonAccount) {
      this.$q.loading.show()
      /////////////////////////////////////////////////////////////////
      // update user.memetoon_id, user.memetoon_pwd
      /////////////////////////////////////////////////////////////////
      const param = {
        uid: this.getWalletAddress,
        memetoon_id: memetoonAccount.id,
        memetoon_pwd: memetoonAccount.pwd,
        mod_id: this.getWalletAddress,
      }
      const result = await this.$axios.post('/api/user/updateUserMemetoonAccount', param)
      // console.log(result.data)
      
      this.$q.loading.hide()
      if (!result || !result.data || result.data.returnCd != 0) {
        this.$noti(this.$q, this.$t('process_failed') + ': updateUserMemetoonAccount')
        return // 모달창 닫히지 않음
      } else {
        this.$noti(this.$q, this.$t('process_success'))
        this.userVo = result.data.returnValue // 수정 이후 user 정보 설정
      }
      this.$refs.refMemetoonAccountModalIdn.close()
    },
  }
})
</script>

<style scoped>

</style>