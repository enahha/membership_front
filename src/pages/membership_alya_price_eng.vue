<template>
<div class="page_main">
  <div id="Wrap">

    <!-- 본문 시작 -->
    <main role="main">
    <!-- main_container -->
    <div id="sub_container" class="membership_wrap membership_hotel_pirce">

      <section class="container full_bg">
        <h3><span> Alya &amp; Fitri</span> Fairmont Special Benefits</h3>
        <div class="price_group">
          <h4>Fairmont Ambassador Seoul Hotel Rates <small>Prices exclude 10% VAT</small></h4>
          <div class="table_group">
            <table>
              <colgroup>
                <col style="width:35%;">
                <col style="width:65%;">
              </colgroup>
              <thead>
                <tr>
                  <th>Room Type / Condition</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Fairmont Room (1 person)</th>
                  <td>280,000 KRW</td>
                </tr>
                <tr>
                  <th>Fairmont Room (2 person)</th>
                  <td>Pricing varies by options</td>
                </tr>
                <tr>
                  <th>Signature Suite (1 person)</th>
                  <td>480,000 KRW</td>
                </tr>
                <tr>
                  <th>Signature Suite (2 person)</th>
                  <td>Pricing varies by options (1 person includes lounge access) </td>
                </tr>
              </tbody>
            </table>
            <p class="text-right fw300 mt20">*excludes Breakfast</p>
          </div>
        </div>

        <div class="price_group mt80">
          <h4>Special Benefit <small>Prices exclude 10% VAT unless stated otherwise</small></h4>
          <div class="table_group">
          <table>
            <colgroup>
              <col style="width:35%;">
              <col style="width:65%;">
            </colgroup>
            <thead>
              <tr>
                <th>Type</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  Spectrum Restaurant
                  <br />※Prices <strong class="fc_green text_underline">include VAT</strong>
                </th>
                <td>
                  <div class="rows">
                    <strong>Adult Price (20% Discount) </strong>
                    <table>
                      <tbody>
                        <tr>
                          <th>lunch</th>
                          <th>dinner</th>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <p>weekdays</p>
                              <p>135,000 KRW</p>
                              <p>108,000 KRW</p>
                            </div>
                            <div>
                              <p>weekend</p>
                              <p>170,000 KRW</p>
                              <p>136,000 KRW</p>
                            </div>
                          </td>
                          <td>
                            <div>
                              <p>weekdays</p>
                              <p>160,000 KRW</p>
                              <p>128,000 KRW</p>
                            </div>
                            <div>
                              <p>weekend</p>
                              <p>170,000 KRW</p>
                              <p>136,000 KRW</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="rows mt20">
                    <strong>Child Price (20% Discount)</strong>
                    <table>
                      <tbody>
                        <tr>
                          <th>lunch</th>
                          <th>dinner</th>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <p>weekdays</p>
                              <p>67,500 KRW</p>
                              <p>54,000 KRW</p>
                            </div>
                            <div>
                              <p>weekend</p>
                              <p>85,000 KRW</p>
                              <p>68,000 KRW</p>
                            </div>
                          </td>
                          <td>
                            <div>
                              <p>weekdays</p>
                              <p>80,000 KRW</p>
                              <p>64,000 KRW</p>
                            </div>
                            <div>
                              <p>weekend</p>
                              <p>85,000 KRW</p>
                              <p>68,000 KRW</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>
                <th>Mariposa Restaurant</th>
                <td>Pricing to be confirmed <a href="https://fairmont-seoul.com/en/dining/mariposa/" target="_blank" class="btn view">View Details</a></td>
              </tr>
              <tr>
                <th>Breakfast per Adult</th>
                <td>52,500 KRW <strong class="fc_green"> (VAT included)</strong></td>
              </tr>
              <tr>
                <th>Breakfast per Child</th>
                <td>26,250 KRW <strong class="fc_green"> (VAT included)</strong></td>
              </tr>
              <tr>
                <th>Gold Lounge per Adult(Additional Cost)</th>
                <td>100,000 KRW</td>
              </tr>
              <tr>
                <th>Gold Lounge per Child(Additional Cost)</th>
                <td>50,000 KRW</td>
              </tr>
              <tr>
                <th>Accommodation per Adult(Additional Cost)</th>
                <td>50,000 KRW</td>
              </tr>
              <tr>
                <th>Accommodation per Child(Additional Cost)</th>
                <td>Free of charge</td>
              </tr>
              <tr>
                <th>Accommodation  2 Children</th>
                <td>50,000 KRW</td>
              </tr>
              <tr>
                <th>Extra Bed (Additional Cost)</th>
                <td>50,000 KRW</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>

        <div class="btn_group mt40">
          <a onclick="history.go('-1')" class="btn btn-purple-o w240">Back</a>
          <a href="/#/eng/membership/reservation?r=room&type=AF" class="btn btn-purple w240">Make a reservation</a>
        </div>

      </section>


    </div>
    <!-- //main_container -->
    </main>
    <!-- //본문 끝 -->




  </div>
</div>

</template>

<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import $ from 'jquery';

export default defineComponent({
  name: 'PageIndex',
  data () {
    return {
    }
  },
  components: {
  },
  watch: {

  },
  computed: {

  },
  methods: {
  }
})
</script>
