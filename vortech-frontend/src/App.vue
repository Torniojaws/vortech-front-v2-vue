<template>
  <b-container>
    <Header />
    <Menu />
    <router-view />
  </b-container>
</template>

<script>
import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'

export default {
  components: {
    Header,
    Menu
  }
}
</script>

<style lang="scss">
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
