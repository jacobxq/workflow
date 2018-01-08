<template>
  <div class="hello">
    <h1 @click="testClick">{{ test }}</h1>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import cookies from 'browser-cookies'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'test'
    }
  },
  computed: {
    ...mapGetters(['test'])
  },
  mounted() {
    console.log(cookies.get('firstName'))
  },
  methods: {
    testClick () {
      console.log('test')
      this.$router.back()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
