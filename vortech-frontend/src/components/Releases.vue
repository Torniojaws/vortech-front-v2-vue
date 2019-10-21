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
