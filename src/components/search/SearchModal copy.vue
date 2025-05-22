<template>
    <q-dialog v-model="SearchModal" persistent>
      <q-card>
        <q-card-section>
          <div class="modal-header">
            <h3>Airdrop 신청 상태</h3>
          </div>
        </q-card-section>
  
        <q-card-section>
          <div class="modal-body">
            <img :src="`https://eth-kongz.by-syl.com/images/${keyword}.png`" alt="NFT Image" class="nft-image" style="width: 200px; height: 200px;"/>
            <div class="nft-info">
              <h3>Kongz#{{ keyword }}</h3>
              <p class="status" :class="{'completed': isAirdropCompleted}">
                {{ isAirdropCompleted ? '에어드랍 신청 완료' : '에어드랍 신청 가능' }}
              </p>
            </div>
          </div>
        </q-card-section>
  
        <q-card-actions align="right">
          <q-btn flat label="확인" color="primary" @click="close" />
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
        SearchModal: false,
        keyword: '',
        isAirdropCompleted: '',
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
        this.isAirdropCompleted =true
        if(this.itemVo.reg_id == '') {
            this.isAirdropCompleted = false
        }
    },
    close() {
        this.SearchModal = false
    },
}
}
</script>

<style scoped>
</style>
      