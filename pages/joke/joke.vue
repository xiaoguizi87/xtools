<template>
  <view>
    <view v-for="(item,index) in jokes" :key="index">
      {{ item.content }}
    </view>
  </view>
</template>

<script>
  const api =  require('../api.js').default

  export default {
    data() {
      return {
        jokes: []
      }
    },
    methods: {
      mounted() {

      }
    },
    onLoad() {
      console.log('hello')
      api.getRandJoke().then(x => {
        console.log(x)
        this.jokes = x
      })
    }
  }
</script>

<style lang="scss">

</style>
