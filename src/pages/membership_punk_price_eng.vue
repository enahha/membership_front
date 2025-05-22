<template>
<div class="page_main">
  <div id="Wrap">

    <!-- 본문 시작 -->
    <main role="main">
    <!-- main_container -->
    <div id="sub_container" class="membership_wrap membership_hotel_pirce">

      <section class="container full_bg">
        <h3><span>Genesis &amp; Punky Kongz</span> Fairmont Special Benefits</h3>
        <div class="price_group">
          <h4>Fairmont Ambassador<br /> Seoul Hotel <small>Prices are excluding 10% VAT.</small></h4>
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
                  <th>Fairmont Room (1 Adult)</th>
                  <td>300,000 KRW</td>
                </tr>
                <tr>
                  <th>Fairmont Room (2 Adults)</th>
                  <td>340,000 KRW</td>
                </tr>
                <tr>
                  <th>Fairmont Deluxe Room (1 Adult)</th>
                  <td>320,000 KRW</td>
                </tr>
                <tr>
                  <th>Fairmont Deluxe Room (2 Adults)</th>
                  <td>360,000 KRW</td>
                </tr>
                <tr>
                  <th>Fairmont Gold Room (1 Adult)</th>
                  <td>400,000 KRW</td>
                </tr>
                <tr>
                  <th>Fairmont Gold Room (2 Adults)</th>
                  <td>500,000 KRW</td>
                </tr>
                <tr>
                  <th>Signature Suite (1 Adult)</th>
                  <td>500,000 KRW</td>
                </tr>
                <tr>
                  <th>Signature Suite (2 Adults)</th>
                  <td>600,000 KRW</td>
                </tr>
              </tbody>
            </table>
            <p class="text-right fw300 mt20">*Includes Breakfast</p>
          </div>
        </div>

        <div class="price_group mt80">
          <h4>Special Benefit <small>Prices are excluding 10% VAT.</small></h4>
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
                  <br />※Prices are <strong class="fc_green text_underline">including VAT.</strong>
                </th>
                <td>
                  <div class="rows">
                    <strong>Adult Price (20% Discount)</strong>
                    <table>
                      <tbody>
                        <tr>
                          <th>Lunch</th>
                          <th>Dinner</th>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <p>Weekdays</p>
                              <p>135,000 KRW</p>
                              <p>108,000 KRW</p>
                            </div>
                            <div>
                              <p>Weekend</p>
                              <p>170,000 KRW</p>
                              <p>136,000 KRW</p>
                            </div>
                          </td>
                          <td>
                            <div>
                              <p>Weekdays</p>
                              <p>160,000 KRW</p>
                              <p>128,000 KRW</p>
                            </div>
                            <div>
                              <p>Weekend</p>
                              <p>170,000 KRW</p>
                              <p>136,000 KRW</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="rows mt20">
                    <strong>Children Price (20% Discount)</strong>
                    <table>
                      <tbody>
                        <tr>
                          <th>Lunch</th>
                          <th>Dinner</th>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <p>Weekdays</p>
                              <p>67,500 KRW</p>
                              <p>54,000 KRW</p>
                            </div>
                            <div>
                              <p>Weekend</p>
                              <p>85,000 KRW</p>
                              <p>68,000 KRW</p>
                            </div>
                          </td>
                          <td>
                            <div>
                              <p>Weekdays</p>
                              <p>80,000 KRW</p>
                              <p>64,000 KRW</p>
                            </div>
                            <div>
                              <p>Weekend</p>
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
                <th>Breakfast per Adult(Add)</th>
                <td>41,000 KRW</td>
              </tr>
              <tr>
                <th>Breakfast per Children(Add)</th>
                <td>Approx. 34,000 KRW</td>
              </tr>
              <tr>
                <th>Gold Lounge per Adult(Add)</th>
                <td>100,000 KRW</td>
              </tr>
              <tr>
                <th>Gold Lounge per Children(Add)</th>
                <td>50,000 KRW</td>
              </tr>
              <tr>
                <th>Accommodation per Adult(Add)</th>
                <td>50,000 KRW</td>
              </tr>
              <tr>
                <th>Accommodation per Children(Add)</th>
                <td>Free</td>
              </tr>
              <tr>
                <th>Accommodation 2 Childrens(Add)</th>
                <td>50,000 KRW</td>
              </tr>
              <tr>
                <th>Extra Bed</th>
                <td>50,000 KRW</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>

        <div class="btn_group mt40">
          <a onclick="history.go('-1')" class="btn btn-purple-o w240">Back</a>
          <a href="/#/kor/membership/reservation?r=room&type=PG" class="btn btn-purple w260">Make a reservation</a>
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
