<template>
  <b-row>
    <b-col cols="2" />
    <b-col id="menu">
      <router-link to="/">News</router-link> |
      <router-link to="/releases">Releases</router-link> |
      <router-link to="/bio">Bio</router-link> |
      <router-link to="/media">Media</router-link> |
      <router-link to="/shop">Shop</router-link> |
      <router-link to="/guestbook">Guestbook</router-link>
    </b-col>
    <b-col cols="2">
      <!-- TODO: Center this vertically -->
      <LoginDropdown />
    </b-col>
  </b-row>
</template>

<script>
import LoginDropdown from '@/components/LoginDropdown.vue'

export default {
  name: 'Menu',
  components: {
    LoginDropdown
  }
}
</script>

<style lang="scss">
#menu {
  background: linear-gradient(0.25turn, black, rgb(32, 64, 96), black);
  padding: 20px;
  text-align: center;

  a {
    font-weight: bold;
    color: rgb(160, 160, 180);
    text-decoration: none;

    &.router-link-exact-active {
      color: white;
    }

    &:hover {
      color: white;
    }
  }
}
@media screen and (max-width: 420px) {
  #menu {
    font-size: 0.8em;
  }
}
@media screen and (max-width: 350px) {
  #menu {
    font-size: 0.6em;
    padding: 10px;
  }
}
</style>
