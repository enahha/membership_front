import { boot } from 'quasar/wrappers'

import LoginModal from 'components/login/LoginModal'
import WalletModal from 'components/login/WalletModal'
import KlipQRCodeModal from 'components/login/KlipQRCodeModal'
import VueCountdown from '@chenfengyuan/vue-countdown'
import InputNewWalletAddressModal from 'src/components/migration/InputNewWalletAddressModal'
import SearchModal from 'src/components/search/SearchModal'
import ReservationDetailModal from 'src/components/reservationdetail/ReservationDetailModal'
import NotiModal from 'src/components/noti/NotiModal'


export default boot(({ app }) => {
  app.component('LoginModal', LoginModal) // 로그인
  app.component('WalletModal', WalletModal) // 월렛
  app.component('KlipQRCodeModal', KlipQRCodeModal) // 클립 QR코드
  app.component('VueCountdown', VueCountdown) // 사전판매 상세 타임카운터
  app.component('InputNewWalletAddressModal', InputNewWalletAddressModal)
  app.component('SearchModal', SearchModal)
  
  app.component('ReservationDetailModal', ReservationDetailModal)
  app.component('NotiModal', NotiModal)

  // app.component('MintingModal', MintingModal)
  // app.component('MintingModalIdn', MintingModalIdn)
  // app.component('MintingModalKor', MintingModalKor)

  // app.component('MintingApplyModal', MintingApplyModal)
  // app.component('MintingApplyModalIdn', MintingApplyModalIdn)
  // app.component('MintingApplyModalKor', MintingApplyModalKor)

  // app.component('MemetoonAccountModal', MemetoonAccountModal)
  // app.component('MemetoonAccountModalIdn', MemetoonAccountModalIdn)
  // app.component('MemetoonAccountModalKor', MemetoonAccountModalKor)

  // app.component('ComingSoonModal', ComingSoonModal)
  // app.component('ComingSoonModalIdn', ComingSoonModalIdn)
  // app.component('ComingSoonModalKor', ComingSoonModalKor)
})
