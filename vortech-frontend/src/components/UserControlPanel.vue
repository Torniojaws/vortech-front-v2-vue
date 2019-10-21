<template>
  <nav id="usercp">
    Logged in as: {{ username }} |
    View Profile |
    Settings |
    <a href="/logout">Logout</a>
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
  color: gold;
}
nav a {
  color: rgb(192, 192, 230);
  text-decoration: none;
  &:hover {
    color: white;
  }
}
</style>
