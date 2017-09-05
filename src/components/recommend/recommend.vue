<template>
  <div></div>
</template>

<script>
import {api, common} from '@/api/api'
export default {
  data() {
    return {
      radioList: [],
      slider: [],
      songList: []
    }
  },
  methods: {
    recommand() {
      api.recommend().then((res) => {
        if (res.code === common.okCode) {
          this.radioList = res.data.radioList
          this.slider = res.data.slider
          this.songList = res.data.songList
        }
      })
    }
  },
  created() {
    this.recommand()
  }
}
</script>
 <style lang="stylus">
 
 </style>
 