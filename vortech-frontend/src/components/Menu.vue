<template>
  <nav id="menu">
    <router-link to="/">News</router-link> |
    <router-link to="/releases">Releases</router-link> |
    <router-link to="/bio">Bio</router-link> |
    <router-link to="/media">Media</router-link> |
    <router-link to="/shop">Shop</router-link> |
    <router-link to="/guestbook">Guestbook</router-link>
  </nav>
</template>

<style lang="scss">
nav#menu {
  padding: 20px;
  background: linear-gradient(0.25turn, black, rgb(32, 64, 96), black);

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
