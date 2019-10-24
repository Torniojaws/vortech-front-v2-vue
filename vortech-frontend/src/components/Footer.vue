<template>
  <b-row id="footer">
    <b-col id="footer">
      Copyright &copy; {{ year }} Vortech
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style>
#footer {
  padding-top: 30px;
  text-align: center;
}
</style>
