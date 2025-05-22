import { boot } from 'quasar/wrappers'
import { Cookies } from 'quasar'
import VueClipboard from 'vue-clipboard2'

export default boot(({ app }) => {
  ///////////////////////////////////////////////////////////
  // plugin
  ///////////////////////////////////////////////////////////
  app.use(VueClipboard) // copy text to clipboard - this.$copyText

  ///////////////////////////////////////////////////////////
  // variable
  ///////////////////////////////////////////////////////////
  // 쿠키
  app.config.globalProperties.$cookie = Cookies
  // app.config.globalProperties.$fiters = {
  //   zerofill (value) {
  //     if (!value) return '00'
  //     value = value.toString()
  //     return (value < 10 && value > -1 ? "0" : "") + value
  //   }
  // }

  // 관리자 지갑 주소 - IDO 처리시 사용
  // app.config.globalProperties.$systemWalletAddress = '0xb4285d543F192859cdB9f825686F3a2A8f8AA8BC'
  app.config.globalProperties.$systemWalletAddress = '0x16F5dF3C8dD43166492b867079f48DB746107CFE'
  // app.config.globalProperties.$systemWalletAddressKlay = '0x16F5dF3C8dD43166492b867079f48DB746107CFE'

  // ★★★★★★★★★★ 민팅시 필수 정보 ★★★★★★★★★★
  app.config.globalProperties.$PUNKYKONGZ_TOTAL_SUPPLY =  5000  // 펑키 콩즈 총 민팅 개수
  app.config.globalProperties.$ADMIN_SUPPLY_WALLET = '8UwXdUWyN3FRtsMtqK3Xa8sa1DFdrE1c5mu11Z8z1maQ' // 민팅 물량 지갑 주소(팬텀지갑주소) - 남은 수량 민팅시 사용 (사용안함 - db에서 가져오는걸로 바꿈)

  app.config.globalProperties.$systemMailFrom = 'question_pkz@gaudilabs.io'
  // app.config.globalProperties.$systemMailTo = 'contact@starinc.io'
  app.config.globalProperties.$systemMailTo = 'question_pkz@gaudilabs.io'    // TODO: ★★★ 운영 ★★★

  // 관리자 여부
  // app.config.globalProperties.$adminCode = '1029'
  app.config.globalProperties.$adminCode = '1234'

  const SCOPE_DOMAIN_KLAYTN_TEST = 'https://baobab.scope.klaytn.com/'
  const SCOPE_DOMAIN_KLAYTN = 'https://scope.klaytn.com/'
  app.config.globalProperties.$scopeDomainKlaytn = SCOPE_DOMAIN_KLAYTN

  // 계약 검증 신청 진입 화면 URL
  app.config.globalProperties.$scopeSubmissionUrl = app.config.globalProperties.$scopeDomainKlaytn + 'contract/submission'


  const DOMAIN_LOCAL = ''
  const DOMAIN_FUNDSAFE_TEST = 'http://localhost:8888'
  const DOMAIN_FUNDSAFE = 'https://fundsafe.io'
  app.config.globalProperties.$apiServer = DOMAIN_FUNDSAFE

  app.config.globalProperties.$frontDomain = DOMAIN_FUNDSAFE

  // project seq
  app.config.globalProperties.$OPERATE_PROJECT_SEQ = 1

  // 펑키비즘 예약 상태
  app.config.globalProperties.$RESERVATION_STATUS_WAIT = '0' // 예약 신청 -  예약 확인 중(신청 메일 관리자에게 전송 완료)
  app.config.globalProperties.$RESERVATION_STATUS_FAILED = '5' // 예약 확정 - 예약 취소 가능(관리자 예약 확정 후 고객에게 메일 전송 완료)
  app.config.globalProperties.$RESERVATION_STATUS_PROCESSING = '10' // 예약 취소 신청 - 취소 대기 중(취소 메일 관리자에게 전송 완료)
  app.config.globalProperties.$RESERVATION_STATUS_COMPLETED = '50' // 예약 취소 확정 - 취소 완료(관리자 예약 취소 후 고객에게 메일 전송 완료)
  
  // 펑키비즘 NFT collection 정보
  // app.config.globalProperties.$ALYA_COLLETION_ADDRESS = 'FzjCkWYLn6HjA4wZqAeSnLfPkMexCevxbTgk5bso1qbX'
  app.config.globalProperties.$ALYA_COLLETION_ADDRESS = '8cAepBVP6SkJ2PcZ7xDwkhio96fjwMDvPQkHPBf1uWg2'
  app.config.globalProperties.$FITRI_COLLETION_ADDRESS = '91q4nr2DuHDn1JSmQcB532pwteot3gSH22QnzB6rHHrD'
  // app.config.globalProperties.$PUNKY_COLLETION_ADDRESS = '4SVLFzpFAtAwYw5rrxzpqRHQV3pu1kDfUL1deS7Wa5Lh' // 소각 전  컨트랙트 주소
  app.config.globalProperties.$PUNKY_COLLETION_ADDRESS = 'GtX6UQ1E4QXCwvYkMzweoVeCC5PrpaQrw4xfeZxSvvVy' // 소각 후 최신 컨트랙트 주소 
  app.config.globalProperties.$GENESIS_COLLETION_ADDRESS = 'Awhjpvm4K9MvnrWUWT3i1NMarSUcFcV9rXKZdyACPi42'

  // 펑키비즘 Helius API 키
  app.config.globalProperties.$HELIUS_API_KEY = '55181376-951d-4dca-ade1-79f9f82060a4'

  // 펑키비즘 상수
  app.config.globalProperties.$ISPG = 'Genesis, Punky Kongz'
  app.config.globalProperties.$ISAF = 'Alya, Fitri'

  // key_value
  app.config.globalProperties.$KEY_VALUE_GET_NFT_ID_RETRY_COUNT_LIMIT = 'get_nft_id_retry_count_limit'
  // app.config.globalProperties.$KEY_VALUE_SOLANA_SYSTEM_WALLET_SECRET_KEY = 'solana_system_wallet_secret_key'
  // app.config.globalProperties.$KEY_VALUE_SOLANA_DEOISIT_WALLET_SECRET_KEY = 'solana_deposit_wallet_secret_key'
  app.config.globalProperties.$KEY_VALUE_SOLANA_PAYER_SECRET_KEY = 'solana_payer_secret_key'
  app.config.globalProperties.$KEY_VALUE_SOLANA_SELLER_FEE_BASIS_POINT = 'solana_seller_fee-basis_point'
  app.config.globalProperties.$KEY_VALUE_SOLANA_COLLECTION_MINT = 'solana_collection_mint'
  app.config.globalProperties.$KEY_VALUE_SOLANA_SYMBOL = 'solana_symbol'
  app.config.globalProperties.$KEY_VALUE_BUBBLEGUM_TREE_ADDRESS = 'bubblegum_tree_address'
  app.config.globalProperties.$KEY_VALUE_SOLANA_CREATOR_WALLET_KEY = 'solana_creator_wallet_key'

  ///// 솔라나 체인 /////
  // app.config.globalProperties.$SOLANA_NETWORK = 'https://api.devnet.solana.com'
  // app.config.globalProperties.$SOLANA_NETWORK = 'https://solana-devnet.g.alchemy.com/v2/nf53tmrNKO5O43M7QdTueHSBLGFBYQYf'
  // app.config.globalProperties.$SOLANA_NETWORK = 'https://lively-restless-reel.solana-devnet.quiknode.pro/9dbee36670eab2258267128780801d97eb6ef68b'
  // app.config.globalProperties.$SOLANA_NETWORK = 'https://api.testnet.solana.com'
  // app.config.globalProperties.$SOLANA_NETWORK = 'https://api.mainnet-beta.solana.com'
  app.config.globalProperties.$SOLANA_NETWORK = 'https://billowing-aged-cherry.solana-mainnet.quiknode.pro/627a166e20d50ba35cf9f08028a0876a6417f8bb'  // TODO: ★★★ 운영 ★★★ 퀵노드 솔라나 엔드포인트 계정정보=( yd.ahn@starinc.io / Star0401! )
  // app.config.globalProperties.$SOLANA_NETWORK = 'https://rpc.ankr.com/solana'
  // app.config.globalProperties.$SOLANA_NETWORK = 'https://damp-withered-card.solana-mainnet.quiknode.pro/a2c0d3cc811a6529c460d5c0a89ac42722a5a603/' // 20240613
  // app.config.globalProperties.$SOLANA_NETWORK = 'https://solana-mainnet.g.alchemy.com/v2/nf53tmrNKO5O43M7QdTueHSBLGFBYQYf' //  20241118    테스트 필요
  
  ////// BSC 체인 //////
  // 테스트
  app.config.globalProperties.$BSC_NETWORK = 'https://data-seed-prebsc-1-s1.binance.org:8545/', // BSC 테스트넷 RPC URL
  app.config.globalProperties.$BSC_MAINNET_ID = 97 // testnet

  // TODO: ★★★ 운영 ★★★
  // app.config.globalProperties.$BSC_NETWORK = 'https://bsc-dataseed.binance.org/', // TODO: ★★★ 운영 ★★★ BSC 메인넷  RPC URL
  // app.config.globalProperties.$BSC_MAINNET_ID = 56 // TODO: ★★★ 운영 ★★★

  // app.config.globalProperties.$BNB_BUMIBAND_CONTRACT_ADDRESS = '0x165aB2580D5030F828656e254f8b1683B19A4Eb0'
  // app.config.globalProperties.$BNB_ME_100_CONTRACT_ADDRESS = '0xb38fe12749989e81FB8a8DBcb37395AB76B8eD70'
  // app.config.globalProperties.$BNB_ME_1500_CONTRACT_ADDRESS = '0x2A51096a08817C66398df4cA6feaEeee6B6771f4'
  // app.config.globalProperties.$BNB_ME_10000_CONTRACT_ADDRESS = '0xb149b4255212B7E2DBFcF5cD3a47fdcfd3D8B781'

  // LBANK API URI - Token Price List
  app.config.globalProperties.$LBANK_TOKEN_PRICE_LIST_API_URI = 'https://api.lbank.info/v2/supplement/ticker/price.do'

  // getblock
  // app.config.globalProperties.$SOLANA_NETWORK = 'https://go.getblock.io/b5e84234dc414f0baeda5ffa919e1dc0' // 테스트
  // app.config.globalProperties.$SOLANA_NETWORK = 'https://go.getblock.io/b9d454384a244fa1b42b33a4d101bd59' // 20240613(운영용) $29

  // mint_plan 민팅 상태 코드
  app.config.globalProperties.$MINT_PLAN_STATUS_WAIT = '0' // 대기
  app.config.globalProperties.$MINT_PLAN_STATUS_FAILED = '5' // 실패
  app.config.globalProperties.$MINT_PLAN_STATUS_PROCESSING = '10' // 처리중
  app.config.globalProperties.$MINT_PLAN_STATUS_COMPLETED = '50' // 완료

  app.config.globalProperties.$KEY_VALUE_SOLANA_SIGNER_WALLET_SECRET_KEY = 'solana_signer_wallet_secret_key'
  app.config.globalProperties.$KEY_VALUE_BNB_SIGNER_WALLET_SECRET_KEY = 'bnb_signer_wallet_secret_key'

  // 에러 메세지
  app.config.globalProperties.$ERROR_CODE_UNEXPECTED = {
    returnCd: -1,
    returnMsg: 'An unexpected error has occurred',
  }
  app.config.globalProperties.$ERROR_CODE_GET_ASSOCIATED_TOKEN_ADDRESS = {
    returnCd: 1,
    returnMsg: 'Failed to get token address',
  }
  app.config.globalProperties.$ERROR_CODE_ACCOUNT_BALANCE = {
    returnCd: 2,
    returnMsg: 'Failed to check account balance or mint information',
  }
  app.config.globalProperties.$ERROR_CODE_CREATE_RECEIVER_TOKEN_ACCOUNT = {
    returnCd: 3,
    returnMsg: 'Failed to create associated token account for receiver',
  }
  app.config.globalProperties.$ERROR_CODE_COIN_TRANSFER = {
    returnCd: 4,
    returnMsg: 'Failed to coin transfer',
  }
  app.config.globalProperties.$ERROR_CODE_MINTING_NFT = {
    returnCd: 5,
    returnMsg: 'Failed to NFT minting',
  }
  app.config.globalProperties.$ERROR_CODE_VERIFY_COLLECTION = {
    returnCd: 6,
    returnMsg: 'Failed to verify collection',
  }
  app.config.globalProperties.$ERROR_CODE_REQUIRE_MAINNET_NETWORK = {
    returnCd: 7,
    returnMsg: 'Please connect to the Mainnet',
  } 

    
  // 테스트용 Sepolia ABI
  // app.config.globalProperties.$METAKONGZ_CONTRACT_ADDRESS = '0x1929749590a55b1947AEcB397223bEfaFCbF5923'    // 테스트용 Sepolia 컨트렉트 주소
  // app.config.globalProperties.$METAKONGZ_ABI =[{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721IncorrectOwner","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721InsufficientApproval","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC721InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"ERC721InvalidOperator","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721InvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC721InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC721InvalidSender","type":"error"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721NonexistentToken","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_toTokenId","type":"uint256"}],"name":"BatchMetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"MetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"count","type":"uint256"},{"internalType":"string","name":"baseTokenURI","type":"string"}],"name":"batchMintNFT","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getTokenOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getTokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mintNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
  
  // ★★★ PROD용 ★★★
  app.config.globalProperties.$METAKONGZ_CONTRACT_ADDRESS = '0x46FdfCb3Cd89A1C54D36EE83a4ADC184747B40D9'    // ★★★ 메인넷 ★★★
  app.config.globalProperties.$METAKONGZ_ABI =[{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_param1","type":"uint256"}],"name":"unknown248a9ca3","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_param1","type":"uint256"},{"name":"_param2","type":"address"}],"name":"unknown91d14854","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"approved","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]

  app.config.globalProperties.$BNB_ABI = [{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"},{"internalType":"address","name":"creator_","type":"address"},{"internalType":"uint256","name":"_creatorFeeBasisPoints","type":"uint256"},{"internalType":"address","name":"payer_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721IncorrectOwner","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721InsufficientApproval","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC721InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"ERC721InvalidOperator","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721InvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC721InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC721InvalidSender","type":"error"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721NonexistentToken","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_toTokenId","type":"uint256"}],"name":"BatchMetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"MetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"creatorFeeBasisPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCreatorFeeBasisPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getMintedTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPayer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"tokenURI_","type":"string"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"tokenURI_","type":"string"}],"name":"mintByOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"tokenURI_","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"mintToIndex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"tokenURI_","type":"string"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"mintToIndexByOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"payer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"royaltyAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"salePrice","type":"uint256"}],"name":"secondaryTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_creator","type":"address"}],"name":"setCreator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_creatorFeeBasisPoints","type":"uint256"}],"name":"setCreatorFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newName","type":"string"}],"name":"setName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newPayer","type":"address"}],"name":"setPayer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newSymbol","type":"string"}],"name":"setSymbol","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"tokensOfOwnerByRange","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalCreatorFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"newTokenURI","type":"string"}],"name":"updateTokenURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

  // 결제 관련 상수
  // app.config.globalProperties.$CREATE_TOKEN_CD_PAID = '11' // 토큰 생성 상태 코드 - 결제완료
  app.config.globalProperties.$PAY_CODE_CREATE_TOKEN = 'CREATE_TOKEN' // 결제코드: CREATE_TOKEN(토큰 생성)
  app.config.globalProperties.$PAY_CODE_MINT_TOKEN = 'MINT_TOKEN' // 결제코드: MINT_TOKEN(토큰 추가발행)
  app.config.globalProperties.$PAY_CODE_BURN_TOKEN = 'BURN_TOKEN' // 결제코드: BURN_TOKEN(토큰 소각)
  app.config.globalProperties.$PAY_CODE_CONTRACT_VERIFY = 'CONTRACT_VERIFY' // 결제코드: CONTRACT_VERIFY(계약 검증)
  app.config.globalProperties.$PAY_CODE_CREATE_POOL = 'CREATE_POOL' // 결제코드: CREATE_POOL(유동성 풀 생성)
  app.config.globalProperties.$PAY_CODE_CREATE_AIRDROP = 'CREATE_AIRDROP' // 결제코드: CREATE_AIRDROP(에어드랍 생성)
  app.config.globalProperties.$PAY_CODE_CREATE_WHITELIST = 'CREATE_WHITELIST' // 결제코드: CREATE_WHITELIST(화이트리스트 생성)
  app.config.globalProperties.$PAY_CODE_CREATE_PRESALE = 'CREATE_PRESALE' // 결제코드: CREATE_PRESALE(사전판매 생성)
  app.config.globalProperties.$PAY_CODE_CREATE_RECRUIT = 'CREATE_RECRUIT' // 결제코드: CREATE_RECRUIT(채용 생성)
  app.config.globalProperties.$PAY_CODE_CREATE_MINTING = 'CREATE_MINTING' // 결제코드: CREATE_MINTING(NFT 민팅 생성)

  // app.config.globalProperties.$device = '' // 디바이스 - P: 데스크탑, M: 모바일웹, android: 안드로이드 앱, ios: 아이폰 앱

  // Swapscanner URL
  app.config.globalProperties.$urlSwapscannerEn = 'https://swapscanner.io/swap?from=0x0000000000000000000000000000000000000000&to='
  app.config.globalProperties.$urlSwapscannerKo = 'https://swapscanner.io/ko/swap?from=0x0000000000000000000000000000000000000000&to='
  // app.config.globalProperties.$urlSwapscannerEn = 'https://swapscanner.io/pro/swap?from=krw&to='
  // app.config.globalProperties.$urlSwapscannerKo = 'https://swapscanner.io/ko/pro/swap?from=krw&to='




  ///////////////////////////////////////////////////////////
  // Method
  ///////////////////////////////////////////////////////////
  app.config.globalProperties.$testApi = function (param) {
    return param + '456456456'
  }

  app.config.globalProperties.$noti = function (quasar, message) {
    quasar.notify({
      message: message,
      color: '#7a38d0',
      // avatar: 'images/logo-64x64.png',
      // avatar: 'https://starinc.club/logo/logo_bumiband_earth.png',
      position: 'bottom',
      html: true,
      actions: [
        { label: 'X', color: 'white', handler: () => { /* ... */ } },
      ]
    })
  }

})
