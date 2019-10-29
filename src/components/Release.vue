<template>
  <b-row>
    <b-col id="cover">
      <img :src="`${publicPath}cd-256x256.png`" :alt="release.title" />
    </b-col>
    <b-col id="title">
      <h3>{{ release.title }} ({{ year }})</h3>
      <strong>{{ release.code }}</strong>
      <ul id="links">
        <li v-for="link in release.links" :key="link.title">
          <a :href="link.url">{{ link.title }}</a>
        </li>
      </ul>
    </b-col>
    <b-col id="songlist">
      <ol>
        <li v-for="song in release.songs" :key="song.title">
          {{ song.title }} ({{ formatSeconds(song.duration) }})
        </li>
      </ol>
    </b-col>
  </b-row>
</template>

<script>
import time from '@/utils/time'

export default {
  name: 'Release',
  data () {
    return {
      publicPath: process.env.BASE_URL,
      year: new Date(this.release.released).getFullYear()
    }
  },
  methods: {
    formatSeconds: time.formatSeconds
  },
  props: {
    release: Object
  }
}
</script>

<style>
img {
  border: solid 1px grey;
  width: 200px;
  height: 200px;
}
</style>
