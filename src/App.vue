<template>
  <b-container>
    <Header />
    <Contents />
    <Footer />
  </b-container>
</template>

<script>
import Contents from '@/components/Contents.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  components: {
    Contents,
    Footer,
    Header
  }
}
</script>
