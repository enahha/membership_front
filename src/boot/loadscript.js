import { boot } from 'quasar/wrappers'
// import { Cookies } from 'quasar'
// import axios from 'axios'
import { loadScript } from 'vue-plugin-load-script'

export default boot(async ({ app }) => {
  ///////////////////////////////////////////////////////////
  // loadscript
  ///////////////////////////////////////////////////////////
  app.config.globalProperties.$loadscript = loadScript
  // console.log(loadScript)
  app.config.globalProperties.$loadStyle = loadStyle


  loadScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js')
  .then(() => {
    console.log('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js loaded.')
  })

  loadScript('https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.11/clipboard.min.js')
  .then(() => {
    console.log('https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.11/clipboard.min.js loaded.')
  })
  loadScript('https://code.jquery.com/jquery-3.6.0.min.js')
  .then(() => {
    console.log('https://code.jquery.com/jquery-3.6.0.min.js loaded.')
  })
  // loadScript 함수 호출
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js')
    .then(() => {
      console.log('GSAP loaded.');
      return loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js');
    })
    .then(() => {
      console.log('ScrollTrigger loaded.');

      // GSAP 플러그인 등록
      gsap.registerPlugin(ScrollTrigger);

      // ScrollTrigger를 사용하는 코드 추가
      console.log('ScrollTrigger registered and ready to use.');
    })
    .catch((error) => {
      console.error('Error loading scripts:', error);
    });

  try {
    // Load jQuery first
    await loadScript('/_js/jquery.min.js');
    console.log('jQuery loaded.');

    // Moment.js와 로케일 파일 로드
    await loadScript('/_js/moment.min.js');
    moment.locale('ko'); // 로케일 설정
    console.log('Moment.js loaded and locale set.');

    // Load datetimepicker script after moment
    await loadScript('/_js/plugins/bootstrap-datetimepicker.min4.js');
    console.log('Datetimepicker locale loaded.');

    // Load datetimepicker script after moment
    await loadScript('/_js/plugins/bootstrap-datetimepicker.ko.js');
    console.log('Datetimepicker locale loaded.');
    
    // Load CSS files
    await Promise.all([
      loadStyle('/_css/icon/xeicon.min.css'),
      loadStyle('/_css/basic.css'),
      loadStyle('/_css/bootstrap.min.css'),
      loadStyle('/_css/comm.css'),
      // loadStyle('/_css/default.css'),
      loadStyle('/_css/layout.css'),

      // 언어별 분기가 필요한 css는 해당 언어별 index 파일에서 처리
      // loadStyle('/_css/main.css'),
      // loadStyle('/_css/membership.css'),
      // loadStyle('/_css/main_eng.css'),
      // loadStyle('/_css/membership_eng.css'),
    ]);

    // Load plugins files
    await Promise.all([
      loadStyle('/_js/plugins/aos.css'),
      loadStyle('/_js/plugins/bootstrap-datetimepicker4.css'),
      loadStyle('/_js/plugins/sweetalert2.min.css'),
      loadStyle('/_js/plugins/swiper.min.css'),
      loadScript('/_js/plugins/aos.js'),
      // loadScript('/_js/plugins/bootstrap-datetimepicker.ko.js'),
      loadScript('/_js/plugins/gsap.min.js'),
      loadScript('/_js/plugins/jquery.cookie.min.js'),
      loadScript('/_js/plugins/scrollspy.js'),
      loadScript('/_js/plugins/ScrollTrigger.min.js'),
      loadScript('/_js/plugins/sweetalert2.min.js'),
      loadScript('/_js/plugins/swiper.min.js'),
    ]);

    // Load other JS files that depend on jQuery
    await Promise.all([
      loadScript('/_js/bootstrap.min.js'),
      loadScript('/_js/bootstrap.modal.remote.js'),
      // loadScript('/js/jquery.min.js'),
      loadScript('/_js/main.js'),
      // loadScript('/js/moment.min.js'),
      loadScript('/_js/ui.js'),
    ]);


    AOS.init()
  } catch (error) {
    console.error('Failed to load external resources:', error)
  }
})

  // // 하기 카카오 https://developers.kakao.com/sdk/js/kakao.js 서 버 다 운 된 적 있 음 극 혐 ㅋ (2022년 02월 03일 오전 10시부터 ㅋ)
  // // loadScript('js/kakao.min.js')
  // loadScript('https://developers.kakao.com/sdk/js/kakao.min.js')
  // .then(() => {
  //   // Script is loaded, do something
  //   // 사용할 앱의 JavaScript 키를 설정해 주세요.
  //   // window.Kakao.init(this.$store.state.KAKAO_API_JS_KEY)
  //   window.Kakao.init('e2cfe79d03ff50ee2105682a22d3d17f')
  //   // console.log(Kakao.isInitialized())
  //   app.config.globalProperties.$Kakao = window.Kakao
  // })
  // .catch(() => {
  //   // Failed to fetch script
  //   console.log('kakao loadScript failed.')
  // })

  //loadScript('https://stdpay.inicis.com/stdjs/INIStdPay_popup.js')
  // loadScript('https://stdpay.inicis.com/stdjs/INIStdPay.js')
  // .then(() => {
  //   // Script is loaded, do something
  //   app.config.globalProperties.$INIStdPay = window.INIStdPay
  //   app.config.globalProperties.$paymentMid = 'oneoninc01'
  //   app.config.globalProperties.$paymentSignKey = 'OUp6VkxCTnU5K2xHRkpCYmFZWE5LUT09'
  //   // console.log(app.config.globalProperties.$INIStdPay)
  // })
  // .catch(() => {
  //   // Failed to fetch script
  //   console.log('kakao loadScript failed.')
  // })


  // // 카카오 API 스트립트 로드
  // loadScript('https://developers.kakao.com/sdk/js/kakao.js')
  // .then(() => {
  //   // Script is loaded, do something
  //   // 사용할 앱의 JavaScript 키를 설정해 주세요.
  //   // window.Kakao.init(this.$store.state.KAKAO_API_JS_KEY)
  //   window.Kakao.init('e2cfe79d03ff50ee2105682a22d3d17f')
  //   // console.log(Kakao.isInitialized())
  //   // window.Kakao.init('8204f132470b51916767cceb57475198') // REST_API key
    
  //   // window.Kakao.Auth.authorize({
  //   //   redirectUri: 'http://localhost:8888/api/login/loginKakaoRedirect'
  //   // })
  //   app.config.globalProperties.$Kakao = window.Kakao
  // })
  // .catch(() => {
  //   // Failed to fetch script
  //   console.log('kakao loadScript failed.')
  // })


  // axios.get(
  //   'https://developers.kakao.com/sdk/js/kakao.js',
  //   { 
  //     headers: { 
  //       // 'AuthenticationToken': 'e2cfe79d03ff50ee2105682a22d3d17f',
  //       // 'Authorization' : 'e2cfe79d03ff50ee2105682a22d3d17f',
  //       // 'authority': 'developers.kakao.com',
  //       // 'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
  //       'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
  //     } 
  //   }
  // )
  // .then((result) => {
  //   console.log(JSON.stringify(result.data))
  //   app.config.globalProperties.Kakao = result.data
  // })

function loadStyle(href) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.href = href;
    link.rel = 'stylesheet';
    link.onload = resolve;
    link.onerror = reject;
    document.head.appendChild(link);
  });
}