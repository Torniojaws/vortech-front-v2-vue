<template>
  <div class="contents">
    <Releases order="newest" />
  </div>
</template>

<script>
import Releases from '@/components/Releases.vue'

export default {
  name: 'releases',
  components: {
    Releases
  }
}
</script>
