<template>
  <form id="login" v-on:submit.prevent>
    <input type="text" v-model="username" name="username" placeholder="Username" class="inputField" />
    <input type="password" v-model="password" name="password" placeholder="Password" class="inputField" />
    <input type="submit" name="submit" value="Login" v-on:click="checkLogin" />
    <!-- Error handling -->
    <div class="error" v-if="errors.length">
      <span v-for="error in errors" v-bind:key="error.id">{{ error }}<br/></span>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      errors: [],
      username: null,
      password: null,
      loggedIn: false
    }
  },
  methods: {
    checkLogin (e) {
      this.errors = []
      // Validate input. TODO: Joi schema
      if (!this.username) {
        this.errors.push('Username required')
        console.log('No username')
        return
      }
      if (!this.password) {
        this.errors.push('Password required')
        console.log('No password')
        return
      }

      // Check login
      console.log(`Checking login for username: ${this.username}`)
      // TODO: Use the backend login API, when done with testing the UI
      if (this.username === 'test' && this.password === 'test') {
        console.log('Logging in as "test"...')
        // Update store
        console.log('Update store')
        this.$store.commit('username', this.username)
        this.$store.commit('loggedIn', true)
        this.$router.go()
      } else {
        console.log('Login for user', this.username, 'is not allowed')
        this.errors.push('Invalid login')
        this.username = ''
        this.password = ''
      }

      e.preventDefault()
    }
  }
}
</script>

<style lang="scss">
.error {
  color: red;
}
input {
  background-color: black;
  color: white;
  font-size: 0.8em !important;

  &.inputField {
    width: 33%;
  }
}
</style>
