<template>
  <div class="hello">
    <h1 @click="testClick">{{ msg }}</h1>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import cookies from 'browser-cookies'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    testClick () {
      console.log(1)
      this.selectTest({test: 'test text'})
      this.$router.push({
        path: '/test'
      })
      cookies.set('firstName', 'Lisa')
    },
    ...mapActions(['selectTest'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  #app
    color: $color-theme
</style>
