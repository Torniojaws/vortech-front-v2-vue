<template>
  <b-row>
    <b-col id="menu">
      <router-link to="/">News</router-link> |
      <router-link to="/releases">Releases</router-link> |
      <router-link to="/bio">Bio</router-link> |
      <router-link to="/media">Media</router-link> |
      <router-link to="/shop">Shop</router-link> |
      <router-link to="/guestbook">Guestbook</router-link>
    </b-col>
  </b-row>
</template>

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
</style>
