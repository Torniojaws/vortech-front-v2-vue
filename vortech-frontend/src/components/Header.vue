<template>
  <header>
    <Logo />
    <aside class="top-right">
      <LoginForm v-if="!loggedIn" />
      <UserControlPanel v-if="loggedIn" />
    </aside>
  </header>
</template>

<script>
import Logo from '@/components/Logo.vue'
import LoginForm from '@/components/LoginForm.vue'
import UserControlPanel from '@/components/UserControlPanel.vue'

export default {
  components: {
    LoginForm,
    Logo,
    UserControlPanel
  },
  data () {
    return {
      loggedIn: this.$store.state.loggedIn
    }
  }
}
</script>

<style>
.top-right {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
