<template>
<div class="page_main">
	<div id="Wrap">

	<!-- 본문 시작 -->
	<main role="main">
	<!-- main_container -->
	<div id="sub_container" class="membership_wrap membership_reservation">
		
		<section class="container">
			<h3>RESERVATION <small>Discover the special benefits offered by Punky Kongz Membership.</small></h3>

			<form action="membership_reservation2.html">

				<!-- 예약자 정보 -->
				<div class="form_box">
					<h4>Reservation Information <span>Required Fields</span></h4>
					<ul>
						<li>
							<strong>Reserver</strong>
							<div class="form_group">
								<input type="text" class="form-control" v-model="name" name="" placeholder="Please enter your name."/>
							</div>
						</li>
						<li>
							<strong>Contact</strong>
							<div class="form_group tel_group">
								<!-- <select class="form-control" name="" id="" v-model="telPrefix">
									<option value="010" selected>010</option>
									<option value="011">011</option>
								</select> -->
								<input type="text" class="form-control" v-model="tel" name="" placeholder="Enter your phone number (no hyphens)." />
							</div>
						</li>
						<li>
							<strong>Email</strong>
							<div class="form_group">
								<input type="text" class="form-control" v-model="email" name="" placeholder="Please enter your email." />
							</div>
						</li>
						<li>
							<strong>Card Type</strong>
							<div class="form_group">
								<select name="" id="" class="form-control" v-model="cardType">
									<option value="Visa" selected>Visa</option>
									<option value="Master">Master</option>
									<option value="American Express">American Express</option>
									<option value="Diners Club">Diners Club</option>
									<option value="JCB">JCB</option>
									<option value="etc.">etc.</option>
								</select>
							</div>
						</li>
						<li>
							<strong>Card Number</strong>
							<div class="form_group card_num">
								<div><input type="text" class="form-control" v-model="cardNumber_1" name="" maxlength="4" placeholder="1234"/></div>
								<p class="bar">-</p>
								<div><input type="text" class="form-control" v-model="cardNumber_2" name="" maxlength="4" placeholder="1234"/></div>
								<p class="bar">-</p>
								<div><input type="text" class="form-control" v-model="cardNumber_3" name="" maxlength="4" placeholder="1234"/></div>
								<p class="bar">-</p>
								<div><input type="text" class="form-control" v-model="cardNumber_4" name="" maxlength="7" placeholder="1234"/></div>
							</div>
						</li>
						<li>
							<strong>Expiration Date</strong>
							<div class="form_group card_period">
								<div><input type="text" class="form-control" v-model="cardExpiryMonth" name="" maxlength="2" placeholder="MM"/></div>
								<p class="bar">/</p>
								<div><input type="text" class="form-control" v-model="cardExpiryYear" name="" maxlength="2" placeholder="YY"/></div>
							</div>
						</li>
						<li>
							<strong>Individual/Corporate</strong>
							<div class="form_group check_group">
								<p class="radio_style">
									<input type="radio" value="개인" name="credit_card_type" id="credit_card_type1" v-model="customerType" checked />
									<label for="credit_card_type1">Individual</label>
								</p>
								<p class="radio_style">
									<input type="radio" value="법인" name="credit_card_type" id="credit_card_type2" v-model="customerType" />
									<label for="credit_card_type2">Corporate</label>
								</p>
							</div>
						</li>
					</ul>
				</div>
				<!-- //예약자정보 -->

				<!-- 예약 정보 -->
				<div class="form_box mt80">
					<h4>Reservation Details <span>Required Fields</span></h4>
					<!-- <ul>
						<li>
							<strong>Reservation Service</strong>
							<div class="form_group check_group">
								<p class="radio_style">
									<input type="radio" name="service_type" id="service_type1" v-model="service_room" checked />
									<label for="service_type1">Room and Restaurant</label>
								</p>
								<p class="radio_style">
									<input type="radio" name="service_type" id="service_type2" v-model="service_restaurant" />
									<label for="service_type2">Restaurant</label>
								</p>
							</div>
						</li>
					</ul> -->
					<ul class="mt30 service_room_form" v-if="serviceType === 'room'">
						<li>
							<strong>Room Type</strong>
							<div class="form_group">
								<select class="form-control" name="" id="" v-model="roomType">
									<option value="" disabled selected>Please select your desired room.</option>
									<option value="Fairmont Deluxe Room">Fairmont Deluxe Room</option>
									<option value="Fairmont Room">Fairmont Room</option>
									<option value="Fairmont Gold Room">Fairmont Gold Room</option>
									<option value="Signature Suite">Signature Suite</option>
								</select>
								<div class="info mt15">
									<p>
										Blackout dates : 
										<br /><strong class="fc_main2 text_underline">Excluding Yeouido Fireworks Festival dates and December 24th, 25th, 30th, and 31st.</strong>
									</p>
								</div>
							</div>
						</li>
						<li>
							<strong>Reservation Date</strong>
							<div class="form_group">
								<!-- <div class="datepicker">
									<input type="text" placeholder="Check In" class="form-control" />
								</div>
								<p class="bar">-</p>
								<div class="datepicker">
									<input type="text" placeholder="Check Out" class="form-control" />
								</div> -->
								<div class="date_group">
									<div class="datepicker">
										<Datepicker 
											v-model="checkInDate" 
											:locale="datepickerLocale"
											:format="'YYYY-MM-DD'" 
											:lowerLimit="today"
											placeholder="Check In"
											class="form-control"
										/>
									</div>
									<p class="bar">-</p>
									<div class="datepicker">
										<Datepicker 
											v-model="checkOutDate" 
											:locale="datepickerLocale"
											:format="'YYYY-MM-DD'" 
											:lowerLimit="adjustedCheckInDate || today"
											placeholder="Check Out"
											class="form-control"
										/>
									</div>
								</div>
								<div class="info mt15 fc_gray">
									<p>
										If the reservation date is the day immediately following the reservation request, it may not be possible to proceed with the booking.
										<br />We kindly ask you to select a reservation date with sufficient lead time.
									</p>
								</div>
							</div>
						</li>

						<li>
							<strong class="f">Guests</strong>
							<div class="form_group">
								<div class="flex1">
									<select name="" id="" class="form-control" v-model="adults">
										<!-- <option value="0" selected>Adults</option> -->
										<option value="1" selected>1 Adult</option>
										<option value="2">2 Adults</option>
										<option value="3">3 Adults</option>
									</select>
									<select name="" id="" class="form-control" v-model="children">
										<option value="0" selected>Children</option>
										<option value="1">1 Child</option>
										<option value="2">2 Children</option>
										<option value="3">3 Children</option>
									</select>
									<select name="" id="" class="form-control" v-model="infants">
										<option value="0" selected>Infants</option>
										<option value="1">1 infant(free)</option>
										<option value="2">2 infants(free)</option>
									</select>
								</div>
								<div class="info mt15 fc_gray">
									<p>Up to 4 guests allowed<br /> (3 adults, or 2 adults + 2 children, or 1 adult + 3 children)</p>
								</div>
								<div class="info fc_gray">
									<p>Children: Refers to individuals under the age of 11, and one child per stay is free of charge.</p>
								</div>
							</div>
							
						</li>

						<li>
							<strong class="f">Additional Breakfast</strong>
							<div class="form_group flex1">
								<select name="" id="" class="form-control" v-model="breakfastAdults">
									<option value="0" selected>Adults</option>
									<option value="1">1 Adult</option>
									<option value="2">2 Adults</option>
									<option value="3">3 Adults</option>
								</select>
								<select name="" id="" class="form-control" v-model="breakfastChildren">
									<option value="0" selected>Children</option>
									<option value="1">1 Child</option>
									<option value="2">2 Children</option>
									<option value="3">3 Children</option>
								</select>
							</div>
						</li>

						<li>
							<strong class="f">Gold Lounge Access</strong>
							<div class="form_group flex1">
								<select name="" id="" class="form-control" v-model="goldLoungeAdults">
									<option value="0" selected>Adults</option>
									<option value="1">1 Adult</option>
									<option value="2">2 Adults</option>
									<option value="3">3 Adults</option>
								</select>
								<select name="" id="" class="form-control" v-model="goldLoungeChildren">
									<option value="0" selected>Children</option>
									<option value="1">1 Child</option>
									<option value="2">2 Children</option>
									<option value="3">3 Children</option>
								</select>
							</div>
						</li>

						<li>
							<strong class="f">Extra Bed for Stay</strong>
							<div class="form_group flex1">
								<select name="" id="" class="form-control" v-model="extraBed">
									<option value="0" selected>Yes</option>
									<option value="1">No</option>
								</select>
							</div>
						</li>
					</ul>
					<ul class="mt30">
						<li v-if="serviceType === 'restaurant'">
							<strong>Reservation date</strong>
							<div class="form_group date_group">
								<div class="datepicker">
									<Datepicker 
										v-model="checkInDate" 
										:locale="datepickerLocale"
										:format="'YYYY-MM-DD'" 
										:lowerLimit="today"
										placeholder="Check In"
										class="form-control"
									/>
								</div>
							</div>
						</li>
						<li>
							<strong class="f">Restaurant</strong>
							<div class="form_group">
								<p class="checkbox_style pt10">
									<input type="checkbox" value="스펙트럼" name="restaurant_reserv1" id="restaurant_reserv1" v-model="s_restaurant"/>
									<label for="restaurant_reserv1">Spectrum Restaurant Reservation</label>
								</p>
								<p class="pb20 mt10"><strong class="fc_main2 text_underline">20% Discount </strong>for Genesis, Punky Kongz, Alya, and Fitri Holders </p>
								<div class="flex1">
									<select name="" id="" class="form-control" v-model="s_restaurantAdults">
										<option value="0" selected>Adults</option>
										<option value="1">1 Adult</option>
										<option value="2">2 Adults</option>
										<option value="3">3 Adults</option>
									</select>
									<select name="" id="" class="form-control" v-model="s_restaurantAdultsUsageCount">
										<option value="0" selected>Usage</option>
										<option value="1">Usage 1</option>
										<option value="2">Usage 2</option>
										<option value="3">Usage 3</option>
										<option value="4">Usage 4</option>
									</select>
								</div>
								<div class="flex1 mt30">
									<select name="" id="" class="form-control" v-model="s_restaurantChildren">
										<option value="0" selected>Children</option>
										<option value="1">1 Child</option>
										<option value="2">2 Children</option>
										<option value="3">3 Children</option>
									</select>
									<select name="" id="" class="form-control" v-model="s_restaurantChildrenUsageCount">
										<option value="0" selected>Usage</option>
										<option value="1">Usage 1</option>
										<option value="2">Usage 2</option>
										<option value="3">Usage 3</option>
										<option value="4">Usage 4</option>
									</select>
								</div>

								<p class="checkbox_style mt40">
									<input type="checkbox" value="마리포사" name="restaurant_reserv2" id="restaurant_reserv2" v-model="m_restaurant"/>
									<label for="restaurant_reserv2">Mariposa Restaurant Reservation</label>
								</p>
								<p class="pb20 mt10"> <strong class="fc_main2 text_underline">10% Discount</strong> for Alya and Fitri Holders only</p>
								<div class="flex1">
									<select name="" id="" class="form-control" v-model="m_restaurantAdults">
										<option value="0" selected>Adults</option>
										<option value="1">1 Adult</option>
										<option value="2">2 Adults</option>
										<option value="3">3 Adults</option>
									</select>
									<select name="" id="" class="form-control" v-model="m_restaurantAdultsUsageCount">
										<option value="0" selected>Usage</option>
										<option value="1">Usage 1</option>
										<option value="2">Usage 2</option>
										<option value="3">Usage 3</option>
										<option value="4">Usage 4</option>
									</select>
								</div>
								<div class="flex1 mt30">
									<select name="" id="" class="form-control" v-model="m_restaurantChildren">
										<option value="0" selected>Children</option>
										<option value="1">1 Child</option>
										<option value="2">2 Children</option>
										<option value="3">3 Children</option>
									</select>
									<select name="" id="" class="form-control" v-model="m_restaurantChildrenUsageCount">
										<option value="0" selected>Usage</option>
										<option value="1">Usage 1</option>
										<option value="2">Usage 2</option>
										<option value="3">Usage 3</option>
										<option value="4">Usage 4</option>
									</select>
								</div>
							</div>
						</li>
					</ul>
					<div class="notice_box mt40">
						<i class="xi-error"></i>In December each year, discounted rates do not apply for additional guests on accommodation, breakfast, Gold Lounge, extra bed, or restaurant fees.
					</div>
				</div>
				<!-- //예약정보 -->

				<!-- 약관 동의 -->
				<div class="form_box mt80">
					<h4>Terms and Conditions</h4>
					<div class="agree_box">
						<strong>Fairmont Ambassador Seoul Hotel NFT Reservation System</strong>
						<br />
						<br />The personal information provided for the reservation at Fairmont Ambassador Seoul Hotel will be collected and used for the smooth processing of your reservation and the provision of hotel services. Fairmont Hotel manages the collected information in accordance with relevant laws to protect your personal information as described below.
						<br />
						<br />1. Personal Information Collected
						<br />• Name and contact information (phone number)
						<br />• Desired reservation date and priority
						<br />• Wallet connection information (Solana wallet)
						<br />
						<br />2. Purpose of Collecting and Using Personal Information
						<br />• To provide and manage reservation services through the NFT reservation system
						<br />• To send notifications about reservation confirmations and changes
						<br />• To respond to customer inquiries and provide support services
						<br />• To coordinate reservation schedules and assist customers
						<br />
						<br />3. Retention and Use Period of Personal Information
						<br />• Personal information is collected and used for the purpose of providing reservation services.
						<br />• After the reservation is completed, the information will be destroyed within 30 days. However, if retention is required by law, the information will be stored in accordance with relevant regulations.
						<br />
						<br />4. Provision of Personal Information to Third Parties
						<br />• Personal information will not be provided to third parties for purposes other than those specified in this agreement.
						<br />• If cooperation with partnered external entities is necessary for service operation, prior notice and consent will be obtained.
						<br />
						<br />5. Procedures and Methods for Destroying Personal Information
						<br />• Personal information retained beyond the designated period after the service ends will be promptly and securely deleted.
						<br />• Information stored in electronic files will be permanently destroyed using an irrecoverable method.
						<br />
						<br />6. User Rights and How to Exercise Them
						<br />• You have the right to request the review, correction, or deletion of your personal information.
						<br />• If you have any complaints regarding the processing of personal information, please contact our customer service center.
					</div>
					<p class="fsr1_4 fc_gray mt10">You have fully understood the terms and conditions outlined herein and agree to the collection and use of your personal information for the purposes stated above. If you do not agree, access to the reservation service may be restricted.</p>
					<p class="checkbox_style mt20">
						<input type="checkbox" name="privacy_agree" id="privacy_agree" value="true" v-model="privacyAgree"/>
						<label for="privacy_agree" class="justify-content-end">Agree</label>
					</p>
				</div>
				<!-- // 약관 동의 -->

				<!-- 예약 및 결제 안내 -->
				<div class="form_box mt80">
					<h4>Reservation and Payment Information</h4>
					<div class="dp-flex fsr1_7 fsr1_6-md">
						<img src="_img/membership/icon_info.png" class="mr15" style="max-width:5.4rem;" alt="" />
						The final confirmation and payment details will be reviewed by the Punkyvism CS team after the reservation request and will be separately notified.
					</div>
					<div class="notice_box mt40">
						<i class="xi-error"></i>Please note that the reservation and payment information may change and be adjusted in advance based on the situation at Punkyvism and Fairmont.
					</div>
				</div>
				<!-- // 예약 및 결제 안내 -->

				<!-- 예약 취소 및 환뷸규정 -->
				<div class="form_box mt80">
					<h4>Cancellation and Refund Policy</h4>
					<div class="notice_box mt40 room">
						<i class="xi-error"></i>
						<div>
							<strong class="dp-block mb10">Accommodation Cancellation and Refund Policy</strong>
							Up to 16:00 the day before the check-in date: 100% refund
							<br /> After 16:00 the day before check-in or on the check-in day, or in the case of a No-show: Non-refundable
							<br />In the case of consecutive nights, the accommodation fee for the canceled day must be paid.
							<p class="mt15 fc_gray">Example: For a 2-night stay, if canceled on the check-in day, the accommodation fee for one night must be paid.</p>
						</div>
					</div>

					<div class="notice_box mt40 restaurant">
						<i class="xi-error"></i>
						<div>
							<strong class="dp-block mb15">레스토랑 취소 및 환불 규정</strong>
							예약일 기준 1일 전 16시까지 : 100% 환불
							<br />예약일 기준 1일 전 16시이후~당일 및 No-show : 환불 불가
						</div>
					</div>
				</div>
				<!-- // 예약 취소 및 환뷸규정 -->

				
			<div class="btn_group mt40">
				<a onclick="history.go('-1')" class="btn btn-purple-o w240">Back</a>
				<button class="btn btn-purple w240" @click.prevent="confirmReservation">BOOK NOW</button>
			</div>

			</form>
			
		</section>

	</div>
	<!-- //main_container -->
	</main>
	<!-- //본문 끝 -->
		
	</div>
