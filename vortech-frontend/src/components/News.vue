<template>
  <div class="news">
    Here will be {{ count }} news
  </div>
</template>

<script>
export default {
  name: 'News',
  props: {
    count: String
  }
}
</script>
