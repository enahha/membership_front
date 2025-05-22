<template>
  <!-- <q-dialog v-model="NotiModal">
    <q-card style="width: 100% !important; height: auto; max-width: 600px !important">
      <div class="" id="airdrop_search">
        <div class="modal_body">
          <button type="button" @click="close" class="modal_close" data-dismiss="modal"><i class="xi-close-thin"></i></button>
          <div class="desc">
			<div v-html="message"></div>
          </div>
          <div class="desc">
            <button class="btn btn-purple w240" @click="close">{{ $t('ok') }}</button>
          </div>
        </div>
      </div>
    </q-card>
  </q-dialog> -->

    <q-dialog v-model="NotiModal">
		<q-card class="bg-white" style="width: 250px; padding: 10px;">
			<div class="modal inner modal-style1" style="display: block !important;">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content">
						<div class="modal-body">
							<h3 class="modal_title" style="font-size: 2.5rem !important;" v-html="message"></h3>
							<div class="modal_btn_group">
								<a @click.prevent="close" v-close-popup class="btn" data-dismiss="modal" data-toggle="modal" data-target="#pop_reservation_cancel2">{{ $t('ok') }}</a>
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
      NotiModal: false,
      message: '',
    }
  },
  methods: {
    async show() {
      this.NotiModal = true
    },
    close() {
      this.NotiModal = false
    },
  }
}
</script>

<style scoped>
#airdrop_search .desc{
	font-size:2.3rem;
	color:#fff;
	font-weight:500;
	text-align:Center;
	padding:4rem 0;
}
#airdrop_search .desc span{
	color:#8c57f5;
}
#airdrop_search .item.complete .nft_box .thumb::before{
	display:none;
}
#airdrop_search .item.complete .nft_box .thumb::after{
	padding-top:30%;
}
#main_container .sec02 .kongz_list ul li.complete .nft_box .thumb::before,
#airdrop_search .item.complete .nft_box .thumb::before{
	content:"";
	position:absolute;
	left:0;
	top:0;
	width:100%;
	height:100%;
	background:Rgba(0,0,0,.7);
	z-index:10;
}
#main_container .sec02 .kongz_list ul li.complete .nft_box .thumb::after,
#airdrop_search .item.complete .nft_box .thumb::after{
	content:"";
	position:absolute;
	right:2rem;
	bottom:2rem;
	/* background: url('/images/airdrop_complete.png') no-repeat center center / cover; */
	width:45%;
	padding-top:31.3%;
	z-index:2;
}
.modal_body{
	border:2px solid #6351f2;
	position:relative;
	border-radius:3rem;
	padding:10rem 6rem;
	background:#242330;
}
.modal_body .modal_close{
	position:absolute;
	right:1.5rem;
	top:1.6rem;
	background:none;
	color:#fff;
	font-size:5rem;
	border:none;
}
.modal_body .item{
	max-width:35rem;
	margin:0 auto;
}
</style>