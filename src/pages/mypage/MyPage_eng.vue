<template>
  <div class="page_main">
    <div id="Wrap">
  
      <!-- 본문 시작 -->
      <main role="main">
      <!-- main_container -->
      <div id="sub_container" class="membership_wrap membership_mypage">
        <section class="container text-center">
          <h3>MY PAGE</h3>
          <div class="tabs1 full_bg">
            <ul>
              <li><a href="#." class="is-active">Reservation Status</a></li>
            </ul>
          </div>
          <div class="table_scroll_container">
            <div class="table_group">
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
                    <th>Type</th>
                    <th>Service</th>
                    <th>Extras</th>
                    <th>Applied Date</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody v-if="reservationList.length > 0">
                  <tr v-for="(reservation, index) in reservationList" :key="index">
                    <td>{{ reservation.nft_type }}</td>
                    <td>{{ getReservationService(reservation) }}</td>
                    <td v-if="reservation.reservation_service === 'room'">{{ reservation.room_type }} ({{ Number(reservation.adults) + Number(reservation.children) }}인)</td>
                    <td v-else>{{ getRestaurantNames(reservation) }}</td>
                    <td v-if="reservation.reservation_service === 'room'">{{ calculateGroupedExtraServices(reservation) }}</td>
                    <td v-else>-</td>
                    <td>{{ formatDate(reservation.reg_time) }}</td>
                    <td>{{ formatDate(reservation.check_in_date) }} ~ {{ formatDate(reservation.check_out_date) }}</td>
                    <td>{{ reservation.name }}</td>
                    <td>{{ formatPhoneNumber(reservation.tel_number) }}</td>
                    <td>
                      <!-- 상세보기 버튼 -->
                      <p><a :href="mypageDetailPath + reservation.seq" class="btn view">View Details</a></p>

                      <!-- 취소 버튼 -->
                      <p v-if="reservation.status === '0'">
                        <a class="btn cancel">Pending</a>
                      </p>
                      <p v-else-if="reservation.status === '10'">
                        <a class="btn cancel">Cancel Pending</a>
                      </p>
                      <p v-else-if="reservation.status === '50'">
                        <a class="btn com">Canceled</a>
                      </p>

                      <!-- 예약취소 및 취소불가 -->
                      <p v-if="reservation.status === '5' && reservation.refundable">
                        <a href="#." @click.prevent="showcancelModal1(reservation)" data-toggle="modal" data-target="#pop_reservation_cancel" class="btn cancel">Reservation Cancelled</a>
                      </p>
                      <p v-else-if="reservation.status === '5' && !reservation.refundable">
                        <a href="#." class="btn imp" data-toggle="modal" data-target="#pop_cancel_Impossible">Non-Refundable</a>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-if="reservationList.length === 0" class="text-center wp100" style="margin: 100px 0px;">
                No reservations available.
              </div>
            </div>
          </div>

          <h4 class="mem_title mt60">Cancellation and Refund Policy</h4>
          <div class="row text-left">
            <div class="col-lg-6">
              <div class="notice_box bdr">
                <i class="xi-error"></i>
                <div>
                  <strong class="dp-block mb15">Accommodation Cancellation and Refund Policy</strong>
                  By 4:00 PM, 1 day prior to the check-in date: 100% refund
                  <br />After 4:00 PM, 1 day prior to the check-in date, including the day of check-in and no-shows: Non-refundable
                  <br />For multiple-night stays, accommodation costs are charged up to the cancellation date based on the check-in date.
                  <p class="mt15 fc_gray">ex) In the case of a 2-night, 3-day stay, if canceled on the check-in date, the cost for one night will be charged.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mt20-md">
              <div class="notice_box bdr">
                <i class="xi-error"></i>
                <div>
                  <strong class="dp-block mb15">Restaurant Cancellation and Refund Policy</strong>
                  By 4:00 PM, 1 day prior to the reservation date: 100% refund
                  <br />After 4:00 PM, 1 day prior to the reservation date, including the day of the reservation and no-shows: Non-refundable
                </div>
              </div>
            </div>
            <div class="col-12 mt30 mt20-md">
              <div class="notice_box bdr h-auto">
                <i class="xi-error"></i>
                <div>
                  <strong class="dp-block mb15">If you have not received the <span>Reservation Confirmation</span> or <span>Reservation Cancellation</span> email, please check the following steps:</strong>
                  <p><i>1.</i> Please check your spam or junk mail folder.</p>
                  <p><i>2.</i> Mark the sender's email address as safe or trusted, and you will be able to receive emails normally in the future.</p>
                  <p><i>3.</i> Occasionally, emails may not be received if they are mistakenly identified as untrusted.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="cs_box mt40">
            <div><img src="_img/membership/membership_mypage_cs.png" alt="" /></div>
            <dl>
              <dt>Punkvism Membership Customer Support</dt>
              <dd>
                Need assistance?
                <br /> We’re here to help quickly and courteously.
              </dd>
            </dl>
            <div>
              <a @click="openUrl('https://open.kakao.com/o/sML9vn5g')" class="btn btn-sm btn-purple bdr5 w220">Punkvism Membership CS</a>
            </div>
          </div>
          

        </section>

      </div>
      <!-- //main_container -->
      </main>
      <!-- //본문 끝 -->

      <!-- modal -->
      <!-- pop_reservation_cancel -->
      <div class="modal inner fade modal-style1" id="pop_reservation_cancel">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <p class="modal_icon"><img src="_img/comm/modal_icon_warning.png" alt="!" /></p>
              <h3 class="modal_title">Are you sure you want to cancel the reservation?</h3>
              <div class="modal_cont">
                 Once canceled, the reservation cannot be reinstated.
                  <br />Please make your decision carefully.
              </div>
              <div class="modal_btn_group">
                <a class="btn btn-black-o" data-dismiss="modal">No </a>
                <a @click.prevent="updateReservationStatus()" class="btn" data-dismiss="modal" data-toggle="modal" data-target="#pop_reservation_cancel2">Yes, cancel it</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- pop_reservation_cancel -->
      <div class="modal inner fade modal-style1" id="pop_reservation_cancel2">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <p class="modal_icon"><img src="_img/comm/modal_icon_warning.png" alt="!" /></p>
              <h3 class="modal_title">Your reservation has been canceled.</h3>
              <div class="modal_cont">
                The operations team will review the cancellation and provide further details via email.
              </div>
              <div class="modal_btn_group">
                <a class="btn btn-black-o" data-dismiss="modal">Confirm</a>
                <a href="https://open.kakao.com/o/sML9vn5g" class="btn" >Contact CS Team</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- pop_cancel_Impossible -->
      <div class="modal inner fade modal-style1" id="pop_cancel_Impossible">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <p class="modal_icon"><img src="_img/comm/modal_icon_warning.png" alt="!" /></p>
              <h3 class="modal_title">Cancellation is not possible. <br />Please contact the CS team for assistance. </h3>
              <div class="modal_cont">
                <dl>
                  <dt>Accommodation Cancellation and Refund Policy</dt>
                  <dd>
                      By 4:00 PM, 1 day prior to the check-in date: 100% refund
                      <br />After 4:00 PM, 1 day prior to the check-in date, including the day of check-in and no-shows: Non-refundable
                      <br />For multiple-night stays, accommodation costs are charged up to the cancellation date based on the check-in date.
                  </dd>
                  <dd>ex) For a 2-night, 3-day stay, if canceled on the check-in date, the cost for one night will be charged.</dd>
                </dl>
              </div>
              <div class="modal_btn_group">
                <a class="btn btn-black-o" data-dismiss="modal">Confirm</a>
                <a href="https://open.kakao.com/o/sML9vn5g" class="btn">Contact CS Team</a>
              </div>
            </div>
          </div>
        </div>
      </div>


  
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import wait from 'waait'
// import { QSpinnerGears } from 'quasar'

