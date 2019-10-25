<template>
  <b-row id="loginBar">
    <LoginForm v-if="!loggedIn" />
    <UserControlPanel v-if="loggedIn" />
  </b-row>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import UserControlPanel from '@/components/UserControlPanel.vue'

export default {
  name: 'UserPanel',
  components: {
    LoginForm,
    UserControlPanel
  },
  data () {
    return {
      loggedIn: this.$store.state.loggedIn
    }
  }
}
</script>

<style lang="scss">
#loginBar {
  text-align: right;
}
@media screen and (max-width: 768px) {
  #loginBar {
    text-align: center;
  }
}
</style>
