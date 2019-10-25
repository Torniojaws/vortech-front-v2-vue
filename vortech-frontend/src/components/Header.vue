<template>
  <header>
    <b-row id="header-top">
      <b-col sm="12">
        <UserPanel />
      </b-col>
      <b-col sm="12">
        <Logo />
      </b-col>
    </b-row>
    <b-row id="header-menu">
      <b-col sm="12">
        <Menu />
      </b-col>
    </b-row>
  </header>
</template>

<script>
import Logo from '@/components/Logo.vue'
import UserPanel from '@/components/UserPanel.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'Header',
  components: {
    Logo,
    Menu,
    UserPanel
  }
}
</script>
