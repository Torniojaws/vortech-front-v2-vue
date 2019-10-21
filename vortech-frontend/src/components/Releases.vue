<template>
  <div class="releases">
    Releases appear here (order: {{ order }})
  </div>
</template>

<script>
export default {
  name: 'Releases',
  props: {
    order: String
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
