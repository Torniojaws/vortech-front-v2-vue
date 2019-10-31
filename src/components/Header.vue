<template>
  <b-row id="header">
    <!-- On small screens, we show just a hamburger menu and logo -->
    <b-col id="smallMenu" class="d-block d-sm-none">
      <SmallMenu />
    </b-col>
    <!-- On bigger screens, we show a separate logo and menu bar -->
    <b-col id="normalMenu" class="d-none d-sm-block">
      <Logo />
      <Menu />
    </b-col>
  </b-row>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Menu from '@/components/Menu.vue'
import SmallMenu from '@/components/SmallMenu.vue'

export default {
  name: 'Header',
  components: {
    Logo,
    Menu,
    SmallMenu
  }
}
</script>
