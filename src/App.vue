<template>
  <div id="app">
    <layout/>
  </div>
</template>

<script>
import Layout from './layouts/Layout.vue'

export default {
  name: 'app',
  components: {
    Layout
  }
}
</script>

<style>
  
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
