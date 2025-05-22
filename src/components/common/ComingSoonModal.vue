<template>
    <q-dialog v-model="ComingSoonModal" persistent>
      <q-card>
      <!-- The Modal -->
      <div class="modal inner" id="mypage_pop">
        <div class="modal-dialog">
          <div class="modal-content">

            <div class="modal-body">
              <img src="images/mypage_pop.png" alt="">
              <h4>Service is being prepared.</h4>
              <p>We will be back soon with outstanding service.</p>
              <button type="button" class="close" data-dismiss="modal" @click="close">Close</button>
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
        ComingSoonModal: false
      }
    },
    methods: {
      show() {
        this.ComingSoonModal = true
      },
      close() {
        this.ComingSoonModal = false
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
