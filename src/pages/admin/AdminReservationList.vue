<template>
  <div class="page_main">
    <div id="Wrap">
  
      <!-- 본문 시작 -->
      <main role="main">
      <!-- main_container -->
      <div id="sub_container" class="membership_wrap membership_mypage">
        <section class="container text-center">
          <h3>ADMIN</h3>
          <div class="tabs1 full_bg">
            <ul>
              <li><a href="#." class="is-active">예약현황</a></li>
            </ul>
          </div>

          <div class="table_scroll_container">
            <div class="table_group">
              <q-pull-to-refresh @refresh="refresher">
                <q-infinite-scroll @load="loadMore" :offset="500" ref="infiniteScroll">
                  <table>
                    <colgroup>
                      <col>
                      <col>
                      <col>
                      <col>
                      <col>
                      <col>
                      <col>
                      <col>
                      <col>
                    </colgroup>
                    <thead>
                      <tr>
                        <th>NFT</th>
                        <th>구분</th>
                        <th>예약서비스</th>
                        <th>추가서비스</th>
                        <th>신청일시</th>
                        <th>예약일자</th>
                        <th>취소일시</th>
                        <th>예약자명</th>
                        <th>연락처</th>
                        <th>기능/상태</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(reservation, index) in reservationList" :key="index">
                        <td>{{ reservation.nft_type }}</td>
                        <td>{{ getReservationService(reservation) }}</td>
                        <td v-if="reservation.reservation_service === 'room'">{{ reservation.room_type }}</td>
                        <td v-else>{{ getRestaurantNames(reservation) }}</td>
                        <td v-if="reservation.reservation_service === 'room'">{{ calculateGroupedExtraServices(reservation) }}</td>
                        <td v-else>-</td>
                        <td>{{ reservation.reg_time }}</td>
                        <td v-if="reservation.reservation_service === 'room'">{{ formatDate(reservation.check_in_date) }} ~ {{ formatDate(reservation.check_out_date) }}</td>
                        <td v-else>{{ formatDate(reservation.check_in_date) }}</td>
                        <td v-if="reservation.cancel_time">{{ reservation.cancel_time }}</td>
                        <td v-else>-</td>
                        <td>{{ reservation.name }}</td>
                        <td>{{ formatPhoneNumber(reservation.tel_number) }}</td>
                        <td>
                          <!-- 상세보기 버튼 -->
                          <p><a :href="mypageDetailPath + reservation.seq" class="btn view">상세보기</a></p>

                          <!-- status 버튼 -->
                          <p v-if="reservation.status === '0'">
                            <a class="btn com">예약신청</a>
                          </p>
                          <p v-else-if="reservation.status === '10'">
                            <a class="btn com">취소신청</a>
                          </p>
                          <p v-else-if="reservation.status === '50'">
                            <a class="btn imp">취소확정</a>
                          </p>

                          <!-- 예약확정 -->
                          <p v-if="reservation.status === '5'">
                            <a class="btn cancel">예약확정</a>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </q-infinite-scroll>
              </q-pull-to-refresh>
            </div>
          </div>

          <h4 class="mem_title mt60">예약 취소 및 환불규정</h4>
          <div class="row text-left">
            <div class="col-lg-6">
              <div class="notice_box bdr">
                <i class="xi-error"></i>
                <div>
                  <strong class="dp-block mb15">숙박 취소 및 환불 규정</strong>
                  체크인일 기준 1일 전 16시까지 : 100% 환불
                  <br />체크인일 기준 1일 전 16시이후~당일 및 No-show : 환불 불가
                  <br />연박일 경우, 체크인일 기준 취소한 날까지 숙박비용 지불
                  <p class="mt15 fc_gray">ex) 2박 3일의 경우, 체크인일에 취소시 하루 비용에 대한 숙박비를 지불하여야 함</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mt20-md">
              <div class="notice_box bdr">
                <i class="xi-error"></i>
                <div>
                  <strong class="dp-block mb15">레스토랑 취소 및 환불 규정</strong>
                  예약일 기준 1일 전 16시까지 : 100% 환불
                  <br />예약일 기준 1일 전 16시이후~당일 및 No-show : 환불 불가
                </div>
              </div>
            </div>
            <div class="col-12 mt30 mt20-md">
              <div class="notice_box bdr h-auto">
                <i class="xi-error"></i>
                <div>
                  <strong class="dp-block mb15"><span>예약확정</span> 또는 <span>예약취소</span> 이메일을 받지 못하신 경우, 아래의 단계를 확인 부탁드립니다.</strong>
                  <p><i>1.</i> 스팸 메일함 또는 정크 메일함을 확인해주세요.</p>
                  <p><i>2.</i> 발신 주소가 정상적인 메일임을 표시(허용/신뢰 설정)해주시면 이후부터는 정상적으로 메일을 수신하실 수 있습니다.</p>
                  <p><i>3.</i> 간혹 신뢰할 수 없는 메일로 판단하여 메일이 수신되지 않을 수 있습니다.</p>
                </div>
              </div>
            </div>
          </div>

          

        </section>

      </div>
      <!-- //main_container -->
      </main>
      <!-- //본문 끝 -->


  
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import wait from 'waait'
import { QSpinnerGears } from 'quasar'

