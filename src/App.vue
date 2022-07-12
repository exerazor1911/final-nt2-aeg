<template>
  <div id="app">
    <AppTextoVue/>
  </div>
</template>

<script>

import AppTextoVue from './components/App-texto.vue'

export default {
  name: 'App',
  components: {
    AppTextoVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
