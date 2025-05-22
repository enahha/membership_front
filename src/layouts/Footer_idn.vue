<template>

  <div class="page_main">
    <div id="Wrap">

      <!-- 푸터 시작 -->
      <footer id="footer">
        <p class="logo"><img src="_img/comm/f_logo.png" alt=""></p>
        <div class="sns">
          <a href="https://discord.gg/punkvism" target="_blank"><img src="_img/comm/icon_discord.png" alt="Discord go"></a>
          <a href="https://twitter.com/punkvism" target="_blank"><img src="_img/comm/icon_x.png" alt="Twitter go"></a>
          <a href="https://www.youtube.com/@PUNKVISM" target="_blank"><img src="_img/comm/icon_youtube.png" alt="Youtube go"></a>
          <a href="https://open.kakao.com/o/g7x681Sg" target="_blank" class="membership"><img src="_img/comm/icon_kakaotalk.png" alt="Kakao go"></a>
          <a href="https://punkvism.medium.com/" target="_blank"><img src="_img/comm/icon_medium.png" alt="Mideum go"></a>
          <a href="https://blog.naver.com/punkvism" target="_blank"><img src="_img/comm/icon_blog.png" alt="blog go"></a>
          <a href="https://www.instagram.com/punkvism_official/" target="_blank"><img src="_img/comm/icon_instargram.png" alt="Instagram go"></a>
          <a href="http://snowseed.io/" target="_blank"><img src="_img/comm/icon_snowseed.png" alt="SnowSeed go"></a>
		  <a href="https://t.me/Punkvism" target="_blank" class="membership"><img src="_img/comm/icon_telegram.png" alt="Telegram go"></a>
        </div>
        <p class="copy">© 2024 Punkvism.  all rights reserved.</p>
      </footer>
      <!-- //푸터 끝 -->
      

      <aside id="quick_menu">
        <div class="benefit">
          <a :href="benefitPath">
            <div>
              <p>
                <img src="_img/comm/icon_kongz.png" alt="" />
                <span>Punkvism NFT</span>
              </p>
            </div>
            <p>Benefit</p>
          </a>
        </div>
        <ul class="list-unstyled">
          <li>
            <a id="gotop"><img src="_img/comm/gotop.png" alt=""></a>
          </li>
        </ul>
      </aside>
    </div>
</div>
  
</template>
  
<script>
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
// import { useStore } from 'vuex'

export default defineComponent({
name: 'Footer',

components: {
    // EssentialLink,
    // LoginModal,
},
data () {
    return {
    // loginModal: false,
    }
},
created: function() {
    // 국가 페이지로 이동 - 최초 접속시 1회만 동작함
    // this.goCountryPage()
},
mounted: function() {
    // this.$refs.refWalletModal.show()

    // /_js/ui.js 의 alert() 가 화면 렌더링 전에 실행되어 이벤트가 동작하지 않아서 임의로 설정
    this.setAlertEventHandler()
},

setup () {
    return {
        showSnsLinks: false,
        showGlobal: false,
    }
},
computed: {
  // 다국어용 path
  mainPath() {
    return this.localizedPath()
  },
  membershipPath() {
    return this.localizedPath('/membership')
  },
  benefitPath() {
    return this.localizedPath('/membership/benefit')
  },
  currentPathWithoutLang() {
    // 현재 경로에서 언어 코드 (eng, idn) 제거
    const path = this.$route.path
    if (path.startsWith('/eng/')) {
      return path.replace('/eng', '')
    } else if (path.startsWith('/idn/')) {
      return path.replace('/idn', '')
    }
    return path // 기본 경로 그대로 반환
  },
},

// created: function() {
//   locale = 'ko-KR'
// },

methods: {
  setAlertEventHandler() {
    $(".alert-view").on('click',function (e) {
      const icon = $(this).data('icon') || 'warning'; 
      const title = $(this).data('title');
      const text = $(this).data('text');
    
      // title이나 text 둘 중 하나라도 있을 때만 호출
      if (title || text) {
        Swal.fire({
          icon: icon,
          title: title || undefined,
          text: text || undefined,
        });
      }
    });
  },
  // 언어(kor, eng, idn)에 따라 경로를 생성
  localizedPath(basePath = '') {
    if (this.$route.path.includes('/eng')) {
      return `/#/eng${basePath}`
    } else if (this.$route.path.includes('/idn')) {
      return `/#/idn${basePath}`
    } else {
      return `/#/kor${basePath}`
    }
  },
  scrollToSection(id) {
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
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

},
})
</script>

<style lang="sass">
</style>