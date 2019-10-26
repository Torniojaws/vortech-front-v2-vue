<template>
  <div class="contents">
    <p>Registered users will be able to access extra features of the site. For example commenting
    on pictures, news, releases, and songs. You can also subscribe to newsletters to receive
    major news, such as new releases, live shows, and other events.</p>
    <hr />
    <Register />
  </div>
</template>

<script>
import Register from '@/components/Register.vue'

export default {
  name: 'register',
  components: {
    Register
  }
}
</script>
