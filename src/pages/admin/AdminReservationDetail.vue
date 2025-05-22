<template>
  <div class="page_main">
    <div id="Wrap">
  
      <!-- 본문 시작 -->
      <main role="main">
      <!-- main_container -->
      <div id="sub_container" class="membership_wrap membership_reservation">
        
        <section class="container text-center">
          <h3>예약 상세정보</h3>
          
          <div class="form_box form_box_detail">
            <h4>예약자 정보</h4>
            <ul>
              <li>
                <strong>예약자</strong>
                <div class="form_group">
                  {{ reservationVo.name }}
                </div>
              </li>
              <li>
                <strong>연락처</strong>
                <div class="form_group">
                  {{ formatPhoneNumber(reservationVo.tel_number) }}
                </div>
              </li>
              <li>
                <strong>이메일</strong>
                <div class="form_group break-all">
                  {{ reservationVo.email }}
                </div>
              </li>
              <li>
                <strong>카드타입</strong>
                <div class="form_group">
                  {{ reservationVo.card_type }}
                </div>
              </li>
              <li>
                <strong>카드번호</strong>
                <div class="form_group">
                  {{ formatCardNumber(reservationVo.card_number) }}
                </div>
              </li>
              <li>
                <strong>유효기간</strong>
                <div class="form_group">
                  {{ reservationVo.card_expiry_month }} / {{ reservationVo.card_expiry_year }}
                </div>
              </li>
              <li>
                <strong>법인/개인 구분</strong>
                <div class="form_group">
                  {{ reservationVo.customer_type }}
                </div>
              </li>
            </ul>
          </div>

          <!-- 예약 정보 -->
          <div class="form_box form_box_detail mt80">
            <h4>예약 정보 </h4>
            <ul>
              <li>
                <strong>상태</strong>
                <div class="form_group" style="font-weight: bold; color: crimson">
                  {{ getReservationStatusDescription(reservationVo.status) }}
                  <div v-if="reservationVo.cancel_time">
                    {{ reservationVo.cancel_time }}
                  </div>
                </div>
              </li>
              <li>
                <strong>예약 서비스</strong>
                <div class="form_group">
                  {{ getReservationService() }}
                </div>
              </li>
              <li v-if="reservationVo.reservation_service === 'room'">
                <strong>룸 타입</strong>
                <div class="form_group">
                  {{ reservationVo.room_type }}
                </div>
              </li>
              <li v-if="reservationVo.reservation_service === 'room'">
                <strong>예약일</strong>
                <div class="form_group">
                  {{ formatDate(reservationVo.check_in_date) }} ~ {{ formatDate(reservationVo.check_out_date) }}
                </div>
              </li>
              <li v-if="reservationVo.reservation_service === 'room'">
                <strong>인원</strong>
                <div class="form_group">
                  성인 {{ reservationVo.adults }}명 / 어린이 {{ reservationVo.children }}명
                </div>
              </li>
              <li v-if="reservationVo.reservation_service === 'room'">
                <strong>조식 추가</strong>
                <div class="form_group">
                  성인 {{ reservationVo.breakfast_adults }}명 / 어린이 {{ reservationVo.breakfast_children }}명
                </div>
              </li>
              <li v-if="reservationVo.reservation_service === 'room'">
                <strong>골드라운지 추가</strong>
                <div class="form_group">
                  성인 {{ reservationVo.gold_lounge_adults }}명 / 어린이 {{ reservationVo.gold_lounge_children }}명
                </div>
              </li>
              <li v-if="reservationVo.reservation_service === 'room'">
                <strong>Extra bed 추가</strong>
                <div class="form_group">
                  <div v-if="reservationVo.extrabed == '0'">추가 안함</div>
                  <div v-else>추가</div>
                </div>
              </li>
              <li>
                <strong>레스토랑</strong>
                <div class="form_group">
                  <p v-if="reservationVo.s_restaurant">
                    스펙트럼 레스토랑 : <span>성인 {{ reservationVo.s_restaurant_adults }}명 / 어린이 {{ reservationVo.s_restaurant_children }}명</span>
                  </p>
                  <p v-if="reservationVo.m_restaurant">
                    마리포사 레스토랑 : <span>성인 {{ reservationVo.m_restaurant_adults }}명 / 어린이 {{ reservationVo.m_restaurant_children }}명</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <!-- NFT 정보 -->
          <div class="form_box form_box_detail mt80 q-pb-xl">
            <h4>NFT 정보 </h4>
            <ul>
              <li>
                <strong>ALYA</strong>
                <div v-if="reservationVo.has_alya" class="form_group">
                  O
                </div>
                <div v-else class="form_group">
                  X
                </div>
              </li>
              <li>
                <strong>FITRI</strong>
                <div v-if="reservationVo.has_fitri" class="form_group">
                  O
                </div>
                <div v-else class="form_group">
                  X
                </div>
              </li>
              <li>
                <strong>PUNKY KONGZ</strong>
                <div v-if="reservationVo.has_punkykongz" class="form_group">
                  O
                </div>
                <div v-else class="form_group">
                  X
                </div>
              </li>
              <li>
                <strong>GENESIS</strong>
                <div v-if="reservationVo.has_genesis" class="form_group">
                  O
                </div>
                <div v-else class="form_group">
                  X
                </div>
              </li>
            </ul>
          </div>

          <div class="btn_group mt40">
            <a onclick="history.go('-1')" class="btn btn-purple w180">뒤로가기</a>

            <a v-if="reservationVo.status === '5' && reservationVo.refundable" @click.prevent="showConfirmCancel()" class="btn btn-red w180">예약 취소 확정</a>
            <!-- <a v-else-if="reservationVo.status === '5' && !reservationVo.refundable && reservationVo.reservation_service != 'room'" class="btn btn-red w180" @click.prevent="showCancelNotIncluded()">예약 취소 확정</a> -->
            <a v-else-if="reservationVo.status === '50'" @click.prevent="" class="btn btn-gray w180 disabled">예약 취소 확정</a>
            <a v-else class="btn btn-red w180" @click.prevent="showConfirmCancel()">예약 취소 확정</a>

            <a v-if="reservationVo.status === '5'" @click.prevent="" class="btn btn-gray w180 disabled">예약 확정</a>
            <a v-else @click.prevent="showConfirmReservation()" class="btn btn-blue w180" disable>예약 확정</a>
          </div>

        </section>

      </div>
      <!-- //main_container -->
      </main>
      <!-- //본문 끝 -->  
    </div>
  </div>

  <!-- 예약 취소 확정 확인 모달 -->
  <q-dialog v-model="confirmCancel">
    <q-card class="bg-white" style="width: 250px; padding: 10px;">
      <q-card-section class="row items-center" style="">
        <q-icon name="info" color="red" size="md" />
        <!-- <span class="q-ml-sm text-black">{{ orderQuantity }} Punky Kongz?</span> -->
        <span class="q-ml-sm text-black">예약을 취소하시겠습니까?</span>
      </q-card-section>
      <q-separator />
      <q-card-actions align="center">
        <q-btn  style="width: 45%;" label="No" color="grey" v-close-popup />
        <q-btn style="width: 45%;" label="Yes" color="red" v-close-popup @click="updateReservationStatusCancel" />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <!-- 예약 취소 확정 확인 모달 (환불 규정에 포함되지 않는 건) -->
  <q-dialog v-model="confirmCancelNotIncluded">
    <q-card class="bg-white" style="width: 350px; padding: 10px;">
      <q-card-section class="row items-center" style="" align="center">
        <q-icon name="warning" color="red" size="md" style="padding-right: 5px;"/>
        <!-- <span class="q-ml-sm text-black">{{ orderQuantity }} Punky Kongz?</span> -->
        <span class="q-ml-sm text-black" style="text-align: start;">환불 규정에 포함되지않습니다.<br/>예약을 취소하시겠습니까?</span>
      </q-card-section>
      <q-separator />
      <q-card-actions align="center">
        <q-btn  style="width: 45%;" label="No" color="grey" v-close-popup />
        <q-btn style="width: 45%;" label="Yes" color="red" v-close-popup @click="updateReservationStatusCancel" />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <!-- 예약 확정 확인 모달 -->
  <q-dialog v-model="confirmReservation">
    <q-card class="bg-white" style="width: 300px; padding: 10px;">
      <q-card-section class="row items-center" style="" align="center">
        <q-icon name="check_circle" color="primary" size="md" style="padding-right: 5px;"/>
        <!-- <span class="q-ml-sm text-black">{{ orderQuantity }} Punky Kongz?</span> -->
        <span class="q-ml-sm text-black" style="text-align: start;">예약을 확정하시겠습니까?</span>
      </q-card-section>
      <q-separator />
      <q-card-actions align="center">
        <q-btn  style="width: 45%;" label="No" color="grey" v-close-popup />
        <q-btn style="width: 45%;" label="Yes" color="primary" v-close-popup @click="updateReservationStatusConfirm" />
      </q-card-actions>
    </q-card>
  </q-dialog>



