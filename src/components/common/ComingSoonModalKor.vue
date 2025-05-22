<template>
    <q-dialog v-model="ComingSoonModalKor" persistent>
      <q-card>
      <!-- The Modal -->
      <div class="modal inner" id="mypage_pop">
        <div class="modal-dialog">
          <div class="modal-content">

            <div class="modal-body">
              <img src="images/mypage_pop.png" alt="">
              <h4>서비스 준비중입니다.</h4>
            <p>최고의 서비스로 찾아뵙겠습니다.</p>
              <button type="button" class="close" data-dismiss="modal" @click="close">닫기</button>
            </div>
          </div>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>
  
  <script>
  export default {
    data() {
      return {
        ComingSoonModalKor: false
      }
    },
    methods: {
      show() {
        this.ComingSoonModalKor = true
      },
      close() {
        this.ComingSoonModalKor = false
      }
    }
  }
  </script>
  
  <style>
  .q-dialog__content {
    max-width: 400px;
    text-align: center;
  }
  .q-icon {
    margin: auto;
    align-content: center;
  }
  </style>
