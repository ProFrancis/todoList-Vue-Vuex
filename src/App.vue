<template>
  <div id="app">
    <MyHeader/>
    <MyJumbotron 
      :updateClass="update_class" 
      :addItem="add"
    />
  </div>
</template>

<script>
import axios from "axios"

// CONFIG
import { POST_URL, PUT_URL } from '../config/routeRequest'

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
    update_class: function(id){
      this.putRequest(id)
    },
    add: function(newTodo){
      this.post = {
        id: 2,
        name: newTodo,
        todo: true,
        isActive: true,
        createdAt: "date"
      }
      this.postRequest(this.post.id, this.post)
    },
    async postRequest(id, body){
      try{
        const { data } = await axios.post(POST_URL + `:${id}`,body)
        this.state = data
        console.log("DATA POSTED --> ", this.state)
      }catch(error){
        console.error("ERRORS POST REQUEST --> ", error)
      }
      this.loading = false
    },
    async putRequest(id){
      try{
        const { data } = await axios.put(PUT_URL + `:${id}`)
        console.log(" DATA UPDATED --> ", data)
      }catch(error){
        console.error("ERRORS PUT REQUEST --> ", error)
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
