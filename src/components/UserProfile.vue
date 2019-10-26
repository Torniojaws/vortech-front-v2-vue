<template>
  <div class="profile">
    <section v-if="!this.$store.state.username">
      Please login first
      <login-form />
    </section>
    <section v-if="this.$store.state.username">
      <h2>User profile</h2>
      <ul>
        <li>Username: {{ username }}</li>
        <li>Admin: {{ isAdmin }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data () {
    return {
      username: this.$store.state.username,
      isAdmin: this.$store.state.admin
    }
  }
}
</script>
