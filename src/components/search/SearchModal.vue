<template>
    <q-dialog v-model="SearchModal" persistent>
      <q-card style="width: 900px !important; height: auto; max-width: 850px !important">
        <!-- 에어드랍 확인 -->
        <div class="" id="airdrop_search">
          <div class="">
          <div class="">

            <div class="modal_body">
              <button type="button" @click="close" class="modal_close" data-dismiss="modal"><i class="xi-close-thin"></i></button>
              <div class="item" :class="{'complete': isAirdropCompleted}">
                <div class="nft_box">
                  <!-- <p class="thumb"><img src="https://i.seadn.io/gcs/files/3c48ee39ab14a2d3fd52f0ba2994079b.png?auto=format&dpr=1&w=1000" alt=""></p> -->
                  <p class="thumb"><img :src="`https://eth-kongz.by-syl.com/images/${keyword}.png`" alt=""></p>
                  <p class="name">Kongz#{{ keyword }}</p>
                </div>
              </div>
              <div v-if="isAirdropCompleted" class="desc">
                PUNKY KONGZ<br /><span>에어드랍 신청이 완료</span>된 콩즈 입니다.
                <!-- 에어드랍이 아직 완료되지 않은 콩즈 입니다. -->
              </div>
              <div v-else class="desc">
                <!-- PUNKY KONGZ <span>에어드랍이 완료</span>된 콩즈 입니다. -->
                에어드랍 신청이<br />아직 완료되지 않은 콩즈 입니다.
              </div>
              <div>
                <button @click="close" class="btn btn-holder s"  data-dismiss="modal">확인</button>
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
        SearchModal: false,
        keyword: '',
        isAirdropCompleted: false,
        itemVo: {
            reg_id: '',
            reg_time: '',
            status: '',
            old_project_id: '',
            old_wallet_address: '',
            old_wallet_type: '',
            old_nft_contract: '',
            old_nft_id: '',
            old_nft_name: '',
            old_nft_image: '',
            new_wallet_address: '',
            new_nft_contract: '',
            new_nft_id: '',
            new_mint_account_key: '',
            new_token_account_key: '',
            new_metadata_account_key: '',
            new_master_edition_account_key: ''
        }
    }
},
methods: {
    async show() {
      this.SearchModal = true

      console.log(this.itemVo)
      this.isAirdropCompleted = true
      if(this.itemVo.reg_id == '' || this.itemVo.reg_id == null) {
          this.isAirdropCompleted = false
      }
      console.log(this.isAirdropCompleted)
    },
    close() {
      this.isAirdropCompleted = false
      this.SearchModal = false
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
    border-radius: .3rem;
    outline: 0;
}

.modal-dialog-centered-1 {
    display: flex;
    align-items: center;
    min-height: calc(100% - 1rem);
}

</style>
      