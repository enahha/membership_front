<template>
  <q-dialog v-model="ReservationDetailModal" persistent>
    <q-card style="display: flex; justify-content: center; width: 450px !important; min-width: 500px; height: auto;">
      <!-- 팬텀지갑주소 입력 -->
      <div class="" id="airdrop_apply" style="width: 100%;">
        <div class="">
          <div class="">

            <div class="modal_body" style="background-color: #27272e;">
              <!-- <h4>Connet to<br> Punky Kongz</h4> -->
              <button type="button" @click="close" class="close" data-dismiss="modal"><i class="xi-close-thin"></i></button>
              <div>
                <ul style="display: contents;">
                  <li class="center">
             
                  </li>
                  <li class="center">
             
                  </li>
                  <li class="center">
             
                  </li>
                  <li class="center">
             
                  </li>
                </ul>
                <div class="apply_btn mt40" style="">
                  <btn @click="close" class="btn btn-close" data-toggle="modal">닫기</btn>&nbsp;&nbsp;
                  <btn @click="isCancel = true" class="btn btn-cancel" data-toggle="modal">예약 취소</btn>&nbsp;&nbsp;
                  <btn @click="close" class="btn" data-toggle="modal">예약 확정</btn>
                </div>
                <br>
                <br />

              </div>
            </div>

          </div>
        </div>
      </div>
    </q-card>
  </q-dialog>

  <q-dialog v-model="isCancel" persistent>
    <q-card class="q-pa-md" style="width: 300px; text-align: center; background-color: aliceblue !important;">
      <div class="text-h6 text-bold">예약 취소</div>
      <hr>
      <div class="q-mt-sm">예약을 정말 취소하시겠습니까?</div>
      <q-card-actions align="center" class="q-mt-md">
        <q-btn push label="취소" class="items-center justify-center" style="background-color: gray;" @click="isCancel = false" />
        <q-btn push label="확인" class="items-center justify-center" style="background-color: red;" @click="close" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { required, requiredNumber, minLength, maxLength, minValue, maxValue} from 'src/validation.js';
import { Connection, PublicKey } from "@solana/web3.js";

export default {
  data () {
    return {
      isCancel: true,
      ReservationDetailModal: true,
      solanaWalletAddress: '',
      isinvalid: false,
    }
  },
  methods: {
    async show() {
      this.ReservationDetailModal = true
    },
    close() {
      this.ReservationDetailModal = false
    },
    async connectWallet(walletType) {
      this.$emit('callback-applyConnectWallet', walletType)

      this.close()
    },
  }
}
</script>

<style scoped>
.modal-contant {
  padding: 50px 0;
  align-items: center;
}

.close {
  font-size: 20px;
  color: aliceblue;
}

.apply_btn {
  display: flex;
  justify-content: space-around;
  padding: 12px 20px;
}

.center {
  display: flex;
  justify-content: center;
}

.btn {
  background-color: #7a38d0;
  color: aliceblue;
  width: 225px;
  padding: 10px 5px;
}

.btn-cancel {
  background-color: #d03838;
  color: aliceblue;
}

.btn-close{
  background-color: #111111;
  color: aliceblue;
  /* border: solid 1px aliceblue; */
}
</style>