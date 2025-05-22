<template>
  <div class="page_main">
    <div id="Wrap">
  
      <!-- 본문 시작 -->
      <main role="main">
      <!-- main_container -->
      <div id="sub_container" class="membership_wrap membership_reservation">
        
        <section class="container text-center">
          <h3>Reservation Details</h3>
          
          <div class="form_box form_box_detail">
            <h4>Reservation Information</h4>
            <ul>
              <li>
                <strong>Reserver</strong>
                <div class="form_group">
                  {{ reservationVo.name }}
                </div>
              </li>
              <li>
                <strong>Contact</strong>
                <div class="form_group">
                  {{ formatPhoneNumber(reservationVo.tel_number) }}
                </div>
              </li>
              <li>
                <strong>Email</strong>
                <div class="form_group break-all">
                  {{ reservationVo.email }}
                </div>
              </li>
              <li>
                <strong>Card Type</strong>
                <div class="form_group">
                  {{ reservationVo.card_type }}
                </div>
              </li>
              <li>
                <strong>Card Number</strong>
                <div class="form_group">
                  {{ formatCardNumber(reservationVo.card_number) }}
                </div>
              </li>
              <li>
                <strong>Expiration Date</strong>
                <div class="form_group">
                  {{ reservationVo.card_expiry_month }} / {{ reservationVo.card_expiry_year }}
                </div>
              </li>
              <li>
                <strong>Individual/Corporate</strong>
                <div class="form_group">
                  {{ reservationVo.customer_type }}
                </div>
              </li>
            </ul>
          </div>

          <!-- 예약 정보 -->
          <div class="form_box form_box_detail mt80">
            <h4>Reservation Details </h4>
            <ul>
              <li>
                <strong>Reservation Service</strong>
                <div class="form_group">
                  {{ getReservationService() }}
                </div>
              </li>
              <li v-if="reservationVo.reservation_service === 'room'">
                <strong>Room Type</strong>
                <div class="form_group">
                  {{ reservationVo.room_type }}
                </div>
              </li>
              <li v-if="reservationVo.reservation_service === 'room'">
                <strong>Reservation Date</strong>
                <div class="form_group">
                  {{ formatDate(reservationVo.check_in_date) }} ~ {{ formatDate(reservationVo.check_out_date) }}
                </div>
              </li>
              <li v-if="reservationVo.reservation_service === 'room'">
                <strong>Guests</strong>
                <div class="form_group">
                  Adult {{ reservationVo.adults }} / Children {{ reservationVo.children }} / Infants {{ reservationVo.infants }}
                </div>
              </li>
              <li v-if="reservationVo.reservation_service === 'room'">
                <strong>Additional Breakfast</strong>
                <div class="form_group">
                  Adult {{ reservationVo.breakfast_adults }} / Children {{ reservationVo.breakfast_children }}
                </div>
              </li>
              <li v-if="reservationVo.reservation_service === 'room'">
                <strong>Gold Lounge Access</strong>
                <div class="form_group">
                  Adult {{ reservationVo.gold_lounge_adults }} / Children {{ reservationVo.gold_lounge_children }}
                </div>
              </li>
              <li v-if="reservationVo.reservation_service === 'room'">
                <strong>Extra Bed for Stay</strong>
                <div class="form_group">
                  <div v-if="reservationVo.extrabed == '0'">No</div>
                  <div v-else>Yes</div>
                </div>
              </li>
              <li>
                <strong>Restaurant</strong>
                <div class="form_group">
                  <p v-if="reservationVo.s_restaurant">
                    Spectrum Restaurant : <span>Adult {{ reservationVo.s_restaurant_adults }} / Children {{ reservationVo.s_restaurant_children }}</span>
                  </p>
                  <p v-if="reservationVo.m_restaurant">
                    Mariposa Restaurant : <span>Adult {{ reservationVo.m_restaurant_adults }} / Children {{ reservationVo.m_restaurant_children }}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div class="btn_group mt40">
            <a onclick="history.go('-1')" class="btn btn-purple w240">OK</a>
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
import { se } from 'date-fns/locale';
  
  
  export default defineComponent({
    name: 'PageIndex',
    data () {
      return {
        smallSize: false,
        reservationVo: {
          seq: 0,
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
          m_restaurant_children: ''
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
    },
    created: function () {
      // 화면 리사이즈 이벤트 핸들러
      window.addEventListener("resize", this.resizeEventHandler)
      if (document.body.offsetWidth < 1024) {
        this.smallSize = true
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
      selectReservation() {
        this.$axios.get('/api/reservation/selectReservation', {
          params: { seq: this.reservationVo.seq },
        })
        .then((result) => {
          this.reservationVo = result.data
          console.log(this.reservationVo)
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
        const d = new Date(date)
        return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d
          .getDate()
          .toString()
          .padStart(2, '0')}`
      },
      getReservationService() {
        const services = []
        if (this.reservationVo.reservation_service === 'room') {
          services.push('Room')
        }
        if (this.reservationVo.s_restaurant || this.reservationVo.m_restaurant) {
          services.push('Restaurant')
        }
        return services.join('/')
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
  