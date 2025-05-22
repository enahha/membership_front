<template>
<div class="page_main">
  <div id="Wrap">

    <!-- 본문 시작 -->
    <main role="main">
    <!-- main_container -->
    <div id="sub_container" class="membership_wrap membership_hotel_pirce">

      <section class="container full_bg">
        <h3><span>알야, 피트리</span> 페어몬트 특별 혜택</h3>
        <div class="price_group">
          <h4>페어몬트 앰배서더<br /> 서울호텔 이용가 <small>10% 부가세 미포함 가격</small></h4>
          <div class="table_group">
            <table>
              <colgroup>
                <col style="width:35%;">
                <col style="width:65%;">
              </colgroup>
              <thead>
                <tr>
                  <th>Room Type / Condition</th>
                  <th>가격</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Fairmont Room (1인)</th>
                  <td>280,000원</td>
                </tr>
                <tr>
                  <th>Fairmont Room (2인)</th>
                  <td>옵션 별 책정</td>
                </tr>
                <tr>
                  <th>Signature Suite (1인)</th>
                  <td>480,000원</td>
                </tr>
                <tr>
                  <th>Signature Suite (2인)</th>
                  <td>옵션 별 책정 (1인 라운지 이용권) </td>
                </tr>
              </tbody>
            </table>
            <p class="text-right fw300 mt20">*조식 미포함</p>
          </div>
        </div>

        <div class="price_group mt80">
          <h4>Special Benefit <small>10% 부가세 미포함 가격</small></h4>
          <div class="table_group">
          <table>
            <colgroup>
              <col style="width:35%;">
              <col style="width:65%;">
            </colgroup>
            <thead>
              <tr>
                <th>Type</th>
                <th>가격</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  스펙트럼 레스토랑
                  <br />※이용요금은 <strong class="fc_green text_underline">부가세 포함</strong> 가격 입니다.
                </th>
                <td>
                  <div class="rows">
                    <strong>성인 가격 (20%할인)</strong>
                    <table>
                      <tbody>
                        <tr>
                          <th>중식</th>
                          <th>석식</th>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <p>주중</p>
                              <p>135,000원</p>
                              <p>108,000원</p>
                            </div>
                            <div>
                              <p>주말</p>
                              <p>170,000원</p>
                              <p>136,000원</p>
                            </div>
                          </td>
                          <td>
                            <div>
                              <p>주중</p>
                              <p>160,000원</p>
                              <p>128,000원</p>
                            </div>
                            <div>
                              <p>주말</p>
                              <p>170,000원</p>
                              <p>136,000원</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="rows mt20">
                    <strong>어린이 가격 (20%할인)</strong>
                    <table>
                      <tbody>
                        <tr>
                          <th>중식</th>
                          <th>석식</th>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <p>주중</p>
                              <p>67,500원</p>
                              <p>54,000원</p>
                            </div>
                            <div>
                              <p>주말</p>
                              <p>85,000원</p>
                              <p>68,000원</p>
                            </div>
                          </td>
                          <td>
                            <div>
                              <p>주중</p>
                              <p>80,000원</p>
                              <p>64,000원</p>
                            </div>
                            <div>
                              <p>주말</p>
                              <p>85,000원</p>
                              <p>68,000원</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>
                <th>마리포사 레스토랑</th>
                <td>가격 별도 안내 <a href="https://fairmont-seoul.com/dining/mariposa/" target="_blank" class="btn view">자세히보기</a></td>
              </tr>
              <tr>
                <th>조식 성인 1인당</th>
                <td>52,500원 <strong class="fc_green">(부가세 포함)</strong></td>
              </tr>
              <tr>
                <th>조식 어린이 1인당</th>
                <td>26,250원 <strong class="fc_green">(부가세 포함)</strong></td>
              </tr>
              <tr>
                <th>골드라운지 성인 1인당 (추가비용)</th>
                <td>100,000원</td>
              </tr>
              <tr>
                <th>골드라운지 어린이 1인당 (추가비용)</th>
                <td>50,000원</td>
              </tr>
              <tr>
                <th>숙박 성인 1인당 (추가비용)</th>
                <td>50,000원</td>
              </tr>
              <tr>
                <th>숙박 어린이 1인 (추가비용)</th>
                <td>무료</td>
              </tr>
              <tr>
                <th>숙박 어린이 2인 (추가비용)</th>
                <td>50,000원</td>
              </tr>
              <tr>
                <th>숙박 Extra 1 bed (추가비용)</th>
                <td>50,000원</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>

        <div class="btn_group mt40">
          <a onclick="history.go('-1')" class="btn btn-purple-o w240">뒤로가기</a>
          <a href="/#/kor/membership/reservation?r=room&type=AF" class="btn btn-purple w240">예약하기</a>
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