</div>

	<NotiModal ref="refNotiModal"/>

	<!-- 예약 확인 모달 -->
	<q-dialog v-model="confirmReservationModal">
		<q-card class="bg-white" style="width: 250px; padding: 10px;">
			<div class="modal inner modal-style1" style="display: block !important;">
			<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-body">
				<!-- <p class="modal_icon"><img src="_img/comm/modal_icon_warning.png" alt="!" /></p> -->
				<h3 class="modal_title" style="font-size: 2.5rem !important;">Would you like to proceed with the reservation?</h3>
				<!-- <div class="modal_cont">
					한 번 취소하신 예약은 다시 진행할 수 없으니,
					<br />신중하게 결정해 주시기 바랍니다.
				</div> -->
				<div class="modal_btn_group">
					<a class="btn btn-black-o" data-dismiss="modal" v-close-popup>No</a>
					<a @click.prevent="insertReservation()" v-close-popup class="btn" data-dismiss="modal" data-toggle="modal" data-target="#pop_reservation_cancel2">Yes</a>
				</div>
				</div>
			</div>
			</div>
		</div>
		</q-card>
  </q-dialog>
	<!-- <q-dialog v-model="confirmReservationModal">
		<q-card class="bg-white" style="width: 250px; padding: 10px;">
			<q-card-section class="row items-center" style="">
			<q-icon name="info" color="red" size="md" />
			<span class="q-ml-sm text-black">Would you like to proceed with the reservation?</span>
			</q-card-section>
			<q-separator />
			<q-card-actions align="center">
			<q-btn  style="width: 45%;" label="No" color="grey" v-close-popup />
			<q-btn style="width: 45%;" label="Yes" color="red" v-close-popup @click="insertReservation" />
			</q-card-actions>
		</q-card>
	</q-dialog> -->

