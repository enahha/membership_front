<template>
  <div class="page_main">
    <div id="Wrap">
  
      <!-- 본문 시작 -->
      <main role="main">
      <!-- main_container -->
      <div id="sub_container" class="membership_main">

      <section class="mem_sec02 container full_bg">
          <h3>Membership Service Offerings</h3>
          <div class="item_list">
            <div class="item">
              <div class="thumb">
                <img src="_img/membership/membership_list1.jpg" alt="">
              </div>
              <p class="title">Fairmont Ambassador Seoul</p>
              <p class="desc">The first Fairmont hotel in Korea with a stunning view of the Han River!</p>
              <p class="go">
                <a href="/#/eng/membership/enter">Reservation</a>
                
                <!-- <a href="#." @click="showAlert($event)" data-title="Comming Soon" data-text="It will be in service soon.">View Details</a> -->
              </p>
            </div>
          </div>
        </section>
        
        <section class="mem_sec01 container full_bg">
          <h3><small>RWA NFT Project</small><strong>Punky Kongz<br /> Premium Membership</strong></h3>
          <p class="desc">
            "We can't promise that life will be easy,<br /> but we can certainly tell you that life is worth living."
          </p>
          <hr>
          <div class="row info">
            <div class="col-lg-6">
              The premium membership of the Punky Kongz RWA NFT project goes beyond just a service; it is a journey to realize the value of life and explore new possibilities. Carrying forward the vision of Satoshi Nakamoto, we create experiences that can give true meaning to each individual’s life at the intersection of technology and the human spirit. Our membership embodies the shared values of Web 3.0, helping you dedicate time to meaningful pursuits while elevating social interactions to a new dimension.
            </div>
            <div class="col-lg-6 mt30-md">
                From general holders to VIP members, Punky kongz membership offers unique and personalized benefits that enhance and elevate the lives of its members. These perks range from luxurious hotel stays to exclusive events, networking opportunities, and in-depth educational sessions. With Punky kongz, your world expands, your connections deepen, and your life becomes richer. All of this is possible with just one membership. Start shaping a new future with Punky kongz today!
            </div>
          </div>
          <h4>Punky Kongz Membership Service</h4>
          <div class="row service">
            <div class="col-xl-4 col-lg-6 col-12">
              <div class="box">
                <p class="num">Service 1</p>
                <p class="icon"><img src="_img/membership/membership_service_icon1.png" alt=""></p>
                <p class="title"><strong>Innovative Spirit</strong></p>
                <p class="desc">Inheriting the 'cypherpunk' spirit of Satoshi Nakamoto, we realize the shared values of Web3.</p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-12">
              <div class="box">
                <p class="num">Service 2</p>
                <p class="icon"><img src="_img/membership/membership_service_icon2.png" alt=""></p>
                <p class="title"><strong>Membership Benefits</strong></p>
                <p class="desc">Customized benefits and premium experiences offered from regular holders to VIP holders.</p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-12">
              <div class="box">
                <p class="num">Service 3</p>
                <p class="icon"><img src="_img/membership/membership_service_icon3.png" alt=""></p>
                <p class="title"><strong>Improving Quality of Life</strong></p>
                <p class="desc">Enhancing the value of life and helping ensure time is spent on meaningful pursuits.
                  </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-12">
              <div class="box">
                <p class="num">Service 4</p>
                <p class="icon"><img src="_img/membership/membership_service_icon4.png" alt=""></p>
                <p class="title"><strong>Unique Experiences</strong></p>
                <p class="desc">Offering a variety of experiences, including luxury hotel stays, exclusive events, networking opportunities, and educational sessions.</p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-12">
              <div class="box">
                <p class="num">Service 5</p>
                <p class="icon"><img src="_img/membership/membership_service_icon5.png" alt=""></p>
                <p class="title"><strong>Inclusive Community</strong></p>
                <p class="desc">Supporting the enhancement of interactions between users and the formation of meaningful relationships.</p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-12">
              <div class="box">
                <p class="num">Service 6</p>
                <p class="icon"><img src="_img/membership/membership_service_icon6.png" alt=""></p>
                <p class="title"><strong>Forward-Thinking Approach</strong></p>
                <p class="desc">Exploring new possibilities through the fusion of technology and the human spirit.</p>
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
    },
    destroy: function () {
      window.removeEventListener("resize", this.resizeEventHandler)
    },
    mounted: function () {
      // 개별 페이지에 맞는 css 로드
      this.$loadStyle('/_css/membership_eng.css')

      // "Go to Top" 버튼 클릭 시 페이지 상단으로 이동
      document.querySelector('#gotop').addEventListener('click', (event) => {
          event.preventDefault(); // 기본 동작(페이지 이동) 방지
          window.scrollTo({ top: 0, behavior: 'smooth' }); // 부드럽게 스크롤
      });
  
      this.$nextTick(() => {
      });
    },
    setup () {
      const { locale } = useI18n({ useScope: 'global' })
  
      return {
        locale,
      }
    },
    methods: {
      showAlert(event) {
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

      //////////////////////////////////////////////////////////////////////////////////
      //                                script code                                   //
      //////////////////////////////////////////////////////////////////////////////////
      
  
    },
  })
  </script>
  