<template>
  <b-form-group>
    <b-form-row id="username">
      <b-col sm="12">
        <label for="username">Username</label>
      </b-col>
      <b-col sm="12">
        <b-form-input id="username" placeholder="Username" />
      </b-col>
    </b-form-row>
    <b-form-row id="email">
      <b-col sm="12">
        <label for="email">Email</label>
      </b-col>
      <b-col sm="12">
        <b-form-input id="email" placeholder="Email" />
      </b-col>
    </b-form-row>
    <b-form-row id="password">
      <b-col sm="12">
        <label for="password">Password (PBKDF2 encrypted)</label>
      </b-col>
      <b-col sm="12">
        <b-form-input id="password" placeholder="Password" />
      </b-col>
    </b-form-row>
  </b-form-group>
</template>

<script>
export default {
  name: 'Register'
}
</script>
