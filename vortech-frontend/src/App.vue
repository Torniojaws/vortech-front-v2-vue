<template>
  <div id="app">
    <h1 class="vortech-logo">Vortech</h1>
    <div id="nav">
      <router-link to="/">News</router-link> |
      <router-link to="/releases">Releases</router-link> |
      <router-link to="/bio">Bio</router-link> |
      <router-link to="/media">Media</router-link> |
      <router-link to="/shop">Shop</router-link> |
      <router-link to="/guestbook">Guestbook</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  background-color: black;
}

#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: 'Xirod-Regular';
  font-style: normal;
  font-weight: normal;
  src: url('./assets/xirod.woff') format('woff');
}

.vortech-logo {
  color: white;
  font-family: 'Xirod-Regular';
  font-size: 2.5em;
}

#nav {
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
