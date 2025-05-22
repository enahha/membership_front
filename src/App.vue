<template>
  <Header></Header>
  <router-view />
  <Footer v-if="isKor" />
  <FooterIdn v-else-if="isIdn" />
  <FooterEng v-else />
</template>
<script>
import { defineComponent } from 'vue';
import Header from './layouts/Header.vue';
import Footer from './layouts/Footer.vue';
import FooterEng from './layouts/Footer_eng.vue';
import FooterIdn from './layouts/Footer_idn.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
    FooterEng,
    FooterIdn,
  },
  computed: {
    isKor() {
      // 현재 경로 확인
      const currentPath = this.$route.path
      return currentPath.startsWith('/kor')
    },
    isEng() {
      // 현재 경로 확인
      const currentPath = this.$route.path
      return currentPath.startsWith('/eng')
    },
    isIdn() {
      // 현재 경로 확인
      const currentPath = this.$route.path
      return currentPath.startsWith('/idn')
    },
  },
})
</script>
