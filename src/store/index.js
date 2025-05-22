import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      // common
    },
    state: {
      rightDrawerOpen: false,
      loginModal: false,
      uid: '',
      uuid: '',
      adcd: '', // 권한코드
      name: '',
      nickname: '',
      profileImage: '',
      walletType: '',
      walletAddress: '',
      solanaWalletType: '',
      solanaWalletAddress: '',
      mobileNo: '',
      paymentGoodName: '', // 결제 상품명
      paymentPayCode: '', // 결제 코드 - CREATE_NEWKEN, ...
      paymentCustomData: '', // 결제 - 상점 데이터
      keyword: '', // 검색 키워드

      alya: false,
      fitri: false,
      punkykongz: false,
      genesis: false,


      ////////////////////////////////////////////////////////////////////////////////
      // oldWalletAddress: '',
      // oldWalletType: '',
      // oldNftContract: '',
      oldNftId: '',
      oldWalletAddress: '',
      oldNftImage: '',
      oldNftName: '',
      oldContractAddress: '',

      oldProjectId: '',
      oldProjectName: '',
      oldContractAddress: '',
      oldMainnetAddress: '',
      newProjectId: '',
      newProjectName: '',
      newContractAddress: '',
      newMainnetAddress: '',
      newWalletAddress: '',
      description: '',
      ////////////////////////////////////////////////////////////////////////////////
      replayMainVideoCount: 0, // 좌상단 로고 클릭시 비디오 재생 위한 변수
      replayRwaPlanVideoCount: 0, // RWA PLAN 메뉴 클릭시 비디오 재생 위한 변수
    },
    getters: {
      getRightDrawerOpen: function (state) {
        return state.rightDrawerOpen
      },
      getUid: function (state) {
        return state.uid
      },
      getUuid: function (state) {
        return state.uuid
      },
      getAdcd: function (state) {
        return state.adcd
      },
      getName: function (state) {
        return state.name
      },
      getNickname: function (state) {
        return state.nickname
      },
      getProfileImage: function (state) {
        return state.profileImage
      },
      getWalletType: function (state) {
        return state.walletType
      },
      getWalletAddress: function (state) {
        return state.walletAddress
      },
      getSolanaWalletType: function (state) {
        return state.solanaWalletType
      },
      getSolanaWalletAddress: function (state) {
        return state.solanaWalletAddress
      },
      getMobileNo: function (state) {
        return state.mobileNo
      },
      getPaymentGoodName: function (state) {
        return state.paymentGoodName
      },
      getPaymentPayCode: function (state) {
        return state.paymentPayCode
      },
      getPaymentCustomData: function (state) {
        return state.paymentCustomData
      },
      
      getKeyword: function (state) {
        return state.keyword
      },

      getAlya: function (state) {
        return state.alya
      },
      getFitri: function (state) {
        return state.fitri
      },
      getPunkykongz: function (state) {
        return state.punkykongz
      },
      getGenesis: function (state) {
        return state.genesis
      },

      // getCartCount: function (state) {
      //   return state.cartCount
      // },
      // getAccessNewken: function (state) {
      //   return state.kakaoLoginVO.access_token
      // },
      // getId: function (state) {
      //   return state.kakaoLoginVO.id
      // },
      // getNickname: function (state) {
      //   return state.kakaoLoginVO.nickname
      // },
      // getProfileImage: function (state) {
      //   return state.kakaoLoginVO.profile_image
      // },
      // getThumbnailImage: function (state) {
      //   return state.kakaoLoginVO.thumbnail_image
      // },
      // getEmail: function (state) {
      //   return state.kakaoLoginVO.email
      // }

      ////////////////////////////////////////////////////////////////////////////////
      // getOldWalletAddress: function (state) {
      //   return state.oldWalletAddress
      // },
      // getOldWalletType: function (state) {
      //   return state.oldWalletType
      // },
      // getOldNftContract: function (state) {
      //   return state.oldNftContract
      // },
      getOldNftId: function (state) {
        return state.oldNftId
      },
      getOldWalletAddress: function (state) {
        return state.oldWalletAddress
      },
      getOldProjectId(state) {
        return state.oldProjectId
      },
      getOldProjectName(state) {
        return state.oldProjectName
      },
      getOldContractAddress(state) {
        return state.oldContractAddress
      },
      getOldMainnetAddress(state) {
        return state.oldMainnetAddress
      },
      getNewProjectId(state) {
        return state.newProjectId
      },
      getNewProjectName(state) {
        return state.newProjectName
      },
      getNewContractAddress(state) {
        return state.newContractAddress
      },
      getNewWalletAddress(state) {
        return state.newWalletAddress
      },
      getNewMainnetAddress(state) {
        return state.newMainnetAddress
      },
      getdescription(state) {
        return state.description
      },
      getOldNftImage(state) {
        return state.oldNftImage
      },
      getOldNftName(state) {
        return state.oldNftName
      },
      getOldContractAddress(state) {
        return state.oldContractAddress
      },
      ////////////////////////////////////////////////////////////////////////////////
      getReplayMainVideoCount(state) {
        return state.replayMainVideoCount
      },
      getReplayRwaPlanVideoCount(state) {
        return state.replayRwaPlanVideoCount
      },
    },
    mutations: {
      SET_RIGHT_DRAWER_OPEN (state, rightDrawerOpen) {
        state.rightDrawerOpen = rightDrawerOpen
      },
      SET_UID (state, uid) {
        state.uid = uid
      },
      SET_UUID (state, uuid) {
        state.uuid = uuid
      },
      SET_ADCD (state, adcd) {
        state.adcd = adcd
      },
      SET_NAME (state, name) {
        state.name = name
      },
      SET_NICKNAME (state, nickname) {
        state.nickname = nickname
      },
      SET_PROFILE_IMAGE (state, profileImage) {
        state.profileImage = profileImage
      },
      SET_WALLET_TYPE (state, walletType) {
        state.walletType = walletType
      },
      SET_WALLET_ADDRESS (state, walletAddress) {
        state.walletAddress = walletAddress
      },
      SET_SOLANA_WALLET_TYPE (state, solanaWalletType) {
        state.solanaWalletType = solanaWalletType
      },
      SET_SOLANA_WALLET_ADDRESS (state, solanaWalletAddress) {
        state.solanaWalletAddress = solanaWalletAddress
      },
      SET_MOBILE_NO (state, mobileNo) {
        state.mobileNo = mobileNo
      },
      SET_PAYMENT_GOOD_NAME (state, paymentGoodName) {
        state.paymentGoodName = paymentGoodName
      },
      SET_PAYMENT_PAY_CODE (state, paymentPayCode) {
        state.paymentPayCode = paymentPayCode
      },
      SET_PAYMENT_CUSNEWM_DATA (state, paymentCustomData) {
        state.paymentCustomData = paymentCustomData
      },

      SET_KEYWORD (state, keyword) {
        state.keyword = keyword
      },

      SET_ALYA (state, alya) {
        state.alya = alya
      },
      SET_FITRI (state, fitri) {
        state.fitri = fitri
      },
      SET_PUNKYKONGZ (state, punkykongz) {
        state.punkykongz = punkykongz
      },
      SET_GENESIS (state, genesis) {
        state.genesis = genesis
      },
      
      SET_LOGIN_MODAL_FLAG (state, flag) {
        state.loginModal = flag
      },
      updateDrawerState (state, opened) {
        state.drawerState = opened
      },
      updatePageMeta (state, meta) {
        state.pageMeta = {
          title: '',
          hash: '',
          icon: '',
          iframeTabs: false,
          backRoute: '/main',
          tabs: [],
          ...meta
        }
      },
      setKakaoLoginVO: function (state, payload) {
        state.kakaoLoginVO = payload
        /*
        state.kakaoLoginVO.access_token = payload.access_token
        state.kakaoLoginVO.token_type = payload.token_type
        state.kakaoLoginVO.refresh_token = payload.refresh_token
        state.kakaoLoginVO.expires_in = payload.expires_in
        state.kakaoLoginVO.scope = payload.scope
        state.kakaoLoginVO.refresh_token_expires_in = payload.refresh_token_expires_in
        state.kakaoLoginVO.id = payload.id
        state.kakaoLoginVO.nickname = payload.nickname
        state.kakaoLoginVO.profile_image = payload.profile_image
        state.kakaoLoginVO.thumbnail_image = payload.thumbnail_image
        state.kakaoLoginVO.has_email = payload.has_email
        state.kakaoLoginVO.is_email_valid = payload.is_email_valid
        state.kakaoLoginVO.is_email_verified = payload.is_email_verified
        state.kakaoLoginVO.email = payload.email
        state.kakaoLoginVO.has_age_range = payload.has_age_range
        state.kakaoLoginVO.age_range = payload.age_range
        state.kakaoLoginVO.has_birthday = payload.has_birthday
        state.kakaoLoginVO.birthday = payload.birthday
        state.kakaoLoginVO.has_gender = payload.has_gender
        state.kakaoLoginVO.gender = payload.gender
        */
      },
      ////////////////////////////////////////////////////////////////////////////////
      // SET_OID_WALLET_ADDRESS (state, oldWalletAddress) {
      //   state.oldWalletAddress = oldWalletAddress
      // },
      // SET_OID_WALLET_TYPE (state, oldWalletType) {
      //   state.oldWalletType = oldWalletType
      // },
      // SET_OID_NFT_CONTRACT (state, oldNftContract) {
      //   state.oldNftContract = oldNftContract
      // },
      SET_OLD_NFT_ID (state, oldNftId) {
        state.oldNftId = oldNftId
      },
      SET_OLD_WALLET_ADDRESS (state, oldWalletAddress) {
        state.oldWalletAddress = oldWalletAddress
      },
      SET_OID_PROJECT_ID(state, oldProjectId) {
        state.oldProjectId = oldProjectId
      },
      SET_OID_PROJECT_NAME(state, projectName) {
        state.oldProjectName = projectName
      },
      SET_OID_CONTRACT_ADDRESS(state, contractAddress) {
        state.oldContractAddress = contractAddress
      },
      SET_OID_MAINNET_ADDRESS(state, mainnetAddress) {
        state.oldMainnetAddress = mainnetAddress
      },
      SET_NEW_PROJECT_ID(state, projectId) {
        state.newProjectId = projectId
      },
      SET_NEW_PROJECT_NAME(state, projectName) {
        state.newProjectName = projectName
      },
      SET_NEW_CONTRACT_ADDRESS(state, contractAddress) {
        state.newContractAddress = contractAddress
      },
      SET_NEW_MAINNET_ADDRESS(state, mainnetAddress) {
        state.newMainnetAddress = mainnetAddress
      },
      SET_NEW_WALLET_ADDRESS(state, newWalletAddress) {
        state.newWalletAddress = newWalletAddress
      },
      SET_DESCRIPTION(state, description) {
        state.description = description
      },      
      SET_OLD_NFT_IMAGE(state, oldNftImage) {
        state.oldNftImage = oldNftImage
      },
      SET_OLD_NFT_NAME(state, oldNftName) {
        state.oldNftName = oldNftName
      },
      SET_OLD_CONTRACT_ADDRESS(state, oldContractAddress) {
        state.oldContractAddress = oldContractAddress
      },
      ////////////////////////////////////////////////////////////////////////////////
      SET_REPLAY_MAIN_VIDEO_COUNT(state, replayMainVideoCount) {
        state.replayMainVideoCount = replayMainVideoCount
      },
      SET_REPLAY_RWA_PLAN_VIDEO_COUNT(state, replayRwaPlanVideoCount) {
        state.replayRwaPlanVideoCount = replayRwaPlanVideoCount
      },
    },
    actions: {
      test: function (context, payload) {
        return context.commit('SET_LOGIN_MODAL_FLAG', payload)
      },
      setRightDrawerOpen: function (context, payload) {
        return context.commit('SET_RIGHT_DRAWER_OPEN', payload)
      },
      setUid: function (context, payload) {
        return context.commit('SET_UID', payload)
      },
      setUuid: function (context, payload) {
        return context.commit('SET_UUID', payload)
      },
      setAdcd: function (context, payload) {
        return context.commit('SET_ADCD', payload)
      },
      setName: function (context, payload) {
        return context.commit('SET_NAME', payload)
      },
      setNickname: function (context, payload) {
        return context.commit('SET_NICKNAME', payload)
      },
      setProfileImage: function (context, payload) {
        return context.commit('SET_PROFILE_IMAGE', payload)
      },
      setWalletType: function (context, payload) {
        return context.commit('SET_WALLET_TYPE', payload)
      },
      setWalletAddress: function (context, payload) {
        return context.commit('SET_WALLET_ADDRESS', payload)
      },
      setSolanaWalletType: function (context, payload) {
        return context.commit('SET_SOLANA_WALLET_TYPE', payload)
      },
      setSolanaWalletAddress: function (context, payload) {
        return context.commit('SET_SOLANA_WALLET_ADDRESS', payload)
      },
      setMobileNo: function (context, payload) {
        return context.commit('SET_MOBILE_NO', payload)
      },
      setPaymentGoodsName: function (context, payload) {
        return context.commit('SET_PAYMENT_GOOD_NAME', payload)
      },
      setPaymentPayCode: function (context, payload) {
        return context.commit('SET_PAYMENT_PAY_CODE', payload)
      },
      setPaymentCustomData: function (context, payload) {
        return context.commit('SET_PAYMENT_CUSTOM_DATA', payload)
      },

      setKeyword: function (context, payload) {
        return context.commit('SET_KEYWORD', payload)
      },

      setAlya: function (context, payload) {
        return context.commit('SET_ALYA', payload)
      },
      setFitri: function (context, payload) {
        return context.commit('SET_FITRI', payload)
      },
      setPunkyKongz: function (context, payload) {
        return context.commit('SET_PUNKYKONGZ', payload)
      },
      setGenesis: function (context, payload) {
        return context.commit('SET_GENESIS', payload)
      },

      ////////////////////////////////////////////////////////////////////////////////
      // setOldWalletAddress: function (context, oldWalletAddress) {
      //   return context.commit('SET_OID_WALLET_ADDRESS', oldWalletAddress)
      // },
      // setOldWalletType: function (context, oldWalletType) {
      //   return context.commit('SET_OID_WALLET_TYPE', oldWalletType)
      // },
      // setOldNftContract: function (context, oldNftContract) {
      //   return context.commit('SET_OID_NFT_CONTRACT', oldNftContract)
      // },
      setOldNftId: function (context, oldNftId) {
        return context.commit('SET_OLD_NFT_ID', oldNftId)
      },
      setOldWalletAddress: function (context, oldWalletAddress) {
        return context.commit('SET_OLD_WALLET_ADDRESS', oldWalletAddress)
      },
      setOldProjectId(context, projectId) {
        context.commit('SET_OID_PROJECT_ID', projectId)
      },
      setOldProjectName(context, projectName) {
        context.commit('SET_OID_PROJECT_NAME', projectName)
      },
      setOldContractAddress(context, contractAddress) {
        context.commit('SET_OID_CONTRACT_ADDRESS', contractAddress)
      },
      setOldMainnetAddress(context, mainnetAddress) {
        context.commit('SET_OID_MAINNET_ADDRESS', mainnetAddress)
      },
      setNewProjectId(context, projectId) {
        context.commit('SET_NEW_PROJECT_ID', projectId)
      },
      setNewProjectName(context, projectName) {
        context.commit('SET_NEW_PROJECT_NAME', projectName)
      },
      setNewContractAddress(context, contractAddress) {
        context.commit('SET_NEW_CONTRACT_ADDRESS', contractAddress)
      },
      setNewMainnetAddress(context, mainnetAddress) {
        context.commit('SET_NEW_MAINNET_ADDRESS', mainnetAddress)
      },
      setDescription(context, description) {
        context.commit('SET_DESCRIPTION', description)
      },
      setOldNftImage(context, oldNftImage) {
        context.commit('SET_OLD_NFT_IMAGE', oldNftImage)
      },
      setOldNftName(context, oldNftName) {
        context.commit('SET_OLD_NFT_NAME', oldNftName)
      },
      setOldContractAddress(context, oldContractAddress) {
        context.commit('SET_OLD_CONTRACT_ADDRESS', oldContractAddress)
      },
      setNewWalletAddress(context, newWalletAddress) {
        context.commit('SET_NEW_WALLET_ADDRESS', newWalletAddress)
      },
      ////////////////////////////////////////////////////////////////////////////////
      setReplayMainVideoCount(context, replayMainVideoCount) {
        context.commit('SET_REPLAY_MAIN_VIDEO_COUNT', replayMainVideoCount)
      },
      setReplayRwaPlanVideoCount(context, replayRwaPlanVideoCount) {
        context.commit('SET_REPLAY_RWA_PLAN_VIDEO_COUNT', replayRwaPlanVideoCount)
      },
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
