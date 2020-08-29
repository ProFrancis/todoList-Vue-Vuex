<template>
  <div id="app">
    <MyHeader/>
    <MyJumbotron 
      :addItem="add"
      :updateClass="update_class" 
      :deleteClass="delete_class"
      :key="componentKey"
    />
  </div>
</template>

<script>
import axios from "axios"

// COMPONENTS 
import MyJumbotron from './components/MyJumbotron.vue'
import MyHeader from './components/MyHeader.vue'

// CONFIG
import {  POST_URL, 
          PUT_URL, 
          DELETE_URL } from '../config/routeRequest'

export default {
  name: 'App',
  components: { MyJumbotron, MyHeader },
  data () {
    return { 
      state: null,
      post: {},
      componentKey: 0,
    }
  },
  methods: {
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
    update_class: function(id){
      this.putRequest(id)
      this.forceRerender()
    },    
    delete_class: function(id){
      this.deleteRequest(id)
    },
    async postRequest(id, body){
      try{
        const { data } = await axios.post(POST_URL + `:${id}`, body)
        this.state = data
        console.log("DATA POSTED --> ", this.state)
      }catch(error){
        console.error("ERRORS POST REQUEST --> ", error)
      }
    },
    async putRequest(id){
      try{
        const { data } = await axios.put(PUT_URL + `:${id}`)
        console.log(" DATA UPDATED --> ", data)
      }catch(error){
        console.error("ERRORS PUT REQUEST --> ", error)
      }
    },
    async deleteRequest(id){
      try{
        const { data } = await axios.delete(DELETE_URL + `:${id}`)
        console.log(" DATA DELETE --> ", data)
      }catch(error){
        console.error("ERRORS DELETE REQUEST --> ", error)
      }
    },
    forceRerender() {
      this.componentKey += 1;
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
