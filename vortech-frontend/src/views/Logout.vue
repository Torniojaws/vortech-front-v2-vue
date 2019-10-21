<template>
  <div class="contents">
    <p>Logged out. Redirecting in {{ seconds }} seconds</p>
  </div>
</template>

<script>
export default {
  name: 'logout',
  data () {
    return {
      // TODO: Read from config file
      seconds: 4
    }
  },
  methods: {
    doLogout () {
      console.log('Doing logout')
      // TODO: Call backend logout that invalidates the token etc
      this.$store.commit('admin', false)
      this.$store.commit('loggedIn', false)
      this.$store.commit('username', null)
      setTimeout(() => this.$router.push({ path: '/' }), this.seconds * 1000)
    }
  },
  mounted () {
    this.doLogout()
  }
}
</script>
