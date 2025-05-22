<template>
  <div class="page_main">
    <div id="Wrap">
  
      <!-- 본문 시작 -->
      <main role="main">
      <!-- main_container -->
      <div id="sub_container" class="membership_wrap membership_reservation">
        <section class="container text-center">
          <h3>ADMIN</h3>
          <div class="tabs1 full_bg">
            <ul>
              <li><a href="#." class="is-active">LOGIN</a></li>
            </ul>
          </div>

          <div class="form_box" style="height: 500px; padding-top: 50px;">
					<ul>
						<li>
							<strong class="f">ID</strong>
							<div class="form_group">
								<input type="text" class="form-control" v-model="id" name="" placeholder=""/>
							</div>
						</li>
						<li>
							<strong class="f">PASSWORD</strong>
							<div class="form_group">
								<input type="password" class="form-control" v-model="pwd" name="" placeholder=""  @keyup.enter="doLoginAdmin"/>
							</div>
						</li>
					</ul>

          <div class="btn_group mt40">
            <button class="btn btn-purple w240" @click.prevent="doLoginAdmin">{{ $t('login') }}</button>
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
import { defineComponent } from 'vue';
// import { required, requiredNumber, minLength, maxLength, minValue, maxValue} from 'src/validation.js';
// import { shake128 as SHA3 } from 'js-sha3'

export default defineComponent({
  name: 'AdminHome',
  data () {
    return {
      id: 'test',
      pwd: 'test', // admin7777
    }
  },
  components: {
  },
  computed: {
    isAdmin () {
      // console.log(this.$store.getters.getAdcd)
      // console.log(this.$adminCode)
      // console.log(this.$store.getters.getAdcd ===this.$adminCode)
      return this.$store.getters.getAdcd === this.$adminCode
    },
  },
  created: function () {
    // 자동로그인 이슈로 쿠키를 세션으로 변경
    const adcd = sessionStorage.getItem('ADCD')
    if (adcd) {
      this.$store.dispatch('setAdcd', adcd)
    }

    // Admin 여부 체크
    if (!this.isAdmin) {
      this.$router.push('/admin')
    }
  },
  mounted: function () {},
  methods: {

    doLoginAdmin() {

      if (!this.id || !this.pwd) {
        this.$noti(this.$q, 'Enter uid and pwd.')
        return
      }

      const vo = {
        uid: this.id,
        pwd: this.pwd,
      }
      this.$q.loading.show() // 로딩 표시
      this.$axios.post('/api/admin/doLoginAdmin', vo)
        .then((result) => {
          // console.log(JSON.stringify(result.data))
          this.$q.loading.hide() // 로딩 표시 종료
          if (result.data && result.data.resultCd === 'SUCCESS') {
            console.log(result.data)
            // this.$noti(this.$q, this.$t('test_success'))

            // 로그인 정보 쿠키에 저장
            this.$store.dispatch('setUid', result.data.returnValue.sid)
            this.$store.dispatch('setAdcd', result.data.returnValue.adcd)
            // this.$cookie.set('UID', result.data.returnValue.sid, 365)
            // this.$cookie.set('AUTH_KEY', result.data.returnValue.auth_key, 365)
            // this.$cookie.set('ADCD', result.data.returnValue.adcd, 365)
            sessionStorage.setItem('UID', result.data.returnValue.sid)
            sessionStorage.setItem('ADCD', result.data.returnValue.adcd)
            // localStorage.setItem('UID', result.data.returnValue.sid, 365)
            // localStorage.setItem('AUTH_KEY', result.data.returnValue.auth_key, 365)
            // localStorage.setItem('ADCD', result.data.returnValue.adcd, 365)

            // 관리자 메뉴로 이동
            this.$router.push('/admin/reservationList')

          } else {
            // this.$noti(this.$q, this.$t('test_failed'))
            this.$noti(this.$q, result.data.resultMsg)
          }
        })
        .catch((err) => {
          this.$q.loading.hide() // 로딩 표시 종료
          console.log(err)
          this.$noti(this.$q, err)
        })
    },

  }
})
</script>

<style scoped>
</style>
