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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
