<template>
    <q-dialog v-model="ComingSoonModalIdn" persistent>
      <q-card>
      <!-- The Modal -->
      <div class="modal inner" id="mypage_pop">
        <div class="modal-dialog">
          <div class="modal-content">

            <div class="modal-body">
              <img src="images/mypage_pop.png" alt="">
              <h4>Layanan sedang dipersiapkan.</h4>
            <p>Kami akan segera kembali dengan layanan luar biasa.</p>
              <button type="button" class="close" data-dismiss="modal" @click="close">Tutup</button>
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
        ComingSoonModalIdn: false
      }
    },
    methods: {
      show() {
        this.ComingSoonModalIdn = true
      },
      close() {
        this.ComingSoonModalIdn = false
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