import $ from 'jquery';


export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      smallSize: false,
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
      return this.localizedPath('/mypage/detail?s=')
    },
  },
  created: function () {
    // 자동로그인 이슈로 쿠키를 세션으로 변경
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

    // 예약 리스트 조회
    this.selectReservationByWalletAddress()
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
  },
  setup () {
    const { locale } = useI18n({ useScope: 'global' })

    return {
      locale,
    }
  },
  methods: {
    openUrl(url) {
      window.open(url, '_system')
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
        return 'Room/Restaurant'
      } else {
        return 'Restaurant'
      }
    },
    selectReservationByWalletAddress() {
      this.$axios.get('/api/reservation/selectReservationByWalletAddress', {
        params: { walletAddress: this.getWalletAddress },
      })
      .then((result) => {
        // 서버에서 받은 예약 리스트를 로드하며 refundable 속성을 추가
        this.reservationList = result.data.map(reservation => ({
          ...reservation,
          refundable: this.isRefundable(reservation.check_in_date),
        }))
      })
      .catch((err) => {
        console.log(err)
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
        // update 성공 후 sendMail()
        await this.sendMail()

        // 예약 취소 완료 모달
        this.cancelSeq = 0

        this.selectReservationByWalletAddress()
      } else {
        this.$noti(this.$q, '예약 취소 신청에 실패했습니다. CS를 통해 문의 부탁드립니다.')
      }
    },
    // send email (관리자에게 전송, 예약 취소 신청 메일)
    async sendMail() {
      // 숙박 or 숙박/레스토랑 or 레스토랑
      let reservationVo = null
      for (let i = 0; i < this.reservationList.length; i++) {
        const reservationObj = this.reservationList[i]
        // console.log('reservationObj.seq: ' + reservationObj.seq + ' , this.cancelSeq: ' + this.cancelSeq)
        // console.log(reservationObj)
        if (reservationObj.seq == this.cancelSeq) {
          reservationVo = reservationObj
          // console.log('reservationVo: ')
          // console.log(reservationVo)
          break
        }
      }
      let serviceName = ''
      if (reservationVo.adults > 0) {
        serviceName = 'Room'
      }
      if (reservationVo.m_restaurant || reservationVo.s_restaurant) {
        if (serviceName) {
          serviceName += '/'
        }
        serviceName += 'Restaurant'
      }

      // 현재 시간 (한국 시간) 가져오기
      const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Seoul',
      };
      const currentTimeKST = new Intl.DateTimeFormat('ko-KR', options).format(new Date());

      const title = `[PUNKVISM] ${this.name} 님의 예약 취소 요청을 확인해주세요.`;
      const contents = `
        <div style="border:5px solid #7936d3;padding:30px 20px;max-width:450px;text-align:center;margin:0;">
          <div style="border-bottom:2px solid #000;padding:0;padding-bottom:20px;color:#7936d3;font-size:24px;font-weight:800;text-align:center;margin:0;">Punkvism</div>
          <div style="padding:30px 0 20px 0; font-size:22px; text-align:center;margin:0;">${this.name}님의 <br /><strong>예약 취소를 확인</strong>해주세요.</div>
          <div style="padding:0;margin:0;padding-bottom:40px;">
            <table style="padding:0;border-top:1px solid #000;width:100%;margin:0;">
              <tr>
                <th style="padding:10px;font-size:14px;border-bottom:1px solid #ddd;background:#f7f7f7;width:100px;">시간</th>
                <td style="border-bottom:1px solid #ddd;border-left:1px solid #ddd;padding:0;padding-left:10px;font-size:14px;text-align:left;">${currentTimeKST}</td>
              </tr>
              <tr>
                <th style="padding:10px;font-size:14px;border-bottom:1px solid #ddd;background:#f7f7f7;width:100px;">예약자 성함</th>
                <td style="border-bottom:1px solid #ddd;border-left:1px solid #ddd;padding:0;padding-left:10px;font-size:14px;text-align:left;">${this.name}</td>
              </tr>
            </table>
          </div>
          <div style="font-size:14px; text-align:center;padding:0;padding-bottom:30px;margin:0;">
            [${serviceName}] 예약 요청이 취소되었습니다.
            <br />확인 후 승인해주시길 바랍니다.
          </div>
          <div style="border-top:2px solid #000;padding:30px 0 0 0;margin:0;">
            <p style="padding:0;font-size:13px;color:#555;text-decoration:undeline;margin:0;">*본 메일은 발신 전용 메일입니다.</p>
            <p style="padding:0;font-size:13px;color:#555;margin:0;margin-top:5px;">© 2024 Punkvism. all rights reserved.</p>
          </div>
        </div>
      `

      const params = {
        subject: title,
        text: contents,
        email_from: this.$systemMailFrom,
        email_to: this.$systemMailTo,
      }
      this.$axios.post('/api/common/sendMail', params)
        .then((result) => {
          // console.log(result.data)
        })
        .catch((err) => {
          console.log(err)
        })
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
