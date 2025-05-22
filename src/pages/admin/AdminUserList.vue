<template>
  <q-page class="q-pa-md page-default" style="color: white">
    <div class="row justify-center page-tit">
      <div class="col-12 doc-heading doc-h2">
        {{ $t('admin_user_list') }}
      </div>
    </div>

    <q-btn class="q-ml-lg" @click="goBack" label="Go Back" color="grey" no-caps />

    <!-- <div class="q-pt-sm q-pb-md q-pl-md row float-right">
      <q-input v-model="keyword" @keyup="onKeyup" type="search" color="primary" clearable outlined />
      &nbsp;&nbsp;
      <q-btn @click="search" icon="search" class="btn-srch" />
    </div> -->

    <div class="row srch-wrap">
      <q-input v-model="keyword" @keyup="onKeyup" type="search" color="primary" style="width: 190px;" clearable outlined />
      <!-- &nbsp;&nbsp;
      <q-btn @click="goRegister" icon="add" color="primary" size="lg" style="width: 80px;" /> -->
      &nbsp;&nbsp;
      <q-btn @click="search" icon="search" color="primary" size="lg" style="width: 80px;" outline />
    </div>

    <!-- <q-page-scroller position="top" :scroll-offset="150" :offset="[0, 10]">
      <q-btn fab icon="keyboard_arrow_up" color="primary" style="z-index: 9;" class="z-top" />
    </q-page-scroller> -->

    <!-- 사용자 리스트 -->
    <q-pull-to-refresh @refresh="refresher">
      <q-infinite-scroll @load="loadMore" :offset="500" ref="infiniteScroll">

        <q-item>
          <q-item-section>
            <div class="row">
              <q-item-label class="col-4 text-weight-bold">Metamask Wallet Address</q-item-label>
              <q-item-label class="col-4 text-weight-bold">Solana Wallet Address</q-item-label>
              <q-item-label class="col-2 text-weight-bold">MEMETOON ID</q-item-label>
              <q-item-label class="col-2 text-weight-bold">MEMETOON PWD</q-item-label>
            </div>
          </q-item-section>
        </q-item>

        <div v-for="item in userList" :key="item.seq" style="cursor: pointer;z-index: 1;">
          <q-separator />
          <!-- <q-item clickable @click="showDetail(item.uid)"> -->
          <q-item>
            <q-item-section>
              <div class="row">
                <q-item-label class="col-4">{{ item.uid }}</q-item-label>
                <q-item-label class="col-4">{{ item.solana_wallet_address }}</q-item-label>
                <q-item-label class="col-2">{{ item.memetoon_id }}</q-item-label>
                <q-item-label class="col-2">{{ item.memetoon_pwd }}</q-item-label>
              </div>
            </q-item-section>
          </q-item>

          <!-- 관리자 수정용 -->
          <!-- <div v-if="isAdmin" class="text-right">
            <q-btn @click="goSetDescription(item.seq)" size="sm" label="Modify" />
          </div> -->

        </div>
        <q-separator />

        <br>
        <br>
        <template v-slot:loading>
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>
    </q-pull-to-refresh>

    <div v-if="noDataFlag" class="row justify-center">
      <img src="images/sorry-no-data.png" style="width: 50%; max-width: 400px;" />
    </div>

    <!-- 하단 공간 확보 -->
    <div class="row justify-center q-pa-xl">
    </div>

  </q-page>
  <UserDetailModal ref="refUserDetailModal"/>
