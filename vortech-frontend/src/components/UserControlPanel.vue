<template>
  <b-col>
    <nav id="usercp">
      Logged in as: <b>{{ username }}</b> &mdash;
      <router-link to="/profile">View Profile</router-link> |
      <router-link to="/settings">Settings</router-link> |
      <router-link to="/logout">Logout</router-link>
    </nav>
  </b-col>
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
  text-align: center;
}
nav a {
  color: rgb(160, 192, 230);
  text-decoration: none;

  &:hover {
    color: white;
  }
}
@media screen and (max-width: 412px) {
  nav#usercp {
    font-size: 0.8em;
  }
}
@media screen and (max-width: 344px) {
  nav#usercp {
    font-size: 0.75em;
  }
}
@media screen and (max-width: 326px) {
  nav#usercp {
    font-size: 0.7em;
  }
}
</style>