</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import wait from 'waait'
import { QSpinnerGears } from 'quasar'

import $ from 'jquery';
import { se } from 'date-fns/locale';


export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
      confirmCancel: false,
      confirmCancelNotIncluded:  false,
      confirmReservation:  false,
      smallSize: false,
      reservationVo: {
        seq: 0,
        status: '',
        locale: '',
        nft_type: '',
        has_alya: false,
        has_fitri: false,
        has_punkykongz: false,
        has_genesis: false,
        name: '',
        tel_number: '',
        email: '',
        card_type: '',
        card_number: '',
        card_expiry_month: '',
        card_expiry_year: '',
        customer_type: '',
        reservation_service: '',
        room_type: '',
        check_in_date: '',
        check_out_date: 'Z',
        adults: '',
        children: '',
        extrabed: '',
        breakfast_adults: '',
        breakfast_children: '',
        gold_lounge_adults: '',
        gold_lounge_children: '',
        s_restaurant: false,
        s_restaurant_adults: '',
        s_restaurant_children: '',
        m_restaurant: true,
        m_restaurant_adults: '',
        m_restaurant_children: '',
        refundable: '',
        cancel_time: '',
      },
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
      return this.$store.getters.getAdcd === this.$adminCode
    },
  },
  created: function () {
    // 자동로그인 이슈로 쿠키를 세션으로 변경
    const adcd = sessionStorage.getItem('ADCD')
    if (adcd) {
      this.$store.dispatch('setAdcd', adcd)
    }

    // 화면 리사이즈 이벤트 핸들러
    window.addEventListener("resize", this.resizeEventHandler)
    if (document.body.offsetWidth < 1024) {
      this.smallSize = true
    }

    // Admin 여부 체크
    if (!this.isAdmin) {
      this.$router.push('/admin')
    }

    this.reservationVo.seq = this.$route.query.s

    this.selectReservation()
  },
  destroy: function () {
    window.removeEventListener("resize", this.resizeEventHandler)
  },
  mounted: function () {
    // "Go to Top" 버튼 클릭 시 페이지 상단으로 이동
    document.querySelector('#gotop').addEventListener('click', (event) => {
        event.preventDefault(); // 기본 동작(페이지 이동) 방지
        window.scrollTo({ top: 0, behavior: 'smooth' }); // 부드럽게 스크롤
    });

    this.$nextTick(() => {
      this.member()
    });
  },
  setup () {
    const { locale } = useI18n({ useScope: 'global' })

    return {
      locale,
    }
  },
  methods: {
    showConfirmReservation() {
      this.confirmReservation = !this.confirmReservation
    },
    showConfirmCancel() {
      this.confirmCancel = !this.confirmCancel
    },
    showCancelNotIncluded() {
      this.confirmCancelNotIncluded = !this.confirmCancelNotIncluded
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
    selectReservation() {
      this.$axios.get('/api/reservation/selectReservation', {
        params: { seq: this.reservationVo.seq },
      })
      .then((result) => {
        this.reservationVo = result.data
        console.log(this.reservationVo)

        // refundable 계산
        this.reservationVo.refundable = this.isRefundable(this.reservationVo.check_in_date);
      })
      .catch((err) => {
        console.log(err)
      })
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
    formatCardNumber(cardNumber) {
      return cardNumber.replace(/(\d{4})(?=\d)/g, '$1-')
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
    getReservationService() {
      if (this.reservationVo.reservation_service === 'room') {
        return '룸 및 레스토랑'
      } else {
        return '레스토랑'
      }
    },
    getReservationStatusDescription(status) {
      switch (status) {
        case this.$RESERVATION_STATUS_WAIT:
          return '예약신청' // 예약 신청 상태
        case this.$RESERVATION_STATUS_FAILED:
          return '예약확정' // 예약 확정 상태
        case this.$RESERVATION_STATUS_PROCESSING:
          return '취소신청' // 예약 취소 신청 상태
        case this.$RESERVATION_STATUS_COMPLETED:
          return '취소확정' // 예약 취소 확정 상태
        default:
          return '알 수 없음' // 예외적인 상태
      }
    },

    // status 업데이트
    // 예약 취소 확정
    async updateReservationStatusCancel() {
      const updateReservationVo = {
        status: this.$RESERVATION_STATUS_COMPLETED,  // 예약 취소 확정 - 50
        seq: this.reservationVo.seq,
      }
      // 로그인 처리
      // alert(JSON.stringify(userVo))
      const result = await this.$axios.post('/api/reservation/updateReservationStatus', updateReservationVo)
      // alert(JSON.stringify(result))
      if (result.data && result.data.resultCd === 'SUCCESS') {
        // update 성공 후 sendMail()
        this.sendMailCancel()

        // this.selectReservation()
        this.$router.go(-1)
      } else {
        this.$noti(this.$q, '예약 취소 확정에 실패했습니다. CS를 통해 문의 부탁드립니다.')
      }
    },
    // 예약 완료 확정
    async updateReservationStatusConfirm() {
      const updateReservationVo = {
        status: this.$RESERVATION_STATUS_FAILED,  // 예약 확정 - 5
        seq: this.reservationVo.seq,
      }
      // 로그인 처리
      // alert(JSON.stringify(userVo))
      const result = await this.$axios.post('/api/reservation/updateReservationStatus', updateReservationVo)
      // alert(JSON.stringify(result))
      if (result.data && result.data.resultCd === 'SUCCESS') {

        // update 성공 후 sendMail()
        this.sendMailConfirm()

        // this.selectReservation()
        this.$router.go(-1)
      } else {
        this.$noti(this.$q, '예약 확정에 실패했습니다. CS를 통해 문의 부탁드립니다.')
      }
    },
    // send email (예약 확정 메일 전송)
    sendMailConfirm() {
      // 현재 시간 (한국 시간) 가져오기
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Seoul',
      }
      const currentTimeKST = new Intl.DateTimeFormat('ko-KR', options).format(new Date())

      const name = this.reservationVo.name
      const emailTo = this.reservationVo.email

      // const serviceType = this.reservationVo.reservation_service === 'room' ? '룸 및 레스토랑' : '레스토랑'

      // 숙박 or 숙박/레스토랑 or 레스토랑
      let serviceName = ''
      if(this.reservationVo.locale === 'kor') {
        if (this.reservationVo.adults > 0) {
          serviceName = '숙박'
        }
        if (this.reservationVo.m_restaurant || this.reservationVo.s_restaurant) {
          if (serviceName) {
            serviceName += '/'
          }
          serviceName += '레스토랑'
        }
      } else if(this.reservationVo.locale === 'idn') {
        // 인도어
        if (this.reservationVo.adults > 0) {
          serviceName = 'Menginap'
        }
        if (this.reservationVo.m_restaurant || this.reservationVo.s_restaurant) {
          if (serviceName) {
            serviceName += '/'
          }
          serviceName += 'Restoran'
        }
      } else {
        if (this.reservationVo.adults > 0) {
          serviceName = 'Stay'
        }
        if (this.reservationVo.m_restaurant || this.reservationVo.s_restaurant) {
          if (serviceName) {
            serviceName += '/'
          }
          serviceName += 'Restaurant'
        }
      }



      const title = `[PUNKVISM] ${name} 님의 예약이 확정되었습니다.`
      let contents
      if(this.reservationVo.locale === 'kor') {
        // 한국어
        contents = `
          <div style="border:5px solid #7936d3;padding:30px 20px;max-width:450px;text-align:center;margin:0;">
            <div style="border-bottom:2px solid #000;padding:0;padding-bottom:20px;color:#7936d3;font-size:24px;font-weight:800;text-align:center;margin:0;">Punkvism</div>
            <div style="padding:30px 0 20px 0; font-size:22px; text-align:center;margin:0;">${name}님의<br /> <strong>예약이 확정</strong>되었습니다.</div>
            <div style="font-size:15px; text-align:center;padding:0;margin:0;">
              안녕하세요. ${name} 님
              <br />
              <br />페어몬트 앰버서더 서울
              <br /> [${serviceName}] 예약이 확정되었습니다.
              <br />
              <br />PUNKVISM 공식사이트에
              <br />접속하시어 MY PAGE에서
              <br />상세내역을 확인하실 수 있습니다.
              <br />
              <br />궁금한 점이 있다면
              <br />아래 링크를 통해
              <br />CS팀에게 문의해주세요.
              <br />
              <br />언제나 비범함에 도전하는
              <br />펑키콩즈팀이 되겠습니다!
              <br />감사합니다.
            </div>
            <div style="padding:30px 0px 30px 0px;margin:0;">
              <a href="https://open.kakao.com/o/sML9vn5g" style="display:inline-block;padding:15px 25px;color:#fff;background:#7936d3;border-radius:4px;margin:0;font-size:15px;">펑크비즘 멤버십 CS</a>
            </div>
            <div style="border-top:2px solid #000;padding:30px 0 0 0;margin:0;">
              <p style="padding:0;font-size:13px;color:#555;text-decoration:undeline;margin:0;">*본 메일은 발신 전용 메일입니다.</p>
              <p style="padding:0;font-size:13px;color:#555;margin:0;margin-top:5px;">© 2024 Punkvism. all rights reserved.</p>
            </div>
          </div>
        `
      } else if(this.reservationVo.locale === 'idn') {
        // 인도어
        contents = `
          <div style="border:5px solid #7936d3;padding:30px 20px;max-width:450px;text-align:center;margin:0;">
            <div style="border-bottom:2px solid #000;padding:0;padding-bottom:20px;color:#7936d3;font-size:24px;font-weight:800;text-align:center;margin:0;">Punkvism</div>
            <div style="padding:30px 0 20px 0; font-size:22px; text-align:center;margin:0;">
              Reservasi Anda<br /> <strong>telah dikonfirmasi</strong>, ${name}.
            </div>
            <div style="font-size:15px; text-align:center;padding:0;margin:0;">
              Halo ${name},
              <br />
              <br />Fairmont Ambassador Seoul
              <br /> [${serviceName}] reservasi Anda telah dikonfirmasi.
              <br />
              <br />Silakan kunjungi situs resmi PUNKVISM
              <br />dan periksa detailnya di bagian MY PAGE.
              <br />
              <br />Jika Anda memiliki pertanyaan,
              <br />silakan hubungi tim CS kami
              <br />melalui tautan di bawah ini.
              <br />
              <br />Kami akan selalu berusaha
              <br />untuk menantang hal yang luar biasa.
              <br />Terima kasih.
            </div>
            <div style="padding:30px 0px 30px 0px;margin:0;">
              <a href="https://open.kakao.com/o/sML9vn5g" style="display:inline-block;padding:15px 25px;color:#fff;background:#7936d3;border-radius:4px;margin:0;font-size:15px;">CS Membership Punkvism</a>
            </div>
            <div style="border-top:2px solid #000;padding:30px 0 0 0;margin:0;">
              <p style="padding:0;font-size:13px;color:#555;text-decoration:underline;margin:0;">*Email ini hanya untuk pemberitahuan dan tidak dapat dibalas.</p>
              <p style="padding:0;font-size:13px;color:#555;margin:0;margin-top:5px;">© 2024 Punkvism. Hak cipta dilindungi undang-undang.</p>
            </div>
          </div>
        `

      } else {
        // 영어
        contents = `
          <div style="border:5px solid #7936d3;padding:30px 20px;max-width:450px;text-align:center;margin:0;">
            <div style="border-bottom:2px solid #000;padding:0;padding-bottom:20px;color:#7936d3;font-size:24px;font-weight:800;text-align:center;margin:0;">Punkvism</div>
            <div style="padding:30px 0 20px 0; font-size:22px; text-align:center;margin:0;">
              Your reservation<br /> <strong>has been confirmed</strong>, ${name}.
            </div>
            <div style="font-size:15px; text-align:center;padding:0;margin:0;">
              Hello ${name},
              <br />
              <br />Fairmont Ambassador Seoul
              <br /> [${serviceName}] reservation has been confirmed.
              <br />
              <br />Please visit the official PUNKVISM website
              <br />and check the details in the MY PAGE section.
              <br />
              <br />If you have any questions,
              <br />please contact our CS team
              <br />through the link below.
              <br />
              <br />We will always strive to challenge
              <br />the extraordinary.
              <br />Thank you.
            </div>
            <div style="padding:30px 0px 30px 0px;margin:0;">
              <a href="https://open.kakao.com/o/sML9vn5g" style="display:inline-block;padding:15px 25px;color:#fff;background:#7936d3;border-radius:4px;margin:0;font-size:15px;">Punkvism Membership CS</a>
            </div>
            <div style="border-top:2px solid #000;padding:30px 0 0 0;margin:0;">
              <p style="padding:0;font-size:13px;color:#555;text-decoration:underline;margin:0;">*This is a no-reply email.</p>
              <p style="padding:0;font-size:13px;color:#555;margin:0;margin-top:5px;">© 2024 Punkvism. all rights reserved.</p>
            </div>
          </div>
        `
      }

      const params = {
        subject: title,
        text: contents,
        email_from: this.$systemMailFrom,
        email_to: emailTo,
      }
      this.$axios.post('/api/common/sendMail', params)
        .then((result) => {
          // console.log(result.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // send email (예약 취소 확정 메일 전송)
    sendMailCancel() {
      // 현재 시간 (한국 시간) 가져오기
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Seoul',
      };
      const currentTimeKST = new Intl.DateTimeFormat('ko-KR', options).format(new Date())

      const name = this.reservationVo.name
      const emailTo = this.reservationVo.email

      // const serviceType = this.reservationVo.reservation_service === 'room' ? '룸 및 레스토랑' : '레스토랑'

      // 숙박 or 숙박/레스토랑 or 레스토랑
      let serviceName = ''
      if(this.reservationVo.locale === 'kor') {
        if (this.reservationVo.adults > 0) {
          serviceName = '숙박'
        }
        if (this.reservationVo.m_restaurant || this.reservationVo.s_restaurant) {
          if (serviceName) {
            serviceName += '/'
          }
          serviceName += '레스토랑'
        }
      } else if(this.reservationVo.locale === 'idn') {
        // 인도어
        if (this.reservationVo.adults > 0) {
          serviceName = 'Menginap'
        }
        if (this.reservationVo.m_restaurant || this.reservationVo.s_restaurant) {
          if (serviceName) {
            serviceName += '/'
          }
          serviceName += 'Restoran'
        }
      } else {
        if (this.reservationVo.adults > 0) {
          serviceName = 'Stay'
        }
        if (this.reservationVo.m_restaurant || this.reservationVo.s_restaurant) {
          if (serviceName) {
            serviceName += '/'
          }
          serviceName += 'Restaurant'
        }
      }

      const title = `[PUNKVISM] ${name} 님의 예약이 취소되었습니다.`
      let contents
      if(this.reservationVo.locale === 'kor') {
        // 한국어
        contents = `
          <div style="border:5px solid #7936d3;padding:30px 20px;max-width:450px;text-align:center;margin:0;">
            <div style="border-bottom:2px solid #000;padding:0;padding-bottom:20px;color:#7936d3;font-size:24px;font-weight:800;text-align:center;margin:0;">Punkvism</div>
            <div style="padding:30px 0 20px 0; font-size:22px; text-align:center;margin:0;">${name}님의<br /> <strong>예약이 취소</strong>되었습니다.</div>
            <div style="font-size:15px; text-align:center;padding:0;margin:0;">
              안녕하세요. ${name} 님
              <br />
              <br />페어몬트 앰버서더 서울
              <br /> [${serviceName}] 예약이 취소되었습니다.
              <br />
              <br />PUNKVISM 공식사이트에
              <br />접속하시어 MY PAGE에서
              <br />상세내역을 확인하실 수 있습니다.
              <br />
              <br />궁금한 점이 있다면
              <br />아래 링크를 통해
              <br />CS팀에게 문의해주세요.
              <br />
              <br />언제나 비범함에 도전하는
              <br />펑키콩즈팀이 되겠습니다!
              <br />감사합니다.
            </div>
            <div style="padding:30px 0px 30px 0px;margin:0;">
              <a href="https://open.kakao.com/o/sML9vn5g" style="display:inline-block;padding:15px 25px;color:#fff;background:#7936d3;border-radius:4px;margin:0;font-size:15px;">펑크비즘 멤버십 CS</a>
            </div>
            <div style="border-top:2px solid #000;padding:30px 0 0 0;margin:0;">
              <p style="padding:0;font-size:13px;color:#555;text-decoration:undeline;margin:0;">*본 메일은 발신 전용 메일입니다.</p>
              <p style="padding:0;font-size:13px;color:#555;margin:0;margin-top:5px;">© 2024 Punkvism. all rights reserved.</p>
            </div>
          </div>
        `
      } else if(this.reservationVo.locale === 'idn') {
        // 인도어
        contents = `
          <div style="border:5px solid #7936d3;padding:30px 20px;max-width:450px;text-align:center;margin:0;">
            <div style="border-bottom:2px solid #000;padding:0;padding-bottom:20px;color:#7936d3;font-size:24px;font-weight:800;text-align:center;margin:0;">Punkvism</div>
            <div style="padding:30px 0 20px 0; font-size:22px; text-align:center;margin:0;">
              Reservasi Anda<br /> <strong>telah dibatalkan</strong>, ${name}.
            </div>
            <div style="font-size:15px; text-align:center;padding:0;margin:0;">
              Halo ${name},
              <br />
              <br />Fairmont Ambassador Seoul
              <br /> [${serviceName}] reservasi Anda telah dibatalkan.
              <br />
              <br />Silakan kunjungi situs resmi PUNKVISM
              <br />dan periksa detailnya di bagian MY PAGE.
              <br />
              <br />Jika Anda memiliki pertanyaan,
              <br />silakan hubungi tim CS kami
              <br />melalui tautan di bawah ini.
              <br />
              <br />Kami akan selalu berusaha
              <br />untuk menantang hal yang luar biasa.
              <br />Terima kasih.
            </div>
            <div style="padding:30px 0px 30px 0px;margin:0;">
              <a href="https://open.kakao.com/o/sML9vn5g" style="display:inline-block;padding:15px 25px;color:#fff;background:#7936d3;border-radius:4px;margin:0;font-size:15px;">CS Membership Punkvism</a>
            </div>
            <div style="border-top:2px solid #000;padding:30px 0 0 0;margin:0;">
              <p style="padding:0;font-size:13px;color:#555;text-decoration:underline;margin:0;">*Email ini hanya untuk pemberitahuan dan tidak dapat dibalas.</p>
              <p style="padding:0;font-size:13px;color:#555;margin:0;margin-top:5px;">© 2024 Punkvism. Hak cipta dilindungi undang-undang.</p>
            </div>
          </div>
        `
      } else {
        // 영어
        contents = `
          <div style="border:5px solid #7936d3;padding:30px 20px;max-width:450px;text-align:center;margin:0;">
            <div style="border-bottom:2px solid #000;padding:0;padding-bottom:20px;color:#7936d3;font-size:24px;font-weight:800;text-align:center;margin:0;">Punkvism</div>
            <div style="padding:30px 0 20px 0; font-size:22px; text-align:center;margin:0;">
              Your reservation<br /> <strong>has been canceled</strong>, ${name}.
            </div>
            <div style="font-size:15px; text-align:center;padding:0;margin:0;">
              Hello ${name},
              <br />
              <br />Fairmont Ambassador Seoul
              <br /> [${serviceName}] reservation has been canceled.
              <br />
              <br />Please visit the official PUNKVISM website
              <br />and check the details in the MY PAGE section.
              <br />
              <br />If you have any questions,
              <br />please contact our CS team
              <br />through the link below.
              <br />
              <br />We will always strive to challenge
              <br />the extraordinary.
              <br />Thank you.
            </div>
            <div style="padding:30px 0px 30px 0px;margin:0;">
              <a href="https://open.kakao.com/o/sML9vn5g" style="display:inline-block;padding:15px 25px;color:#fff;background:#7936d3;border-radius:4px;margin:0;font-size:15px;">Punkvism Membership CS</a>
            </div>
            <div style="border-top:2px solid #000;padding:30px 0 0 0;margin:0;">
              <p style="padding:0;font-size:13px;color:#555;text-decoration:underline;margin:0;">*This is a no-reply email.</p>
              <p style="padding:0;font-size:13px;color:#555;margin:0;margin-top:5px;">© 2024 Punkvism. all rights reserved.</p>
            </div>
          </div>
        `
      }


      const params = {
        subject: title,
        text: contents,
        email_from: this.$systemMailFrom,
        email_to: emailTo,
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

<style scoped>
.btn.btn-red{
	background:#ca3737;
	color:#fff;
}
.btn.btn-red-o{
	border:3px solid #ca3737;
	color:#ca3737;
}
.btn.btn-blue{
	background:#376aca;
	color:#fff;
}
.btn.btn-blue-o{
	border:3px solid #376aca;
	color:#376aca;
}
.btn.btn-gray{
	background:#6d6d6d;
	color:#fff;
}
.btn.btn-gray-o{
	border:3px solid #6d6d6d;
	color:#6d6d6d;
}
/* 비활성화 스타일 */
a.disabled {
  pointer-events: none; 
  opacity: 0.5; 
  cursor: not-allowed; 
}
</style>