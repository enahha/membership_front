<template>
  <q-dialog v-model="AirdropApplyModal" persistent>
    <q-card style="display: flex; justify-content: center; width: 900px !important; height: auto; max-width: 800px !important">
      <!-- 팬텀지갑주소 입력 -->
      <div class="modal-1 fade-1 inner" id="airdrop_apply">
        <div class="modal-dialog-1 modal-dialog-centered-1">
        <div class="modal-content-1">

          <div class="modal_body">
            <button type="button" @click="close" class="modal_close" data-dismiss="modal"><i class="xi-close-thin"></i></button>
            <h3>펑키콩즈 에어드랍 신청하기</h3>
            <h4>팬텀(솔라나) 지갑 주소</h4>
            <div class="wallet_input">
              <input type="text" v-model="solanaWalletAddress" class="form-control wp100" placeholder="팬텀지갑 주소를 입력해 주세요." />
            </div>
            <p class="notice"><i class="xi-warning"></i> PUNKY Kongz를 에어드랍 받으실 팬텀 지갑 주소를 정확하게 입력해주세요 </p>
            <div class="apply_btn mt40">
              <btn @click="apply()" class="btn btn-holder wp100" data-toggle="modal">에어드랍 신청</btn>
            </div>
          </div>

        </div>
        </div>
      </div>
    </q-card>
  </q-dialog>

  <q-dialog v-model="isinvalid">
    <q-card style="width: 900px !important; height: auto; max-width: 850px !important">
      <div class="modal-1 fade-1 inner" id="wallet_confirm">
        <div class="modal-dialog-1 modal-dialog-centered-1">
        <div class="modal-content-1">

          <div class="modal_body">
            <button type="button" @click="closeInvaild" class="modal_close" data-dismiss="modal"><i class="xi-close-thin"></i></button>
            <p class="icons"><i class="xi-warning"></i></p>
            <h4>입력하신 지갑 주소가 팬텀(솔라나) 지갑 주소가 아닙니다.<br /> 다시 확인해주세요. </h4>
            <div class="apply_btn mt40">
              <button @click="closeInvaild" class="btn btn-holder s" data-dismiss="modal">확인</button>
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
      AirdropApplyModal: false,
      solanaWalletAddress: '',
      isinvalid: false,
    }
  },
  methods: {
    async show() {
      this.AirdropApplyModal = true
    },
    close() {
      this.AirdropApplyModal = false
    },
    closeInvaild() {
      this.isinvalid = false
    },
    async apply() {
      let result = await this.isValidSolanaAddress(this.solanaWalletAddress)
      if(!result) {
        this.isinvalid = true
        return
      }
      this.$emit('callback-applyRequestAirdrop', this.solanaWalletAddress)

      this.close()
    },
    async isValidSolanaAddress(address) {
      try {
        let key = new PublicKey(address)
        return PublicKey.isOnCurve(key.toBuffer())
      } catch (error) {
        console.log('error : ', error)
        return false
      }
    },
    // async validate() {
    //   let result = true
    //   const value = this.solanaWalletAddress
    //   if (!value) {
    //     result = false
    //     // this.$noti(this.$q, 'Solana wallet address required')
    //     return false
    //   }
    //   if (value.length != 44) {
    //     result = false
    //     // this.$noti(this.$q, 'Invalid solana wallet address')
    //   }
    //   return result
    // },
    // async checkAddress(solanaWalletAddress) {
    //   let isSolanaAddressValid = await this.isValidSolanaAddress(solanaWalletAddress)
    //   console.log(isSolanaAddressValid ? 'Valid Solana address' : 'Invalid Solana address')
    //   return isSolanaAddressValid
    // },
    // async isValidSolanaAddress(address) {
    //   try {
    //     let key = new PublicKey(address)
    //     const connection = new Connection(this.$SOLANA_NETWORK)
    //     const accountInfo = await connection.getAccountInfo(key)
    //     return accountInfo !== null
    //   } catch (error) {
    //     return false
    //   }
    // },
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
    border-radius: .3rem;
    outline: 0;
}

.modal-dialog-centered-1 {
    display: flex;
    align-items: center;
    min-height: calc(100% - 1rem);
}

</style>