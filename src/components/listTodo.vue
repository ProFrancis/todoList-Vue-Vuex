<template v-slot:default="{ loading, error, state }">
  <section>
    <div v-if="loading">Loading ...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <ul>
        <li class="block" v-for="(item, id) in state" :key="id">
          <div class="block" v-if="item.isActive">
            <SingleTodo :keys="item.id" v-on:current-id="update"/> 
            <div :class="{barre: !item.todo}" >
              {{ item.name }}
            </div>
          </div>
       </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from "axios"

// COMPONENTS
import SingleTodo from "./SingleTodo"

// CONFIG
import { GET_URL } from '../../config/routeRequest'

export default {
components: { SingleTodo },
  props: {
    update: Function,
  },
  data () {
    return {
      loading: true,
      state: null,
      error: false
    }
  },
  mounted () {
    this.getRequest()
  },
  methods: {
    async getRequest(){
      try{
        this.loading = true
        const { data } = await axios.get(GET_URL)
        this.state = data
        console.log(this.state)
      }catch(error){
        this.data = null
        this.error = error
      }
      this.loading = false
    }
  },
  render(){
    return this.$scopedSlots.default({
      loading: this.loading,
      error: this.error,
      state: this.state
    })
  }
}
</script>

<style scoped>
  .block {
    display: flex;
  }
  .barre{
    text-decoration: line-through;
  }
</style>