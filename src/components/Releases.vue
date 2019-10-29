<template>
  <section id="releases">
    <article v-for="release in releases" :key="release.id">
      <Release :release="release" />
    </article>
  </section>
</template>

<script>
import Release from '@/components/Release.vue'

export default {
  name: 'Releases',
  components: {
    Release
  },
  props: {
    order: String
  },
  data () {
    return {
      // IRL this would be populated by calling the backend REST API
      releases: [{
        id: 1,
        title: 'Conclusion',
        released: '2006-04-11 00:00:00',
        code: 'VOR001',
        songs: [
          { title: 'The Institution', duration: 123 },
          { title: 'Terra Ultimatum', duration: 124 },
          { title: 'Crescent Moon', duration: 126 },
          { title: 'Mind Awakening', duration: 150 }
        ],
        links: [{
          title: 'BandCamp',
          url: 'http://vortech.bandcamp.com'
        }, {
          title: 'Discogs',
          url: 'http://vortech.discogs.com'
        }]
      }, {
        id: 2,
        title: 'Wasteland',
        released: '2007-09-23 00:00:00',
        code: 'VOR002',
        songs: [
          { title: 'The Core', duration: 109 },
          { title: 'Evolutionary Project', duration: 240 },
          { title: 'Their Contract', duration: 180 },
          { title: 'Instigate Hostile Reaction', duration: 220 }
        ],
        links: [{
          title: 'BandCamp',
          url: 'http://vortech.bandcamp.com'
        }, {
          title: 'Discogs',
          url: 'http://vortech.discogs.com'
        }]
      }, {
        id: 3,
        title: 'Deep Beneath',
        released: '2008-03-06 00:00:00',
        code: 'VOR003',
        songs: [
          { title: 'The Awakening', duration: 219 },
          { title: 'Biodroid Legions', duration: 242 },
          { title: 'The Undying Storm', duration: 180 },
          { title: 'Shadow Shapes', duration: 199 }
        ],
        links: [{
          title: 'BandCamp',
          url: 'http://vortech.bandcamp.com'
        }, {
          title: 'Discogs',
          url: 'http://vortech.discogs.com'
        }]
      }]
    }
  }
}
</script>
