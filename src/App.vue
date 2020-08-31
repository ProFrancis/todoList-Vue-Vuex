<template>
  <div id="app">
    <MyHeader/>
    <MyJumbotron
      :getRequest="getRequest" 
      :route="$route.fullPath"
      :slotDefault="{loading, error, state}"
      :addItem="post_class"
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
import {  GET_URL,
          POST_URL, 
          PUT_URL, 
          DELETE_URL } from '../config/routeRequest'

export default {
  name: 'App',
  components: { MyJumbotron, MyHeader },
  data () {
    return { 
      state: {},
      post: {},
      id: 0,
      componentKey: 0,
      loading: true,
      error: false
    }
  },
  mounted () {
    this.getRequest()
  },
  updated: function () {
    console.log("HOOKS UPDATED ")
  },
  computed: {
    getRoute() {
      return this.$route.params
    }
  },
  methods: {
    post_class: function(newTodo){
      this.post = {
        id: this.id++,
        name: newTodo,
        todo: true,
        isActive: true,
        createdAt: "date"
      }
      this.postRequest(this.post.id, this.post)
    },
    update_class: function(id){
      this.putRequest(id)
    },    
    delete_class: function(id){
      this.deleteRequest(id)
    },    
    async getRequest(){
      this.loading = true
      try{
        const { data } = await axios.get(GET_URL)
        this.state = data
        this.id = data.length
        console.log("DATA GET --> ",  data)
      }catch(error){
        this.error = error
        console.error("ERRORS GET REQUEST --> ", this.error)
      }
      this.loading = false
    },
    async postRequest(id, body){
      try{
        const { data } = await axios.post(POST_URL + `:${id}`, body)
        console.log("DATA POSTED --> ", data)
      }catch(error){
        this.error = error
        console.error("ERRORS POST REQUEST --> ", this.error )
      }
    },
    async putRequest(id){
      try{
        const { data } = await axios.put(PUT_URL + `:${id}`)
        console.log(" DATA UPDATED --> ", data)
        this.forceRerender()
      }catch(error){
        this.error = error
        console.error("ERRORS PUT REQUEST --> ", this.error )
      }
    },
    async deleteRequest(id){
      try{
        const { data } = await axios.delete(DELETE_URL + `:${id}`)
        console.log(" DATA DELETE --> ", data)
        this.forceRerender()
      }catch(error){
        this.error = error
        console.error("ERRORS DELETE REQUEST --> ", this.error)
      }
    },
    forceRerender: function() {
      this.componentKey += 1;
    },
    render(){
      return this.$scopedSlots.default({
        loading: this.loading,
        error: this.error,
        state: this.state
      })
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
