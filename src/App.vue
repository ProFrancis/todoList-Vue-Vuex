<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MyJumbotron v-bind:list="list" />
  </div>
</template>

<script>
import MyJumbotron from './components/MyJumbotron.vue'

export default {
  name: 'App',
  components: {
    MyJumbotron
  },
  data () {
    return {
      list: [
        {id: 0, name: "Ecrire le sujet", todo: true},
        {id: 1, name: "Faire le sujet", todo: true},
        {id: 2, name: "Vendre le sujet", todo: true},
        {id: 3, name: "Partir en vaccances", todo: true},
      ]
    }
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
