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
  color: rgb(32, 64, 96);
  padding: 30px 0 15px 0;
  text-align: center;
}
</style>