</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import wait from 'waait'
import { QSpinnerGears } from 'quasar'

import $ from 'jquery';
import Datepicker from 'vue3-datepicker';
import { ko } from 'date-fns/locale';


export default defineComponent({
name: 'PageIndex',
data () {
return {
		smallSize: false,
		privacyAgree: false,
		ntfType: '',
		nftTypeTemp: '',
		locale: '',

		// 예약자 정보
		name: '',
		tel: '',
		email: '',
		cardType: 'Visa',
		cardNumber_1: '',
		cardNumber_2: '',
		cardNumber_3: '',
		cardNumber_4: '',
		cardExpiryMonth: '',
		cardExpiryYear: '',
		customerType: '개인', // 개인 or 법인
		roomType: '',
		
		// name: '안영대',
		// tel: '01049491515',
		// // email: 'contact@starinc.io',
		// email: 'ayd1029@gmail.com',
		// cardType: 'Visa',
		// cardNumber_1: '1234',
		// cardNumber_2: '5678',
		// cardNumber_3: '9012',
		// cardNumber_4: '3456',
		// cardExpiryMonth: '1',
		// cardExpiryYear: '24',
		// customerType: '개인', // 개인 or 법인
		// roomType: 'Fairmont Deluxe Room',


		// 예약 정보
		serviceType: 'room',
		checkInDate: '',
		checkOutDate: '',
		minCheckOutDate: null,
		today: new Date(),
		datepickerLocale: ko,
		adults: 1,
		children: 0,
		infants: 0,
		extraBed: 0,
		breakfastAdults: 0,
		breakfastChildren: 0,
		goldLoungeAdults: 0,
		goldLoungeChildren: 0,
		m_restaurant: false,
		m_restaurantAdults: 0,
		m_restaurantAdultsUsageCount: 0,
		m_restaurantChildren: 0,
		m_restaurantChildrenUsageCount: 0,
		s_restaurant: false,
		s_restaurantAdults: 0,
		s_restaurantAdultsUsageCount: 0,
		s_restaurantChildren: 0,
		s_restaurantChildrenUsageCount: 0,

		confirmReservationModal: false, // 예약 확인 모달
	}
},
components: {
	Datepicker
},
watch: {
	// getWalletAddress(newVal, oldVal) {
	//   if (newVal && newVal !== oldVal) {
	//     this.getNftList();
	//   }
	// },
},
computed: {
	getWalletType () {
		return this.$store.getters.getWalletType
	},
	getWalletAddress () {
		return this.$store.getters.getWalletAddress
	},
	getWalletAddressShort () {
		const address = this.$store.getters.getWalletAddress
		if (address) {
		return address.substr(0, 7) + '...' + address.substr(address.length - 5, 5)
		} else {
		return address
		}
	},
	getWalletAddressLast () {
		const address = this.$store.getters.getWalletAddress
		if (address) {
		return '...' + address.substr(address.length - 4, address.legnth)
		} else {
		return address
		}
	},
	getUuid () {
		return this.$store.getters.getUuid
	},
	getAlya() {
		return this.$store.getters.getAlya
	},
	getFitri() {
		return this.$store.getters.getFitri
	},
	getPunky() {
		return this.$store.getters.getPunkykongz
	},
	getGenesis() {
		return this.$store.getters.getGenesis
	},

	// checkInDate + 1일
	adjustedCheckInDate() {
		if (!this.checkInDate) return null
		const date = new Date(this.checkInDate)
		date.setDate(date.getDate() + 1)
		return date
	},
},
created: function () {
	// 자동로그인 이슈로 쿠키를 세션으로 변경
	const walletAddress = sessionStorage.getItem('WALLETADDRESS')
	const walletType = sessionStorage.getItem('WALLETTYPE')
	if (walletAddress && walletType) {
		this.$store.dispatch('setWalletType', walletType)
		this.$store.dispatch('setWalletAddress', walletAddress)
	}

	const alya = sessionStorage.getItem('ALYA')
	const fitri = sessionStorage.getItem('FITRI')
	const punkykongz = sessionStorage.getItem('PUNKYKONGZ')
	const genesis = sessionStorage.getItem('GENISES')
	// ALYA 상태 처리
	if (alya && alya === "true") {
		this.$store.dispatch('setAlya', true)
	} else {
		this.$store.dispatch('setAlya', false)
	}

	// FITRI 상태 처리
	if (fitri && fitri === "true") {
		this.$store.dispatch('setFitri', true)
	} else {
		this.$store.dispatch('setFitri', false)
	}

	// PUNKYKONGZ 상태 처리
	if (punkykongz && punkykongz === "true") {
		this.$store.dispatch('setPunkyKongz', true)
	} else {
		this.$store.dispatch('setPunkyKongz', false)
	}

	// GENESIS 상태 처리
	if (genesis && genesis === "true") {
		this.$store.dispatch('setGenesis', true)
	} else {
		this.$store.dispatch('setGenesis', false)
	}

	// 키 설정
	this.ntfType = this.$route.query.type
	this.serviceType = this.$route.query.r

	// 화면 리사이즈 이벤트 핸들러
	window.addEventListener("resize", this.resizeEventHandler)
	if (document.body.offsetWidth < 1024) {
		this.smallSize = true
	}
},
destroy: function () {
	window.removeEventListener("resize", this.resizeEventHandler)
},
mounted: function () {
	// "Go to Top" 버튼 클릭 시 페이지 상단으로 이동
	document.querySelector('#gotop').addEventListener('click', (event) => {
		event.preventDefault(); // 기본 동작(페이지 이동) 방지
		window.scrollTo({ top: 0, behavior: 'smooth' }); // 부드럽게 스크롤
	});

	this.$nextTick(() => {
	});
},
setup () {
},
methods: {
    // 문자열을 UTC 형식으로 변환하는 함수
    convertToUTCPlus9(dateString) {
      // 입력된 문자열을 Date 객체로 변환
      const date = new Date(dateString)

      // UTC로 변환한 시간에 9시간 더하기
      date.setUTCHours(date.getUTCHours() + 9)

      // 변환된 시간을 원하는 형식으로 반환
      const utcYear = date.getUTCFullYear()
      const utcMonth = String(date.getUTCMonth() + 1).padStart(2, '0') // 월은 0부터 시작하므로 +1
      const utcDate = String(date.getUTCDate()).padStart(2, '0')
      const utcHours = String(date.getUTCHours()).padStart(2, '0')
      const utcMinutes = String(date.getUTCMinutes()).padStart(2, '0')
      const utcSeconds = String(date.getUTCSeconds()).padStart(2, '0')

      return `${utcYear}-${utcMonth}-${utcDate} ${utcHours}:${utcMinutes}:${utcSeconds}`
    },
	// 노티 모달
	noti(message) {
		this.$refs.refNotiModal.message = message
		this.$refs.refNotiModal.show()
	},
	extractLocale() {
		const currentPath = this.$route.path
		const match = currentPath.match(/^\/(kor|eng|idn)/)
		return match ? match[1] : null
	},
	confirmReservation() {
		// nft 존재여부 확인
		// ntfType이 Genesis, Punky Kongz일 때
		if (this.ntfType === 'PG') {
			// console.log(this.getGenesis)
			// console.log(this.getPunky)
			if (!this.getPunky && !this.getGenesis) {
				this.noti('NFT Type 이 맞지 않습니다.')
				return
			}

			this.nftTypeTemp = 'Genesis, Punky Kongz'
		}
		// ntfType이 Alya, Fitri일 때
		if (this.ntfType === 'AF') {
			if (!this.getAlya && !this.getFitri) {
				this.noti('NFT Type 이 맞지 않습니다.')
				return
			}

			this.nftTypeTemp = 'Alya, Fitri'
		}

		// validate
		if (!this.validate()) {
			// this.noti('입력항목을 확인해주세요.')
			return
		}

		// locale 설정
		this.locale = this.extractLocale()

		this.confirmReservationModal = true
	},
	// 예약 신청
	async insertReservation() {
		// 1. 등록 
		const params = {
			// 예약 상태 (대기 상태)
			status: this.$RESERVATION_STATUS_WAIT, // 예약 신청 (0)
			locale: this.locale,

			nft_type: this.nftTypeTemp,
			has_alya: this.getAlya ? 1 : 0,
			has_fitri: this.getFitri ? 1 : 0,
			has_punkykongz: this.getPunky ? 1 : 0,
			has_genesis: this.getGenesis ? 1 : 0,

			// 고객 정보
			name: this.name,
			wallet_address: this.getWalletAddress,
			wallet_type: this.getWalletType,
			tel_number: this.tel,
			email: this.email,

			// 카드 정보
			card_type: this.cardType,
			card_number: `${this.cardNumber_1}${this.cardNumber_2}${this.cardNumber_3}${this.cardNumber_4}`,
			card_expiry_month: this.cardExpiryMonth,
			card_expiry_year: this.cardExpiryYear,
			customer_type: this.customerType,

			// 예약 정보
			reservation_service: this.serviceType,
			room_type: this.roomType,
			check_in_date: this.convertToUTCPlus9(this.checkInDate), // 여기서 UTC+9로 변환
			check_out_date: this.convertToUTCPlus9(this.checkOutDate), // 여기서 UTC+9로 변환
			adults: this.serviceType == 'room' ? this.adults : 0,
			children: this.children,
			infants: this.infants,
			extrabed: this.extraBed,

			// 추가 서비스
			breakfast_adults: this.breakfastAdults,
			breakfast_children: this.breakfastChildren,
			gold_lounge_adults: this.goldLoungeAdults,
			gold_lounge_children: this.goldLoungeChildren,

			// 스펙트럼 레스토랑 정보
			s_restaurant: this.s_restaurant ? 1 : 0,
			s_restaurant_adults: this.s_restaurantAdults,
			s_restaurant_adults_usage_count: this.s_restaurantAdultsUsageCount,
			s_restaurant_children: this.s_restaurantChildren,
			s_restaurant_children_usage_count: this.s_restaurantChildrenUsageCount,

			// 마리포사 레스토랑 정보
			m_restaurant: this.m_restaurant ? 1 : 0,
			m_restaurant_adults: this.m_restaurantAdults,
			m_restaurant_adults_usage_count: this.m_restaurantAdultsUsageCount,
			m_restaurant_children: this.m_restaurantChildren,
			m_restaurant_children_usage_count: this.m_restaurantChildrenUsageCount,

			reg_id: this.getWalletAddress
		}
		// this.$q.loading.show() // 로딩 표시 시작
		this.$axios.post('/api/reservation/insertReservation', params)
			.then((result) => {
			// console.log(JSON.stringify(result.data))
			// this.$q.loading.hide() // 로딩 표시 종료
			if (result.data && result.data.resultCd === 'SUCCESS') {
				// console.log(result.data)
				// insert 성공 후 sendMail()
				this.sendMail()

				// 예약 접수 완료 화면으로
				this.$router.push('/eng/membership/reservation/completion')
			} else {
				this.noti(this.$t('register_failed'))
			}
			})
			.catch((err) => {
			this.$q.loading.hide() // 로딩 표시 종료
			console.log(err)
			this.noti(err)
			})
	},

	// send email (관리자에게 전송)
	sendMail() {
		// 숙박 or 숙박/레스토랑 or 레스토랑
		let serviceName = ''
		if (this.serviceType == 'room') {
			serviceName = '숙박'
		}
		if (this.m_restaurant || this.s_restaurant) {
			if (serviceName) {
				serviceName += '/'
			}
			serviceName += '레스토랑'
		}

		// 현재 시간 (한국 시간) 가져오기
		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			timeZone: 'Asia/Seoul',
		}
		const currentTimeKST = new Intl.DateTimeFormat('ko-KR', options).format(new Date())

		const title = `[PUNKVISM] ${this.name} 님의 예약 요청을 확인해주세요.`
		const contents = `
			<div style="border:5px solid #7936d3;padding:30px 20px;max-width:450px;text-align:center;margin:0;">
				<div style="border-bottom:2px solid #000;padding:0;padding-bottom:20px;color:#7936d3;font-size:24px;font-weight:800;text-align:center;margin:0;">Punkvism</div>
				<div style="padding:30px 0 20px 0; font-size:22px; text-align:center;margin:0;">${this.name}님의 <br /><strong>예약을 확인</strong>해주세요.</div>
				<div style="padding:0;margin:0;padding-bottom:40px;">
					<table style="padding:0;border-top:1px solid #000;width:100%;margin:0;">
						<tr>
							<th style="padding:10px;font-size:14px;border-bottom:1px solid #ddd;background:#f7f7f7;width:100px;">시간</th>
							<td style="border-bottom:1px solid #ddd;border-left:1px solid #ddd;padding:0;padding-left:10px;font-size:14px;text-align:left;">${currentTimeKST}</td>
						</tr>
						<tr>
							<th style="padding:10px;font-size:14px;border-bottom:1px solid #ddd;background:#f7f7f7;width:100px;">예약자 성함</th>
							<td style="border-bottom:1px solid #ddd;border-left:1px solid #ddd;padding:0;padding-left:10px;font-size:14px;text-align:left;">${this.name}</td>
						</tr>
					</table>
				</div>
				<div style="font-size:14px; text-align:center;padding:0;padding-bottom:30px;margin:0;">
					[${serviceName}] 이 예약되었습니다.
					<br />확인 후 승인해주시길 바랍니다.
				</div>
				<div style="border-top:2px solid #000;padding:30px 0 0 0;margin:0;">
					<p style="padding:0;font-size:13px;color:#555;text-decoration:undeline;margin:0;">*본 메일은 발신 전용 메일입니다.</p>
					<p style="padding:0;font-size:13px;color:#555;margin:0;margin-top:5px;">© 2024 Punkvism. all rights reserved.</p>
				</div>
			</div>
		`


		// console.log(title)
		// console.log(contents)

		const params = {
			subject: title,
			text: contents,
			email_from: this.$systemMailFrom,
			email_to: this.$systemMailTo,
		}
		this.$axios.post('/api/common/sendMail', params)
			.then((result) => {
				// console.log(result.data)
			})
			.catch((err) => {
				console.log(err)
			})
	},
	///////////////////////////////////////////////////////////////////////////
	// validation
	///////////////////////////////////////////////////////////////////////////
	validate() {
		let result = true
		if (this.name == null || this.name == '') {
			this.noti('Please enter the following item.<br><br>[ Name ]')
			return false
		}
		if (this.tel == null || this.tel == '') {
			this.noti('Please enter the following item.<br><br>[ Contact Number ]')
			return false
		}
		if (!/^\d+$/.test(this.tel)) {
			this.noti('Please enter only numbers for the contact number.')
			return false
		}
		if (this.email == null || this.email == '') {
			this.noti('Please enter the following item.<br><br>[ Email ]')
			return false
		}
		if (!/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/.test(this.email)) {
			this.noti('The email format is incorrect.')
			return false
		}

		// if (this.cardType == null || this.cardType == '') {
		// 	return false
		// }
		if (this.cardNumber_1 == null || this.cardNumber_1 == '') {
			this.noti('Please enter the following item.<br><br>[ Card Number ]')
			return false
		}
		if (this.cardNumber_2 == null || this.cardNumber_2 == '') {
			this.noti('Please enter the following item.<br><br>[ Card Number ]')
			return false
		}
		if (this.cardNumber_3 == null || this.cardNumber_3 == '') {
			this.noti('Please enter the following item.<br><br>[ Card Number ]')
			return false
		}
		if (this.cardNumber_4 == null || this.cardNumber_4 == '') {
			this.noti('Please enter the following item.<br><br>[ Card Number ]')
			return false
		}
		if (this.cardExpiryMonth == null || this.cardExpiryMonth == '') {
			this.noti('Please enter the following item.<br><br>[ Card Expiry - MM ]')
			return false
		}
		if (this.cardExpiryYear == null || this.cardExpiryYear == '') {
			this.noti('Please enter the following item.<br><br>[ Card Expiry - YY ]')
			return false
		}
		if (!this.validateExpirationDate()) {
			this.noti('Please enter a valid expiration date of the card.')
			return false
		}
		if (this.serviceType === 'room') {
			if (this.roomType == null || this.roomType == '') {
				this.noti('Please enter the following item.<br><br>[ Room Type ]')
				return false
			}
		}
		if (this.checkInDate == null || this.checkInDate == '') {
			this.noti('Please enter the following item.<br><br>[ Reservation Date - Check In ]')
			return false
		}
		if (this.serviceType === 'room') {
			if (this.checkOutDate == null || this.checkOutDate == '') {
				this.noti('Please enter the following item.<br><br>[ Reservation Date - Check Out ]')
				return false
			}
		}
		if (this.serviceType === 'restaurant') {
			if (!this.s_restaurant && !this.m_restaurant) {
				this.noti('레스토랑을 선택해주세요.')
				return false
			}
		}
		
		if (this.s_restaurant || this.m_restaurant) {
			if (!this.s_restaurant && !this.m_restaurant) {
				this.noti('Please select a restaurant.')
				return false
			}
			// 스펙트럼
			if (this.s_restaurant) {
				if (this.s_restaurantAdults + this.s_restaurantChildren == 0) {
					this.noti('Please select Spectrum restaurant users.')
					return false
				}
				if (this.s_restaurantAdultsUsageCount + this.s_restaurantChildrenUsageCount == 0) {
					this.noti('Please select the number of times Spectrum restaurant will be used.')
					return false
				}
				if (this.s_restaurantAdults > 0 && this.s_restaurantAdultsUsageCount == 0) {
					this.noti('Please select the number of times adults will use Spectrum restaurant.')
					return false
				}
				if (this.s_restaurantAdults == 0 && this.s_restaurantAdultsUsageCount > 0) {
					this.noti('Please select adults using Spectrum restaurant.')
					return false
				}
				if (this.s_restaurantChildren > 0 && this.s_restaurantChildrenUsageCount == 0) {
					this.noti('Please select the number of times children will use Spectrum restaurant.')
					return false
				}
				if (this.s_restaurantChildren == 0 && this.s_restaurantChildrenUsageCount > 0) {
					this.noti('Please select children using Spectrum restaurant.')
					return false
				}
			}
			// 마리포사
			if (this.m_restaurant) {
				if (this.m_restaurantAdults + this.m_restaurantChildren == 0) {
					this.noti('Please select Mariposa restaurant users.')
					return false
				}
				if (this.m_restaurantAdultsUsageCount + this.m_restaurantChildrenUsageCount == 0) {
					this.noti('Please select the number of times Mariposa restaurant will be used.')
					return false
				}
				if (this.m_restaurantAdults > 0 && this.m_restaurantAdultsUsageCount == 0) {
					this.noti('Please select the number of times adults will use Mariposa restaurant.')
					return false
				}
				if (this.m_restaurantAdults == 0 && this.m_restaurantAdultsUsageCount > 0) {
					this.noti('Please select adults using Mariposa restaurant.')
					return false
				}
				if (this.m_restaurantChildren > 0 && this.m_restaurantChildrenUsageCount == 0) {
					this.noti('Please select the number of times children will use Mariposa restaurant.')
					return false
				}
				if (this.m_restaurantChildren == 0 && this.m_restaurantChildrenUsageCount > 0) {
					this.noti('Please select children using Mariposa restaurant.')
					return false
				}
			}
		}

		// 약관동의
		if (!this.privacyAgree) {
			this.noti('Please agree to the terms and conditions.')
			return
		}
		return result
	},
	validateExpirationDate() {
		// 숫자만 입력
		this.cardExpiryMonth = this.cardExpiryMonth.replace(/\D/g, "")
		this.cardExpiryYear = this.cardExpiryYear.replace(/\D/g, "")

		// MM 범위와 YY 범위를 검사
		const isMonthValid = this.cardExpiryMonth >= 1 && this.cardExpiryMonth <= 12
		const isYearValid = this.cardExpiryYear >= 24 && this.cardExpiryYear <= 99

		if (isMonthValid && isYearValid) {
			return true
		} else {
			return false
		}
    },
	//////////////////////////////////////////////////////////////////////////////////
	//                                script code                                   //
	//////////////////////////////////////////////////////////////////////////////////
	

},
})
</script>
