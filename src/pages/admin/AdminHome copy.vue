<template>
  <q-page class="page-default q-pa-md page-1200" style="align-content: center;">
    <!-- <div class="row justify-center page-tit">
      <div class="col-12 doc-heading doc-h2">
        {{ $t('menu_admin_home') }}
      </div>
    </div> -->
    <div class="row justify-center q-pa-md">
      <div class="doc-h2">
        {{ $t('menu_admin_home') }}
      </div>
    </div>
    <!--
    <div class="row justify-center page-sub-tit">
      <div class="col-12">
        {{ $t('menu_admin_maintenance_description') }}
      </div>
    </div>
    -->
    <div class="row justify-center q-pb-md">
    </div>
    
    <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- 로그인 화면 -->
    <!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    <div class="row justify-center q-pa-md">
      <table border="0" width="100%" align="center">
        <tr>
          <td colspan="3">
            <div class="col-12">
              <q-input v-model="id" hide-bottom-space standout :placeholder="$t('id')" style="height: 56px;" />
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <div class="col-12">
              <q-input v-model="pwd" hide-bottom-space standout type="password" :placeholder="$t('pwd_upper')" style="height: 56px;" @keyup="keyup" />
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="3" class="text-center">
            <q-btn color="primary" text-color="black" style="width: 100%; height: 26px; min-width: 26px;" @click="doLoginAdmin">
              <table border="0" width="100%" align="center">
                <tr>
                  <td>
                    <b>{{ $t('login') }}</b>
                  </td>
                </tr>
              </table>
            </q-btn>
          </td>
        </tr>
      </table>
    </div>

    <!-- 하단 공간 확보 -->
    <div class="row justify-center q-pa-xl">
    </div>

  </q-page>

</template>

<script>
import { defineComponent } from 'vue';
// import { required, requiredNumber, minLength, maxLength, minValue, maxValue} from 'src/validation.js';
// import { shake128 as SHA3 } from 'js-sha3'

export default defineComponent({
  name: 'AdminHome',
  data () {
    return {
      id: 'bumi',
      pwd: 'bumi0707',
    }
  },
  components: {
  },
  computed: {
  },
  created: function () {},
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
            this.$cookie.set('UID', result.data.returnValue.sid, 365)
            this.$cookie.set('AUTH_KEY', result.data.returnValue.auth_key, 365)
            this.$cookie.set('ADCD', result.data.returnValue.adcd, 365)
            localStorage.setItem('UID', result.data.returnValue.sid, 365)
            localStorage.setItem('AUTH_KEY', result.data.returnValue.auth_key, 365)
            localStorage.setItem('ADCD', result.data.returnValue.adcd, 365)

            // 관리자 메뉴로 이동
            this.$router.push('/admin/adminMenu')

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
