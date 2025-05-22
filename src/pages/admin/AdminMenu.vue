<template>
  <q-page class="q-pa-md page-1200">
    <div class="row justify-center page-tit">
      <div class="col-12 doc-heading doc-h2">
        {{ $t('menu_admin_menu') }}
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

    <!-- <div class="row justify-center">
      <div class="col-12">
        <span class="text-weight-bold text-subtitle1">{{ $t('create_sitemap_xml') }}</span>
      </div>
    </div> -->
    <div class="row justify-center q-pb-sm">
      <div class="col-12">
        <!-- <q-input v-model="walletAddress" ref="walletAddress" :rules="[required]" clearable standout tabindex="5" /> -->
      </div>
    </div>

    <div class="row justify-center q-pt-lg">
      <div class="col-12 text-center">
        <q-btn class="btn" color="grey-1" text-color="black" size="lg" @click="goMintPlanList" style="width: 100%;" no-caps tabindex="1">
          <b>{{ $t('admin_mint_plan_list') }}</b>
        </q-btn>
      </div>
    </div>

    <div class="row justify-center q-pt-lg">
      <div class="col-12 text-center">
        <q-btn class="btn" color="grey-1" text-color="black" size="lg" @click="goAirdrop" style="width: 100%;" no-caps tabindex="2">
          <b>{{ $t('admin_airdrop') }}</b>
        </q-btn>
      </div>
    </div>

    <div class="row justify-center q-pt-lg">
      <div class="col-12 text-center">
        <q-btn class="btn" color="grey-1" text-color="black" size="lg" @click="goAdminUserList" style="width: 100%;" no-caps tabindex="3">
          <b>{{ $t('admin_user_list') }}</b>
        </q-btn>
      </div>
    </div>

    <div class="row justify-center q-pt-lg">
      <div class="col-12 text-center">
        <q-btn class="btn" color="grey-1" text-color="black" size="lg" @click="goProjectList" style="width: 100%;" no-caps tabindex="4">
          <b>{{ $t('admin_project_list') }}</b>
        </q-btn>
      </div>
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
  name: 'AdminMenu',
  data () {
    return {
      // tokenName: 'Klaystar',
      // addTokenSeq: '', // 추가발행할 토큰 SEQ
      // confirmAdd: false, // 추가 확인창
    }
  },
  components: {
  },
  computed: {
  },
  created: function () {},
  mounted: function () {},
  methods: {

    goMintPlanList() {
      // batchMinting 으로 이동
      this.$router.push('/batchMinting')
    },
    goAirdrop() {
      // airdrop 으로 이동
      this.$router.push('/airdrop')
    },
    goAdminUserList() {
      // adminUserList 로 이동
      this.$router.push('/admin/adminUserList')
    },
    goProjectList() {
      // projectList 로 이동
      this.$router.push('/project/projectList')
    },

  }
})
</script>

<style scoped>
</style>
