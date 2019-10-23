<template>
  <div class="newsItem">
    <header>
      <h2>{{ news.title }}</h2>
      <aside>{{ news.created }}</aside>
    </header>
    <section>
      {{ news.contents }}
    </section>
    <footer>
      Comments, likes, etc, for news.id: {{ news.id }}
    </footer>
  </div>
</template>

<script>
export default {
  name: 'NewsItem',
  props: {
    news: Object
  }
}
</script>

<style scoped>
header {
  background-color: rgb(48, 58, 66);
}
.newsItem {
  text-align: left;
}
</style>
