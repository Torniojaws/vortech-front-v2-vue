<template>
  <b-row>
    <b-col cols="2" />
    <b-col id="menu">
      <template v-for="link in menu">
        <router-link :to="link.path" :key="link.path">{{ link.title }}</router-link> |
      </template>
    </b-col>
    <b-col cols="2">
      <LoginDropdown />
    </b-col>
  </b-row>
</template>

<script>
import LoginDropdown from '@/components/LoginDropdown.vue'
import menu from '@/assets/menu.json'

export default {
  name: 'Menu',
  data () {
    return {
      menu
    }
  },
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
@media screen and (max-width: 768px) {
  #menu {
    font-size: 0.8em;
  }
}
</style>