</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'NewList',
  setup () {
    const { locale } = useI18n({ useScope: 'global' })
    return {
      locale,
    }
  },
  data () {
    return {
      refresherDone: '',
      pageSize: 100,
      lastPageNum: 1, // 마지막 페이지
      userList: [],
      noDataFlag: false,
      keyword: '', // 검색키워드
    }
  },
  components: {
  },
  watch: {
    getUid (newValue) {
      // console.log('newValue: : ' + newValue)
      // this.loadMore(1, null)
      this.refresher(null)
      // if (!newValue) {
      //   this.$router.push('/')
      // } else {
      //   this.loadMore(1, null)
      // }
    },
  },
  computed: {
    getUid () {
      return this.$store.getters.getUid
    },
    getWalletAddress () {
      return this.$store.getters.getWalletAddress
    },
    isAdmin () {
      return this.$store.getters.getAdcd === this.$adminCode
    },
    getKeyword () {
      return this.$store.getters.getKeyword
    },
  },
  created: function () {
    // 검색 키워드 설정
    this.keyword = this.getKeyword

    this.selectListMax()
  },
  mounted: function () {
  },
  methods: {
    // 검색
    async search() {
      await this.selectListMax()
      await this.refresher(null)
    },
    // 검색어 입력창 키업 이벤트
    onKeyup (event) {
      // 키워드 설정
      this.$store.dispatch('setKeyword', this.keyword)

      if (event.key === 'Enter') { // 엔터일 경우 검색
        this.search()
      }
    },
    // showDetail(seq) {
    //   // 상세 화면으로 이동
    //   // this.$router.push({ path: '/token/detail', query: { seq: seq }})
    //   this.$refs.refUserDetailModal.seq = seq
    //   this.$refs.refUserDetailModal.show()
    // },
    refresher (done) {
      // done - Function to call when you made all necessary updates.
      //        DO NOT forget to call it otherwise the refresh message
      //        will continue to be displayed
      // make some Ajax call then call done()
      this.userList = []
      this.refresherDone = done // load가 끝나면 로딩메세지 종료
      this.$refs.infiniteScroll.reset() // index 초기화
      this.$refs.infiniteScroll.resume() // stop에서 다시 재생
      // this.$refs.infiniteScroll.load() // loadMore로 검색
      this.loadMore(1, done)
    },
    loadMore(index, done) {
      // index - called for nth time
      // done - Function to call when you made all necessary updates.
      //        DO NOT forget to call it otherwise your loading message
      //        will continue to be displayed. Has optional boolean
      //        parameter that invokes stop() when true
      // console.log('index: ' + index)
      // make some Ajax call then call done()
      // this.pageNum = index
      setTimeout(() => {
        // alert(index)
        // console.log('loadMore called index: ' + index)
        if (index <= this.lastPageNum) {
          this.selectList(index, done)
          if (index === this.lastPageNum) {
            this.$refs.infiniteScroll.stop()
          }

          // refresher 로딩메세지 처리
          if (this.refresherDone != null && this.refresherDone !== '') {
            this.refresherDone() // 로딩메세지 종료
            this.refresherDone = '' // 로딩메세지 초기화
          }
        }
      }, 500)
    },
    // 사용자 리스트 마지막 페이지 조회
    selectListMax() {
      // 검색어 입력창 x버튼 클릭시 this.keyword가 null이 됨.
      if (!this.keyword) {
        this.keyword = ''
      }
      this.$axios.get('/api/admin/selectAdminUserListLastPageNum',
        {params: {uid: this.getWalletAddress, pageSize: this.pageSize, keyword: this.keyword}})
        .then((result) => {
          // console.log(JSON.stringify(result.data))
          this.lastPageNum = result.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 사용자 리스트 조회
    selectList(idx, done) {
      if (!this.keyword) {
        this.keyword = ''
        // 키워드 설정
        this.$store.dispatch('setKeyword', this.keyword)
      }
      this.$axios.get('/api/admin/selectAdminUserList',
        {params: {uid: this.getWalletAddress, pageNum: idx, pageSize: this.pageSize, keyword: this.keyword}})
        .then((result) => {
          // console.log(JSON.stringify(result.data))
          // console.log(result.data)
          if (idx === 1) { // 첫번째 load인 경우
            this.userList = [] // 리스트 초기화
          }
          this.userList = this.userList.concat(result.data)

          // 데이터 없음 표시 설정
          if (!this.userList || this.userList.length < 1) {
            this.noDataFlag = true
          } else {
            this.noDataFlag = false
          }
          if (done) {
            done()
          }
        })
        .catch((err) => {
          console.log(err)
          if (done) {
            done()
          }
        })
    },
    // // 상세 설정으로 이동
    // goSetDescription(seq) {
    //   this.$router.push({ path: '/token/description', query: { seq: seq }})
    // },
    goBack() {
      // 페이지 이동
      this.$router.go(-1)
      // this.$router.push('/admin/adminMenu')
    },

  },
})
</script>

<style scoped>
</style>
