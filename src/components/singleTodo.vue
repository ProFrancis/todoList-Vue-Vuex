<template>
  <button :class="{barre: !data.todo}" @click="putRequest(keys)" >
    <b-icon :icon="cls(data.todo)" @click="putRequest(keys)" aria-hidden="true"></b-icon>
    {{ data.name }}
  </button>
</template>

<script>
import axios from "axios"

import { PUT_URL } from '../../config/routeRequest'

export default {
  props: {
    keys: Number,
    data: Object,
    forceRerender: Function
  },
  data (){
    return {
      error: ""
    }
  },
  methods: {
    cls: function(todo){
     return !todo ?  "emoji-angry" : "check2-circle"
    },
    async putRequest(id){
      try{
        const { data } = await axios.put(PUT_URL + `/${id}`)
        this.$store.dispatch('ACTION_PUT', data)
        this.forceRerender()
      }catch(error){
        this.error = error
        console.error("ERRORS PUT REQUEST --> ", this.error )
      }
    }
  }
}
</script>

<style scoped>
  .img{
    margin-right: 1rem;
  }
  button{
    border: none;
    cursor: pointer;
    background-color: #ffffff00;
  }
  .barre{
    text-decoration: line-through;
  }
</style>