import $ from 'jquery';


export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      smallSize: false,
      refresherDone: '',
      pageSize: 100,
      lastPageNum: 1, // 마지막 페이지
      noDataFlag: false,
      keyword: '', // 검색키워드

      cancelSeq: 0,
      name: '',
      reservationList: [],
    }
  },
  components: {
  },
  watch: {
    // getWalletAddress(newVal, oldVal) {
    //   if (newVal && newVal !== oldVal) {
    //     this.getNftList();
    //   }
    // },
  },
  computed: {
    isAdmin () {
      // console.log(this.$store.getters.getAdcd)
      // console.log(this.$adminCode)
      // console.log(this.$store.getters.getAdcd ===this.$adminCode)
      return this.$store.getters.getAdcd === this.$adminCode
    },
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
    // getIsPG () {
    //   return this.$store.getters.getIsPG
    // },
    // getIsAF () {
    //   return this.$store.getters.getIsAF
    // },

    mypageDetailPath() {
      // return this.localizedPath('/mypage/detail?s=')
      return '/#/admin/reservationList/detail?s='
    },
  },
  created: function () {
    // 자동로그인 이슈로 쿠키를 세션으로 변경
    const adcd = sessionStorage.getItem('ADCD')
    if (adcd) {
      this.$store.dispatch('setAdcd', adcd)
    }

    const walletAddress = sessionStorage.getItem('WALLETADDRESS')
    const walletType = sessionStorage.getItem('WALLETTYPE')
    if (walletAddress && walletType) {
      this.$store.dispatch('setWalletType', walletType)
      this.$store.dispatch('setWalletAddress', walletAddress)
    }

    // const punkyGenisis = sessionStorage.getItem('isPG')
    // const alyaFitri = sessionStorage.getItem('isAF')
    // if (punkyGenisis && alyaFitri) {
    //   if (punkyGenisis == "true") {
    //   this.$store.dispatch('setIsPG', true)
    //   }
    //   if (alyaFitri == "true") {
    //   this.$store.dispatch('setIsAF', true)
    //   }
    // }
    
    // 화면 리사이즈 이벤트 핸들러
    window.addEventListener("resize", this.resizeEventHandler)
    if (document.body.offsetWidth < 1024) {
      this.smallSize = true
    }

    // Admin 여부 체크
    if (!this.isAdmin) {
      this.$router.push('/admin')
    }

    // 예약 리스트 조회
    this.selectListMax()
  },
  destroy: function () {
    window.removeEventListener("resize", this.resizeEventHandler)
  },
  mounted: function () {
    // "Go to Top" 버튼 클릭 시 페이지 상단으로 이동
    document.querySelector('#gotop').addEventListener('click', (event) => {
        event.preventDefault() // 기본 동작(페이지 이동) 방지
        window.scrollTo({ top: 0, behavior: 'smooth' }) // 부드럽게 스크롤
    })

    this.$nextTick(() => {
      this.member()
    })

    this.refresher(null)
  },
  setup () {
    const { locale } = useI18n({ useScope: 'global' })

    return {
      locale,
    }
  },
  methods: {
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

      // 중복 방지: 이미 basePath가 포함되어 있다면 추가하지 않음
      if (strippedPath.endsWith(basePath)) {
        return `/#/${langToUse}${strippedPath}`
      }

      // 새 경로 생성
      return `/#/${langToUse}${basePath}`
    },

    showcancelModalImpossible () {
      console.log('showcancelModalImpossible')
      this.cancelModal_impossibble = true
    },
    showcancelModal1 (reservation) {
      this.cancelSeq = reservation.seq
      this.name = reservation.name
    },
    formatDate(date) {
      if (!date) return '' // 날짜 값이 없는 경우 처리

      // ISO 형식 여부 확인 ('T'가 포함된 경우)
      if (date.includes('T')) {
        return date.split('T')[0] // 'T' 이전 부분만 반환
      }

      // 일반 형식 (공백 기준으로 잘라서 첫 번째 부분 반환)
      return date.split(' ')[0]
    },
    // 취소 가능 여부 판단
    isRefundable(checkInDate) {
      // console.log("Original checkInDate:", checkInDate)
      const currentDate = new Date() // 현재 로컬 시간
      // console.log("Current Date:", currentDate)

      const checkIn = new Date(checkInDate)
      // console.log("Original checkIn (Local Time):", checkIn)

      // UTC 기준으로 하루 전 16:00으로 설정
      const adjustedCheckIn = new Date(checkIn.getTime())
      adjustedCheckIn.setUTCDate(checkIn.getUTCDate() - 1)
      adjustedCheckIn.setUTCHours(7, 0, 0, 0) // UTC+9: 16:00 KST = 07:00 UTC

      // console.log("Adjusted checkIn (UTC):", adjustedCheckIn)

      // 비교
      return currentDate < adjustedCheckIn
    },
    loadReservationList() {
      this.reservationList = this.reservationList.map(reservation => ({
        ...reservation,
        refundable: this.isRefundable(reservation.check_in_date),
      }))
    },
    // 전화번호에 '-' 추가
    formatPhoneNumber(number) {
    // console.log(number)
    // console.log(number.slice(0, 3))
    // console.log(number.slice(3, 7))
    // console.log(number.slice(7))
      if (number.length === 11) {
        return `${number.slice(0, 3)}-${number.slice(3, 7)}-${number.slice(7)}`
      } else {
        return `${number}`
      }
    },
    // 추가 서비스 계산
    calculateGroupedExtraServices(reservation) {
      // 각 그룹에 해당하는 값들을 묶음
      const groupedServices = {
        people: [reservation.adults, reservation.children], // 인원
        // extraBed: [reservation.extrabed_adults, reservation.extrabed_children], // 침대 추가
        extraBed: [reservation.extrabed, 0], // 침대 추가
        breakfast: [reservation.breakfast_adults, reservation.breakfast_children], // 조식 추가
        goldLounge: [reservation.gold_lounge_adults, reservation.gold_lounge_children], // 골드 라운지 추가
        restaurant: [reservation.s_restaurant, reservation.m_restaurant], // 레스토랑 추가
      }

      // 그룹별로 값이 하나라도 존재하면 1로 카운트
      return Object.values(groupedServices).reduce((count, group) => {
        const hasValue = group.some(value => value && value !== '0' && value !== 0)
        return count + (hasValue ? 1 : 0)
      }, 0)
    },
    getRestaurantNames(reservation) {
      const restaurants = []
      if (reservation.s_restaurant) {
        restaurants.push('Spectrum')
      }
      if (reservation.m_restaurant) {
        restaurants.push('Mariposa')
      }
      return restaurants.join(', ')
    },
    getReservationService(reservation) {
      if (reservation.reservation_service === 'room') {
        return '룸 및 레스토랑'
      } else {
        return '레스토랑'
      }
    },
    async search() {
      await this.selectListMax()
      await this.refresher(null)
    },
    // 검색어 입력창 키업 이벤트
    onKeyup (event) {
      // 키워드 설정
      this.$store.dispatch('setKeyword', this.keyword)

      if (event.key === 'Enter') { // 엔터일 경우 검색
        this.search()
      }
    },
    // showDetail(seq) {
    //   // 상세 화면으로 이동
    //   // this.$router.push({ path: '/token/detail', query: { seq: seq }})
    //   this.$refs.refUserDetailModal.seq = seq
    //   this.$refs.refUserDetailModal.show()
    // },
    refresher (done) {
      // done - Function to call when you made all necessary updates.
      //        DO NOT forget to call it otherwise the refresh message
      //        will continue to be displayed
      // make some Ajax call then call done()
      this.reservationList = []
      this.refresherDone = done // load가 끝나면 로딩메세지 종료
      this.$refs.infiniteScroll.reset() // index 초기화
      this.$refs.infiniteScroll.resume() // stop에서 다시 재생
      // this.$refs.infiniteScroll.load() // loadMore로 검색
      this.loadMore(1, done)
    },
    loadMore(index, done) {
      // index - called for nth time
      // done - Function to call when you made all necessary updates.
      //        DO NOT forget to call it otherwise your loading message
      //        will continue to be displayed. Has optional boolean
      //        parameter that invokes stop() when true
      // console.log('index: ' + index)
      // make some Ajax call then call done()
      // this.pageNum = index
      setTimeout(() => {
        // alert(index)
        // console.log('loadMore called index: ' + index)
        if (index <= this.lastPageNum) {
          this.selectList(index, done)
          if (index === this.lastPageNum) {
            this.$refs.infiniteScroll.stop()
          }

          // refresher 로딩메세지 처리
          if (this.refresherDone != null && this.refresherDone !== '') {
            this.refresherDone() // 로딩메세지 종료
            this.refresherDone = '' // 로딩메세지 초기화
          }
        }
      }, 500)
    },
    // 사용자 리스트 마지막 페이지 조회
    selectListMax() {
      console.log("selectListMax")
      // 검색어 입력창 x버튼 클릭시 this.keyword가 null이 됨.
      if (!this.keyword) {
        this.keyword = ''
      }
      this.$axios.get('/api/reservation/selectReservationListLastPageNum',
        {params: {pageSize: this.pageSize, keyword: this.keyword}})
        .then((result) => {
          // console.log(JSON.stringify(result.data))
          this.lastPageNum = result.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 사용자 리스트 조회
    selectList(idx, done) {
      if (!this.keyword) {
        this.keyword = ''
        // 키워드 설정
        this.$store.dispatch('setKeyword', this.keyword)
      }
      this.$axios.get('/api/reservation/selectReservationList',
        {params: {pageNum: idx, pageSize: this.pageSize, keyword: this.keyword}})
        .then((result) => {
          // console.log(JSON.stringify(result.data))
          // console.log(result.data)
          if (idx === 1) { // 첫번째 load인 경우
            this.reservationList = [] // 리스트 초기화
          }
          this.reservationList = this.reservationList.concat(result.data)

          // 데이터 없음 표시 설정
          if (!this.reservationList || this.reservationList.length < 1) {
            this.noDataFlag = true
          } else {
            this.noDataFlag = false
          }
          if (done) {
            done()
          }
        })
        .catch((err) => {
          console.log(err)
          if (done) {
            done()
          }
        })
    },
    // status 업데이트
    async updateReservationStatus() {
      const updateReservationVo = {
        status: this.$RESERVATION_STATUS_PROCESSING,  // 예약 취소 신청 - 10
        seq: this.cancelSeq,
      }
      // 로그인 처리
      // alert(JSON.stringify(userVo))
      const result = await this.$axios.post('/api/reservation/updateReservationStatus', updateReservationVo)
      // alert(JSON.stringify(result))
      if (result.data && result.data.resultCd === 'SUCCESS') {
        // 예약 취소 완료 모달
        this.cancelSeq = 0

        // update 성공 후 sendMail()
        this.sendMail()

        this.selectReservationByWalletAddress()
      } else {
        this.$noti(this.$q, '예약 취소 신청에 실패했습니다. CS를 통해 문의 부탁드립니다.')
      }
    },

    //////////////////////////////////////////////////////////////////////////////////
    //                                script code                                   //
    //////////////////////////////////////////////////////////////////////////////////
    member() {
      $('.membership_hotel .tabs2 a').on('click', function (e) {
        e.preventDefault(); // 기본 클릭 동작 방지
        const idx = $(this).parents('li').index(); // 클릭한 탭의 인덱스 가져오기
        $('.membership_hotel .tabs2 a').removeClass('is-active');
        $(this).addClass('is-active');
        $('.membership_hotel .room_info').hide(); // 모든 Room 숨김
        $('.membership_hotel .room_info' + (idx + 1)).fadeIn(); // 선택된 Room 표시
      })
    },

  },
})
</script>
