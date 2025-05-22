
const routes = [

  {
    path: '/',
    redirect: '/eng',
  },
  // ❗ eng, idn 맴버쉽 페이지가 아직 없어 해당 경로로 들어오는 요청 kor로 리다이렉트
  // {
  //   path: '/eng/membership',
  //   redirect: '/kor/membership',
  // },
  // {
  //   path: '/idn/membership',
  //   redirect: '/kor/membership',
  // },
  {
    path: '/kor',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Index.vue'), meta: { style: '/_css/default.css' } },
      // 멤버쉽 관련
      { path: 'membership', component: () => import('src/pages/membership_main.vue'), meta: { style: '/_css/default.css' } },
      { path: 'membership/enter', component: () => import('src/pages/membership_1.vue'), meta: { style: '/_css/default.css' } },
      { path: 'membership/benefit', component: () => import('src/pages/nft_benefit.vue'), meta: { style: '/_css/default.css' } },
      { path: 'membership/membership_alya1', component: () => import('src/pages/membership_alya_room.vue'), meta: { style: '/_css/default.css' } },
      { path: 'membership/membership_alya2', component: () => import('src/pages/membership_alya_lounge.vue'), meta: { style: '/_css/default.css' } },
      { path: 'membership/membership_alya_price', component: () => import('src/pages/membership_alya_price.vue'), meta: { style: '/_css/default.css' } },
      { path: 'membership/membership_punk1', component: () => import('src/pages/membership_punk_room.vue'), meta: { style: '/_css/default.css' } },
      { path: 'membership/membership_punk2', component: () => import('src/pages/membership_punk_lounge.vue'), meta: { style: '/_css/default.css' } },
      { path: 'membership/membership_punk_price', component: () => import('src/pages/membership_punk_price.vue'), meta: { style: '/_css/default.css' } },
      // 예약 관련
      { path: 'membership/reservation', component: () => import('src/pages/membership_reservation1.vue'), meta: { style: '/_css/default.css' } },
      { path: 'membership/reservation/completion', component: () => import('src/pages/membership_reservation2.vue'), meta: { style: '/_css/default.css' } },
      // 마이페이지 관련
      { path: 'mypage', component: () => import('pages/mypage/MyPage.vue'), meta: { style: '/_css/default.css' } },
      { path: 'mypage/detail', component: () => import('pages/mypage/MyPage_detail.vue'), meta: { style: '/_css/default.css' } },
      // 기타 안내페이지
      { path: 'rwa', component: () => import('src/pages/rwa.vue'), meta: { style: '/_css/default.css' } },
	  { path: 'etcTermsofUse', component: () => import('src/pages/etcTermsofUse.vue'), meta: { style: '/_css/default.css' } },
    ],
  },
  // {
  //   path: '/membership',
  //   component: () => import('layouts/EmptyLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('src/pages/membership_main.vue') },
  //     { path: 'enter', component: () => import('src/pages/membership_1.vue') },
  //     { path: 'benefit', component: () => import('src/pages/nft_benefit.vue'), meta: { style: '/_css/default.css' } },
  //     { path: 'membership_alya1', component: () => import('src/pages/membership_alya_room.vue') },
  //     { path: 'membership_punk1', component: () => import('src/pages/membership_punk_room.vue') },
  //     { path: 'membership_alya2', component: () => import('src/pages/membership_alya_lounge.vue') },
  //     { path: 'membership_punk2', component: () => import('src/pages/membership_punk_lounge.vue') },
  //     { path: 'membership_alya_price', component: () => import('src/pages/membership_alya_price.vue') },
  //     { path: 'membership_punk_price', component: () => import('src/pages/membership_punk_price.vue') },
  //     { path: 'reservation', component: () => import('src/pages/membership_reservation1.vue') },
  //     { path: 'reservation/completion', component: () => import('src/pages/membership_reservation2.vue') },
  //   ]
  // },
  {
    path: '/admin',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/admin/AdminHome.vue'), meta: { style: '/_css/default.css' } },
      { path: 'adminMenu', component: () => import('pages/admin/AdminMenu.vue') },
      { path: 'adminUserList', component: () => import('pages/admin/AdminUserList.vue') },
      { path: 'reservationList', component: () => import('pages/admin/AdminReservationList.vue'), meta: { style: '/_css/default.css' } },
      { path: 'reservationList/detail', component: () => import('pages/admin/AdminReservationDetail.vue'), meta: { style: '/_css/default.css' } },
    ]
  },
  // {
  //   path: '/mypage',
  //   component: () => import('layouts/EmptyLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/mypage/MyPage.vue') },
  //     { path: 'detail', component: () => import('pages/mypage/MyPage_detail.vue') },
  //     { path: 'kor', component: () => import('pages/mypage/MyPageKor.vue') },
  //     { path: 'idn', component: () => import('pages/mypage/MyPageIdn.vue') },
  //   ]
  // },
  // eng
  {
    path: '/eng',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Index_eng.vue'), meta: { style: '/_css/default_eng.css' } },
      // 멤버쉽 관련
      { path: 'membership', component: () => import('src/pages/membership_main_eng.vue'), meta: { style: '/_css/default_eng.css' } },
      { path: 'membership/enter', component: () => import('src/pages/membership_1_eng.vue'), meta: { style: '/_css/default_eng.css' } },
      { path: 'membership/benefit', component: () => import('src/pages/nft_benefit_eng.vue'), meta: { style: '/_css/default_eng.css' } },
      { path: 'membership/membership_alya1', component: () => import('src/pages/membership_alya_room_eng.vue'), meta: { style: '/_css/default_eng.css' } },
      { path: 'membership/membership_alya2', component: () => import('src/pages/membership_alya_lounge_eng.vue'), meta: { style: '/_css/default_eng.css' } },
      { path: 'membership/membership_alya_price', component: () => import('src/pages/membership_alya_price_eng.vue'), meta: { style: '/_css/default_eng.css' } },
      { path: 'membership/membership_punk1', component: () => import('src/pages/membership_punk_room_eng.vue'), meta: { style: '/_css/default_eng.css' } },
      { path: 'membership/membership_punk2', component: () => import('src/pages/membership_punk_lounge_eng.vue'), meta: { style: '/_css/default_eng.css' } },
      { path: 'membership/membership_punk_price', component: () => import('src/pages/membership_punk_price_eng.vue'), meta: { style: '/_css/default_eng.css' } },
      // 예약 관련
      { path: 'membership/reservation', component: () => import('src/pages/membership_reservation1_eng.vue'), meta: { style: '/_css/default_eng.css' } },
      { path: 'membership/reservation/completion', component: () => import('src/pages/membership_reservation2_eng.vue'), meta: { style: '/_css/default_eng.css' } },
      // 마이페이지 관련
      { path: 'mypage', component: () => import('pages/mypage/MyPage_eng.vue'), meta: { style: '/_css/default_eng.css' } },
      { path: 'mypage/detail', component: () => import('pages/mypage/MyPage_detail_eng.vue'), meta: { style: '/_css/default_eng.css' } },
       // 기타 안내페이지
      { path: 'rwa', component: () => import('src/pages/rwa_eng.vue'), meta: { style: '/_css/default_eng.css' } },
	  { path: 'etcTermsofUse', component: () => import('src/pages/etcTermsofUse_eng.vue'), meta: { style: '/_css/default_eng.css' } },
    ],
  },
  // idn
  {
    path: '/idn',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Index_eng.vue'), meta: { style: '/_css/default_eng.css' } },
      // 멤버쉽 관련
      { path: 'membership/benefit', component: () => import('src/pages/nft_benefit_idn.vue'), meta: { style: '/_css/default_eng.css' } },

    ],
  },
  {
    path: '/test',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: 'test1', component: () => import('pages/test/Test.vue')},
    ]
  },


  {
    path: '/mailform',
    component: () => import('pages/mailform.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    // component: () => import('layouts/MainLayout.vue'),
    component: () => import('pages/Error404.vue'),
    // children: [
    //   { path: '', component: () => import('pages/Error404.vue') },
    // ]
  }
]

export default routes
