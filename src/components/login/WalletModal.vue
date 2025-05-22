<template>
  <q-dialog v-model="WalletModal" persistent>
    <q-card style="display: flex; justify-content: center; width: 450px !important; height: auto; max-width: 850px !important">
      <!-- 팬텀지갑주소 입력 -->
      <div class="" id="airdrop_apply">
        <div class="">
          <div class="">

            <div class="modal_body">
              <!-- <h4>Connet to<br> Punky Kongz</h4> -->
              <button type="button" @click="close" class="modal_close" data-dismiss="modal"><i class="xi-close-thin"></i></button>
              <div>
                <ul style="display: contents;">
                  <li class="center">
                    <button @click="connectWallet('metamask')" class="wallet-button">
                      <div class="center">
                        <img src="logo/logo_metamask.png" style="width: 4.4rem; margin-right: 20px;" />
                        <h4 class="text-white" style="margin-bottom: 0 !important; text-align: center; padding-top: 7px;">{{ $t('wallet_metamask') }}</h4>
                      </div>
                    </button>
                  </li>
                  <li>
                    <button @click="connectWallet('phantom')" class="wallet-button">
                      <div class="center">
                        <img src="logo/logo_phantom.png" style="width: 4.3rem; margin-right: 20px;" />
                        <h4 class="text-white" style="margin-bottom: 0 !important; text-align: center; padding-top: 7px;">{{ $t('wallet_phantom') }}</h4>
                      </div>
                    </button>
                  </li>
                  <li>
                    <button @click="connectWallet('dcent')" class="wallet-button">
                      <div class="center">
                        <img src="logo/symbol_full_color.png" style="width: 4.1rem; margin-right: 20px;" />
                        <h4 class="text-white" style="margin-bottom: 0 !important; text-align: center; padding-top: 7px;">{{ $t('wallet_dcent') }}</h4>
                      </div>
                    </button>
                  </li>
                  <li>
                    <button @click="connectWallet('ledger')" class="wallet-button">
                      <div class="center">
                        <img src="logo/ledger_logo.png" style="width: 4.1rem; margin-right: 20px;" />
                        <h4 class="text-white" style="margin-bottom: 0 !important; text-align: center; padding-top: 7px;">{{ $t('wallet_ledger') }}</h4>
                      </div>
                    </button>
                  </li>
                </ul>
                <!-- <div class="apply_btn mt40">
                <btn @click="apply" class="btn btn-holder wp100" data-toggle="modal">에어드랍 신청</btn>
                </div> -->
                <br />
                <div class="text-white text-left" style="word-break:keep-all;">
                  ※ 모바일 접속시 주의 사항
                  <br>· D'CENT : 디센트 앱 브라우저에서 사이트 접속 후 '메타마스크'를 선택해주세요.
                  <br>· Ledger : 메타마스크 앱 브라우저에서 사이트 접속 후 '메타마스크'를 선택해주세요.
                </div>
                <!-- <p class="text-white text-left" style="word-break:keep-all;">
                  ※ 디센트 지갑 주의 사항<br>
                  모바일에서는 디센트 앱 브라우저에서 접속 후 '메타마스크'를 선택해주세요.
                </p> -->
              </div>
            </div>

          </div>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
import { required, requiredNumber, minLength, maxLength, minValue, maxValue} from 'src/validation.js';
import { Connection, PublicKey } from "@solana/web3.js";

export default {
  data () {
    return {
      WalletModal: false,
      solanaWalletAddress: '',
      isinvalid: false,
    }
  },
  methods: {
    async show() {
      this.WalletModal = true
    },
    close() {
      this.WalletModal = false
    },
    async connectWallet(walletType) {
      this.$emit('callback-applyConnectWallet', walletType)

      this.close()
    },
  }
}
</script>

<style scoped>
.modal-1 {
    /* position: fixed;
    top: 0;
    left: 0; */
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: 0;
}

.modal-dialog-1 {
    position: relative;
    width: auto;
    margin: 0.5rem;
    pointer-events: none;
}

.modal-1.fade-1 .modal-dialog-1 {
    transition: transform .3s ease-out;
}

.modal-content-1 {
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    /* background-color: #fff; */
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 3rem;
    outline: 0;
}

.modal-dialog-centered-1 {
    display: flex;
    align-items: center;
    min-height: calc(100% - 1rem);
}

.center {
  display: flex;
  justify-content: center;
}

.wallet-button {
  width: 10%;
  background: none;
  border-radius: 1rem;
  border: none;
  padding: 30px;
  cursor: pointer;
  text-align: left;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.wallet-button:hover {
  background-color: #32313b
}
</style>