<template>
  <b-dropdown dropdown-menu-right size="sm" id="login-dropdown" text="Login">
    <b-dropdown-item>
      <router-link to="/login">Login</router-link>
    </b-dropdown-item>
    <b-dropdown-item>
      <router-link to="/register">Register</router-link>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  name: 'LoginDropdown'
}
</script>

<style>
#login-dropdown {
  padding-top: 16px;
}
</style>
