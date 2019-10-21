<template>
  <nav id="usercp">
    Logged in as: <b>{{ username }}</b> &mdash;
    <router-link to="/profile">View Profile</router-link> |
    <router-link to="/settings">Settings</router-link> |
    <router-link to="/logout">Logout</router-link>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      username: this.$store.state.username
    }
  }
}
</script>

<style scoped lang="scss">
nav#usercp {
  color: silver;
}
nav a {
  color: rgb(160, 192, 230);
  text-decoration: none;

  &:hover {
    color: white;
  }
}
</style>
