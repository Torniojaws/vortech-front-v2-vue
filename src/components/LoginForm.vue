<template>
  <b-form-row inline id="login">
    <b-col id="username">
      <b-form-input
        class="inputField"
        placeholder="Username"
        size="sm"
        v-model="username"
      />
    </b-col>
    <b-col id="password">
      <b-form-input
        class="inputField"
        placeholder="Password"
        size="sm"
        type="password"
        v-model="password"
      />
    </b-col>
    <b-col cols="2" id="submit">
      <b-button
        size="sm"
        type="submit"
        v-on:click="checkLogin"
        v-on:submit.prevent
      >Login</b-button>
    </b-col>
    <b-col id="register">
      <router-link to="/register">Register</router-link>
    </b-col>
    <b-col cols="12" id="formValidationResult">
      <div class="error" v-if="errors.length">
        <b-alert
          show
          v-bind:key="error.id"
          v-for="error in errors"
          variant="danger"
        >{{ error }}</b-alert>
      </div>
    </b-col>
  <!-- <form id="login" v-on:submit.prevent>
    <input type="text" v-model="username" name="username" placeholder="Username" class="inputField" />
    <input type="password" v-model="password" name="password" placeholder="Password" class="inputField" />
    <input type="submit" name="submit" value="Login" v-on:click="checkLogin" /> -->
    <!-- Error handling -->
    <!-- <div class="error" v-if="errors.length">
      <span v-for="error in errors" v-bind:key="error.id">{{ error }}<br/></span>
    </div> -->
  </b-form-row>
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
        return
      }
      if (!this.password) {
        this.errors.push('Password required')
        return
      }

      // Check login
      // TODO: Use the backend login API, when done with testing the UI
      if (this.username === 'test' && this.password === 'test') {
        // Update store
        this.$store.commit('username', this.username)
        this.$store.commit('loggedIn', true)
        this.$router.go()
      } else {
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
.inputField {
  background-color: black;
  color: white;
  font-size: 0.8em !important;
}
</style>
