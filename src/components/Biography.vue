<template>
  <div class="bio">
    <template v-if="loading">
      <CircleLoader />
    </template>
    <template v-else>
      <div v-html="bio.short"></div>
    </template>
  </div>
</template>

<script>
import api from '@/api'

export default {
  name: 'Biography',
  data () {
    return {
      bio: '',
      loading: false
    }
  },
  created () {
    this.getBiography()
  },
  methods: {
    async getBiography () {
      this.loading = true
      const response = await api.get('/biography')
      this.loading = false
      this.bio = response.data.biography[0]
    }
  }
}
</script>
