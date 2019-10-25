<template>
  <b-row id="smallMenu">
    <b-col cols="3">
      <b-dropdown id="menu-hamburger" dropdown-menu-left size="sm" text="Menu" no-caret>
        <b-dropdown-item>
          <router-link to="/">News</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link to="/releases">Releases</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link to="/bio">Bio</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link to="/media">Media</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link to="/shop">Shop</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link to="/guestbook">Guestbook</router-link>
        </b-dropdown-item>
      </b-dropdown>
    </b-col>
    <b-col>
      <Logo />
    </b-col>
  </b-row>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  name: 'SmallMenu',
  components: {
    Logo
  }
}
</script>
