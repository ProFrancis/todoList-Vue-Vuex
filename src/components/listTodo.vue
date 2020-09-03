<template v-slot:default="{ loading, error }">
  <section> 
    <div v-if="slotDefault.error">{{ slotDefault.error }}</div>
    <div v-else>  
      <b-container>
        <b-row align-v="center">
          <b-col md="6" offset-md="3">
            <ul>
              <li class="block" v-for="(value, id) in getTodo(whatToDisplay)" :key="id">
                <b-col md="6" offset-md="3" class="block" v-if="value.isActive">
                  <SingleTodo :keys="value.id" :data="value"/> 
                  <DeleteForm :keys="value.id"/>
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

import { mapGetters } from 'vuex'

export default {
components: { SingleTodo, DeleteForm },
  props: {
    route: String,
    slotDefault: Object,
    deleteItem: Function,
    whatToDisplay: String,
  },
  computed: mapGetters([
    'getTodo'
  ])
}
</script>

<style scoped>
  .block {
    display: flex;
  }
</style>