<template v-slot:default="{ loading, error }">
  <section> 
    <div v-if="slotDefault.error">{{ slotDefault.error }}</div>
    <div v-else>  
      <b-container>
        <b-row align-v="center">
          <b-col md="6" offset-md="3">
            <ul>
              <li class="block" v-for="(value, id) in result" :key="id">
                <b-col md="6" offset-md="3" class="block" v-if="value.isActive">
                  <SingleTodo :keys="value.id" :data="value" :forceRerender="forceRerender"/> 
                  <DeleteForm :keys="value.id" :forceRerender="forceRerender"/>
                </b-col>
              </li>
            </ul>
          </b-col>
        </b-row >
      </b-container>
    </div>
  </section>
</template>

<script>
// COMPONENTS
import SingleTodo from "./SingleTodo"
import DeleteForm from "./DeleteForm"

import { mapState } from 'vuex'

export default {
components: { SingleTodo, DeleteForm },
  props: {
    route: String,
    slotDefault: Object,
    deleteItem: Function,
    whatToDisplay: String,
    forceRerender: Function
  },
  data () {
    return {
      result: ""
    }
  },
  beforeUpdate(){
    if(this.whatToDisplay === "all"){
      this.result = this.todo
    }else if(this.whatToDisplay === "done"){
      this.result = this.todo.map(item => item.todo === false ? item : "")
    }else if(this.whatToDisplay === "todo"){
      this.result = this.todo.map(item => item.todo === true ? item : "") 
    }
  },
  computed: mapState([
    'todo'
  ])
}
</script>

<style scoped>
  .block {
    display: flex;
  }
</style>