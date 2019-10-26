<template>
  <div class="news">
    Here will be {{ count }} news
    <template v-for="item in demoNews">
      <NewsItem :news="item" :key="item.id" />
    </template>
  </div>
</template>

<script>
import NewsItem from '@/components/NewsItem.vue'

export default {
  name: 'News',
  components: {
    NewsItem
  },
  data () {
    return {
      // IRL this would be populated by calling the backend REST API
      demoNews: [{
        id: 1,
        title: 'Example news',
        contents: 'This would be a news item from the DB',
        created: '2019-10-23 00:18:00'
      }, {
        id: 2,
        title: 'More news',
        contents: 'Another news item from the DB',
        created: '2019-10-23 00:19:00'
      }]
    }
  },
  props: {
    count: String
  }
}
</script>
