<template>
  <div id="app">
    <MyHeader/>
    <MyJumbotron 
      :list="list" 
      :updateClass="update_class" 
      :addItem="add"
    />
  </div>
</template>

<script>
import axios from "axios"

// CONFIG
import { POST_URL } from '../config/routeRequest'

import MyJumbotron from './components/MyJumbotron.vue'
import MyHeader from './components/MyHeader.vue'

export default {
  name: 'App',
  components: { MyJumbotron, MyHeader },
  data () {
    return { 
      state: null,
      post: {}
    }
  },
  methods: {
    update_class: function(id, status){
      this.post[id].todo = status
    },
    add: function(newTodo){
      this.post = {
        id: 9,
        name: newTodo,
        todo: true
      }
      console.log(" IN ADD POST ---> ", this.post)
      this.getRequest(this.post.id, this.post)
    },
    async getRequest(id, body){
      try{
        const { data } = await axios.post(POST_URL + `:${id}`,body)
        this.state = data
        console.log("DATA POST ---> ", this.state)
      }catch(error){
        this.error = error
        console.error("ERRORS ---> ", error)
      }
      this.loading = false
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
