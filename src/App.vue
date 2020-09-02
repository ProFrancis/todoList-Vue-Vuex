<template>
  <div id="app">
    <MyHeader/>
    <MyJumbotron
      :route="$route.fullPath"
      :slotDefault="{loading, error}"
      :updateClass="update_class" 
      :deleteClass="delete_class"
      :forceRerender="forceRerender"
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
          PUT_URL, 
          DELETE_URL } from '../config/routeRequest'

export default {
  name: 'App',
  components: { MyJumbotron, MyHeader },
  data () {
    return { 
      id: 0,
      state: {},
      date: null,
      error: false,
      loading: true,
      componentKey: 0,
    }
  },
  computed: {
    getRoute() {
      return this.$route.params
    },
  },
  mounted () {
    this.getRequest()
 },
  methods: {
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
        this.$store.dispatch('ACTION_GET', data) 
      }catch(error){
        this.error = error
        console.error("ERRORS GET REQUEST --> ", this.error)
      }
      this.loading = false
    },
    async putRequest(id){
      try{
        const { data } = await axios.put(PUT_URL + `/${id}`)
        console.log(" DATA UPDATED --> ", data)
        this.forceRerender()
      }catch(error){
        this.error = error
        console.error("ERRORS PUT REQUEST --> ", this.error )
      }
    },
    async deleteRequest(id){
      try{
        const { data } = await axios.delete(DELETE_URL + `/${id}`)
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
  background-color: gray;
}
a{
  margin: 1rem;
  color: black;
  text-decoration: none;
}
li{
  list-style: none;
  text-align: center;
}
</style>
