<template>
  <div>
    <button @click="deleteRequest(keys)">
      <b-icon icon="trash" aria-hidden="true"></b-icon>
    </button>
  </div>
</template>

<script>
import axios from "axios"

import { DELETE_URL } from '../../config/routeRequest'

export default {
  props: {
    keys: Number,
    forceRerender: Function
  },
  methods: {
    async deleteRequest(id){
      try{
        await axios.delete(DELETE_URL + `/${id}`)
        this.$store.dispatch('ACTION_DELETE', id)
      }catch(error){
        this.error = error
        console.error("ERRORS DELETE REQUEST --> ", this.error)
      }
    }
  }
}
</script>

<style scoped>
  button{
    border: none;
    cursor: pointer;
    background-color: #ffffff00;
  }
</style>