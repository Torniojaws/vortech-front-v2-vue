<template>
  <aside>
    <LoginForm v-if="!loggedIn" />
    <UserControlPanel v-if="loggedIn" />
  </aside>
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
