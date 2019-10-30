<template>
  <b-row id="smallMenu">
    <b-col cols="3">
      <b-dropdown id="menu-hamburger" dropdown-menu-left size="sm" text="Menu" no-caret>
        <template v-for="link in menu">
          <b-dropdown-item :key="link.path">
            <router-link :to="link.path">{{ link.title }}</router-link>
          </b-dropdown-item>
        </template>
      </b-dropdown>
    </b-col>
    <b-col>
      <Logo />
    </b-col>
  </b-row>
</template>

<script>
import Logo from '@/components/Logo.vue'
import menu from '@/assets/menu.json'

export default {
  name: 'SmallMenu',
  data () {
    return {
      menu
    }
  },
  components: {
    Logo
  }
}
</script>

<style>
div#menu-hamburger {
  color: red;
  background-color: maroon;
  font-size: 96px;
}

#smallMenu {
  background-color: rgb(48, 58, 66);
}
</style>
