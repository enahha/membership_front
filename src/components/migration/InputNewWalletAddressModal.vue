<template>
  <q-dialog v-model="inputNewWalletAddressModal" persistent>
    <q-card style="width: 100%; color: aliceblue">
      <q-toolbar>
        <q-toolbar-title><span class="text-weight-bold text-center">NFT Migration</span></q-toolbar-title>
        <q-btn flat round dense icon="close" v-close-popup icon-right="true" @click="close" />
      </q-toolbar>

      <br />

      <div v-if="!confirming">
        <div class="justify-center col-3" style="background-color: #333333; color: white; text-align: center; width: 100%; padding: 10px;" >
          <div style="justify-content: space-between; margin: 20px;">
            <div style="flex-grow: 4; font-size: 18px; padding: 10px;">{{ $t('warn') }}</div>
            <div style="margin-left: auto; flex-grow: 6;">
              <div style="white-space: pre-line; text-align: left; padding: 10px;">{{ $t('warn_small') }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="justify-center " style="padding: 30px 15px 0px;">솔라나 지갑주소</div>
      <q-input
        hide-bottom-space standout
        bg-color="white"
        v-model="solanaAddress"
        dark
        :rules="[val => !!val || '솔라나 주소를 입력해주세요.']"
        placeholder="솔라나 지갑 주소를 정확하게 기입해 주세요."
        style="padding: 15px;"
        :readonly="confirming"
      />

      <div v-if="!confirming" class="row justify-between" style="padding: 20px 30%;">
        <q-btn label="닫기" color="negative" @click="close"/>
        <q-btn
          label="Go Solana!"
          color="positive"
          @click="solanaAddress && confirm()"
          :disable="!solanaAddress"
        />
      </div>

      <div v-if="confirming">
        <div style="white-space: pre-line; text-align: center; padding: 10px;">{{ $t('confirm_migration') }}</div>
      </div>      
      <div v-if="confirming" class="row justify-between" style="padding: 20px 30%;">
        <q-btn label="No" color="negative" @click="cancelConfirm" style="padding-right: 10px;"/>
        <q-btn label="Yes" color="positive" @click="migrate" />
      </div>
    </q-card>
  </q-dialog>

  <q-dialog v-model="failMigrate">
      <q-card>
        <q-card-section class="row items-center" style="min-width: 200px;">
          <q-icon name="warning" color="primary" size="md" />
          <span class="q-ml-sm">{{ $t('failed') }}</span>
        </q-card-section>
        <q-separator />
        <q-card-actions align="around">
          <q-btn flat style="width: 45%;" :label="$t('confirm')" color="black" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="successMigrate">
      <q-card>
        <q-card-section class="row items-center" style="min-width: 200px;">
          <q-icon name="warning" color="primary" size="md" />
          <span class="q-ml-sm">{{ $t('success') }}</span>
        </q-card-section>
        <q-separator />
        <q-card-actions align="around">
          <q-btn flat style="width: 45%;" :label="$t('migrate_successful')" color="black" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
import { QSpinnerGears } from 'quasar'
import { prepare, request, getResult, getCardList } from 'klip-sdk'
import QRCode from 'qrcode'
import { mapGetters } from 'vuex';

export default {
  data () {
    return {
      inputNewWalletAddressModal: false,
      solanaAddress: '',
      confirming: false,
      failMigrate: false,
      successMigrate: false,
      adminWalletAddress: '0x16F5dF3C8dD43166492b867079f48DB746107CFE',
      projectId: '',

      MigrationVo: {
        seq: '',
        oldWalletAddress: '',
        oldWalletType: '',
        oldNftContract: '',
        oldNftId: '',
        newWalletAddress: '',
        // to_nft_contract: '',
        // to_nft_id: '',
      },
    }
  },
  created: function () {
    this.projectId = this.$route.query.id

  },
  methods: {
    async show () {
      this.inputNewWalletAddressModal = true
    },
    close () {
      this.inputNewWalletAddressModal = false
      this.solanaAddress = '' 
      this.confirming = false
    },
    confirm() {
      this.confirming = true
      // // confirming 상태가 되기 전에 입력값을 임시로 저장
      // this.solanaAddress = this.solanaAddress
    },
    cancelConfirm() {
      this.confirming = false
      // confirming 상태가 해제되면 임시로 저장한 입력값을 다시 복구
      this.solanaAddress = this.solanaAddress
      this.solanaAddress = ''
    },
    async migrate() {
      const walletType = this.$cookie.get('walletType');
      const oldWalletAddress = this.$cookie.get('walletAddress');
      const oldNftId = this.$store.getters.getOldNftId;
      const oldNftName = this.$store.getters.getOldNftName;
      const oldNftImage = this.$store.getters.getOldNftImage;
      const oldNftContract = this.$store.getters.getOldContractAddress;

      console.log('migrate oldNftId : ' + oldNftId);
      console.log('migrate oldNftName : ' + oldNftName);
      console.log('migrate oldNftImage : ' + oldNftImage);
      console.log('migrate oldNftContract : ' + oldNftContract);
      console.log('migrate projectId : ' + this.projectId);
      console.log('migrate solanaAddress : ' + this.solanaAddress);

      try {
        // Nft transfer
        await this.transferNft(walletType, oldWalletAddress, oldNftContract, oldNftId);
        
        // Klay transfer
        await this.sendKlay(walletType, oldWalletAddress);
        
        // Migration
        await this.runMigration(oldWalletAddress, walletType, oldNftContract, oldNftId, oldNftName, oldNftImage);
        
      } catch (error) {
        console.error('Error during transfer and migration:', error);
        this.$q.loading.hide();
        this.failMigrate = !this.failMigrate;
        this.$emit('actionFail');
        this.close();
      }
    },
    async runMigration(oldWalletAddress, walletType, oldNftContract, oldNftId, oldNftName, oldNftImage) {
      const param = {
        oldProjectId: this.projectId,
        oldWalletAddress: oldWalletAddress,
        oldWalletType: walletType,
        oldNftContract: oldNftContract,
        oldNftId: oldNftId,
        oldNftName: oldNftName,
        oldNftImage: oldNftImage,
        newWalletAddress: this.solanaAddress,
      };
      
      try {
        const result = await this.$axios.post('/api/migration/run', {}, { params: param });
        this.$q.loading.hide();
        if (result.data && result.data.resultSd === 'SUCCESS') {
          this.$noti(this.$q, this.$t('migration_complete'));
          this.$emit('actionSuccess');
        } else {
          this.$noti(this.$q, this.$t('migration_fail'));
        }
        this.$router.push(); // 이 부분에서 path 오류를 피하기 위해 목적지 path를 명시적으로 지정해야 할 수도 있습니다.
        this.close();
      } catch (error) {
        console.error('Error during migration run:', error);
        this.$q.loading.hide();
        this.$noti(this.$q, this.$t('migration_fail'));
        this.close();
      }
    },
    async sendKlay(walletType, oldWalletAddress) {
      // Field validation check
      if (!this.validate()) {
        return
      }      
      // 6. 지갑 잠김 체크
      let currentWalletAddress = ''
      console.log(walletType)
      if (walletType === 'kaikas') {
        const accounts = await window.klaytn.enable()
        currentWalletAddress = accounts[0]

        // // 메인넷 체크
        // if (window.klaytn.networkVersion !== 8217) {
        //     this.$noti(this.$q, this.$t('set_to_the_mainnet')) // 네트워크를 메인넷(Klaytn Cypress)으로 설정해주세요.     // 테스트넷일경우 수수료 전송은 건너 뀜.
        //     return
        // }
      } else if (walletType === 'metamask') {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        currentWalletAddress = accounts[0]

        // 메인넷 체크
        const chainId = await window.ethereum.request({ method: 'eth_chainId' })
        if (chainId !== '0x2019') {
            this.$noti(this.$q, this.$t('set_to_the_mainnet')) // 네트워크를 메인넷(Klaytn Cypress)으로 설정해주세요.
            return
        }
      } else if (walletType === 'klip') {
        currentWalletAddress = oldWalletAddress
      } else {
        // 지갑 해당 없을 경우
        this.$noti(this.$q, this.$t('this_wallet_is_not_currently_supported')) // 현재 지원되지 않는 지갑입니다.
        return
      }
      // console.log('currentWalletAddress: ' + currentWalletAddress)
      if (currentWalletAddress !== oldWalletAddress) {
        this.$noti(this.$q, this.$t('wallet_addresses_are_different')) // 지갑 주소가 서로 다릅니다.
        console.log(currentWalletAddress)
        this.$refs.refWalletModal.show()
        return
      }
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


      let klayValue = 0.1; // 1 KLAY
      // let pebValue = BigInt(klayValue) * BigInt(10 ** 18); // KLAY를 peb로 변환
      // let klayAmountHex = pebValue.toString(16); // peb 값을 16진수 형태로 변환

      // this.$q.loading.show() // 로딩 표시 시작
      // 로딩 표시 시작
      // console.log('로딩 표시 시작')
      this.$q.loading.show({
        spinner: QSpinnerGears,
        message: this.$t('loading_message_minting'),
      })
      // console.log('로딩 표시 시작 end')
      try {
        // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. kaikas
        // 1. kaikas
        // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. kaikas
        // Kaikas 지갑 사용 시
        if (walletType === 'kaikas') {
          console.log('@@@@@@@@@@@@@@ sendKlay 들어옴 #################')
          // 클레이 보내기
          caver.klay
                .sendTransaction({
                  type: 'VALUE_TRANSFER',
                  from: klaytn.selectedAddress,
                  to: this.adminWalletAddress,
                  value: caver.utils.toPeb(klayValue.toString(), 'KLAY'),
                  gas: 8000000
                })
                .once('transactionHash', transactionHash => {
                  console.log('txHash', transactionHash)
                })
                .once('receipt', receipt => {
                  console.log('receipt', receipt)
                })
                .once('error', error => {
                  throw new Error('sendKlay failed: ' + error.message);
                });
        } else if (walletType === 'metamask') {
          // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. metamask
          // 2. metamask         test해봐야 함!
          // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. metamask
              // KLAY 전송
              const transactionParameters = {
                  from: currentWalletAddress,
                  to: this.adminWalletAddress,
                  value: klayAmountHex,
              };
              const txHash = await window.ethereum.request({
                  method: 'eth_sendTransaction',
                  params: [transactionParameters],
              });

              alert('KLAY sent successfully.');
              console.log('txHash:', txHash);
        } else if (walletType === 'klip') {
          this.$q.loading.hide(); // 로딩 표시 종료 -> 클립은 화면에 QR코드 찍어야 해서 로딩 종료.
          // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3 klip
          // 3 klip             test해봐야 함!
          // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3 klip

          // Klip을 사용하여 KLAY 전송
          const bappName = 'NFT Migration';
          const successLink = 'myApp://...';
          const failLink = 'myApp://...';

          // Klip API 호출을 위한 요청 객체
          const request = {
            type: 'klaytn/transaction/carry',
            transaction: {
              type: 'VALUE_TRANSFER',
              from: currentWalletAddress, 
              to: this.adminWalletAddress, 
              value: klayAmountHex, 
              data: '0x', // 전송할 데이터 (여기서는 비어있음)
            },
            bapp: {
              name: bappName,
              success: successLink,
              fail: failLink,
            },
          };

          // PC와 모바일 분기
          if (this.$q.platform.is.cordova || this.$q.platform.is.name === 'webkit' || this.$q.platform.is.mobile) {
            // 모바일인 경우
            const klipRequest = JSON.stringify(request);
            const encodedRequest = encodeURIComponent(klipRequest);
            const klipUrl = `https://a2a-api.klipwallet.com/v2/a2a?request_key=${encodedRequest}`;
            window.location.href = klipUrl;
          } else {
            // PC인 경우
            const isMetamaskInstalled = typeof window.ethereum !== 'undefined';
            if (isMetamaskInstalled) {
              // Metamask가 설치된 경우
              try {
                await window.ethereum.sendAsync({
                  method: 'wallet_invokePlugin',
                  params: ['klip', JSON.stringify(request)],
                });

                alert('KLAY sent successfully.');
              } catch (error) {
                console.error('Failed to invoke Klip plugin:', error);
              }
            } else {
              // Metamask가 설치되지 않은 경우
              console.error('Metamask is not installed.');
            }
          }
    
        } else {
          this.$q.loading.hide(); // 로딩 표시 종료
          this.$noti(this.$q, this.$t('this_wallet_is_not_currently_supported'));
          throw new Error('This wallet is not currently supported');
        }
      } catch (err) {
        this.$q.loading.hide(); // 로딩 표시 종료
        this.$noti(this.$q, err.message);
        this.$noti(this.$q, this.$t('klay_transfer_error'));
        this.close();
        console.log(err);
        throw err; 
      }
    },
    async transferNft(walletType, oldWalletAddress, oldNftContract, oldNftId) {
      try {
        // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. kaikas
        // 1. kaikas
        // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 1. kaikas
        // Kaikas 지갑 사용 시
        if (walletType === 'kaikas') {
          const kip17Instance = new caver.klay.KIP17(oldNftContract);

          await kip17Instance.transferFrom(
            klaytn.selectedAddress, // 보내는 사람의 주소
            this.adminWalletAddress, // 받는 사람의 주소
            oldNftId, // NFT의 토큰 ID
            { from: klaytn.selectedAddress, gas: 8000000 } // 보내는 사람의 주소 명시
          );
          
          console.log('NFT transfer successful');

        } else if (walletType === 'metamask') {
          // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. metamask
          // 2. metamask                 !!! test 필요
          // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 2. metamask
          const nftAbi = [{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
          const nftContract = new web3.eth.Contract(nftAbi, oldNftContract);

          await nftContract.methods.transferFrom(
              oldWalletAddress, 
              this.adminWalletAddress, 
              oldNftId 
          ).send({ from: oldWalletAddress });

          alert('NFT transferred successfully.');
          
        } else if (walletType === 'klip') {
          this.$q.loading.hide(); // 로딩 표시 종료 -> 클립은 화면에 QR코드 찍어야 해서 로딩 종료.
          // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3 klip
          // 3 klip                       !!! test 필요
          // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 3 klip


          // PC와 모바일 분기
          if (this.$q.platform.is.cordova || this.$q.platform.is.name === 'webkit' || this.$q.platform.is.mobile) {
            // 모바일인 경우

            // PC인 경우

          }
    
        } else {
          // 지갑 해당 없을 경우
          this.$q.loading.hide(); // 로딩 표시 종료
          this.$noti(this.$q, this.$t('this_wallet_is_not_currently_supported'));
          this.close();
          return
        }
      } catch (err) {
        console.error('Error sending transaction:', err);
        this.$q.loading.hide();
        throw err;
      }
    },
    ///////////////////////////////////////////////////////////////////////////
    // validation
    ///////////////////////////////////////////////////////////////////////////
    required(val) {
      const message = this.$t('validation_required')
      return required(val, message);
    },
    requiredNumber(val) {
      const message = this.$t('validation_required')
      return required(val, message);
    },
    minLength(val, length) {
      if (!val) {
        return true
      }
      const message = this.$t('validation_min_length') + ': ' + length
      return minLength(val, message, length);
    },
    maxLength(val, length) {
      if (!val) {
        return true
      }
      const message = this.$t('validation_max_length') + ': ' + length
      return maxLength(val, message, length);
    },
    minValue(val, value) {
      const message = this.$t('validation_min_value') + ': ' + value
      return minValue(val, message, value);
    },
    maxValue(val, value) {
      const message = this.$t('validation_max_value') + ': ' + value
      return maxValue(val, message, value);
    },
    ///////////////////////////////////////////////////////////////////////////
    validate() {
      let result = true

      if (this.option_field || this.option_field_ko) {
        if (!this.$refs.option_field_value.validate()) {
          this.$noti(this.$q, this.$t('validation_failed_minting_option_field_value'))
          result = false
        }
      }

      return result
    },
  }
}
</script>
