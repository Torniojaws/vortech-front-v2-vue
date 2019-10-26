<template>
  <div class="contents">
    <News count="10" />
  </div>
</template>

<script>
import News from '@/components/News.vue'

export default {
  name: 'news',
  components: {
    News
  }
}
</script>
