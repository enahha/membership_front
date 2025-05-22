<template>
<div class="page_main">
  <div id="Wrap">

    <!-- 본문 시작 -->
    <main role="main">
    <!-- main_container -->
    <div id="sub_container" class="membership_wrap membership_reservation">
      
      <section class="container container-lg text-center">
        <h3>예약 접수 완료</h3>
        <p><img src="_img/membership/membership_complete.png" class="wp80" style="max-width:43.4rem" alt="" /></p>
        <div class="fsr2 mt40 fw300">
          감사합니다.
          <br />
          <br />신청하신 멤버십 예약 서비스가 접수되었습니다.
          <br /><strong class="dp-block text_underline fw500">펑크비즘 CS팀에서 <span class="fc_green text_underline">최종 예약 확정</span>을 위하여 <span class="fc_green text_underline">이메일 및 개별적으로 연락</span>드릴예정입니다.</strong>
          <br />
          <br />언제나 비범함에 도전하는 PUNKVISM이 되겠습니다.
        </div>

        <div class="btn_group mt40">
          <a href="/#/kor" class="btn btn-purple-o w240">멤버십 메인</a>
          <a href="/#/kor/mypage" class="btn btn-purple w240">예약확인</a>
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

    //////////////////////////////////////////////////////////////////////////////////
    //                                script code                                   //
    //////////////////////////////////////////////////////////////////////////////////
    

  },
})
</script>
