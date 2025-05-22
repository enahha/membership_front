<template>
  <div class="fullscreen bg-black text-white text-center q-pa-md flex flex-center" style="background-image: url(images/star1.jpg)">
    <div>
      <div style="font-size: 10vh">
        404
      </div>

      <div class="text-h2" style="opacity:.7">
        Oops. Nothing here...
      </div>

      <q-btn
        class="q-mt-xl"
        color="secondary"
        text-color="black"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Error404'
})
</script>

<style scoped>
:deep(.material-icons) {
  font-family: 'Material Icons' !important;
}
</style>