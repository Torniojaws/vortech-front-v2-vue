<template>
  <b-row id="contents">
    <b-col></b-col>
    <b-col cols="9">
      <router-view />
    </b-col>
    <b-col></b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Contents'
}
</script>
