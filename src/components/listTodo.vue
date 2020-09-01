<template v-slot:default="{ loading, error , state }">
  <section v-if="route === '/list'"> 
    <div v-if="slotDefault.error">{{ slotDefault.error }}</div>
    <div v-else>  
      <b-container>
        <b-row align-v="center">
          <b-col md="6" offset-md="3">
            <ul>
              <li class="block" v-for="(item, id) in slotDefault.state" :key="id">
                <b-col md="6" offset-md="3" class="block" v-if="item.isActive && whatToDisplay == 'all' ">
                  <SingleTodo :keys="item.id" :data="item" v-on:current-id="update"/> 
                  <DeleteForm :keys="item.id" v-on:delete-item="deleteItem"/>
                </b-col>
              </li>
            </ul>
          </b-col>
        </b-row >
      </b-container>
    </div>
  </section>
  <section v-else-if="route === '/done'"> 
    <div v-if="slotDefault.loading">Loading ...</div>
    <div v-else-if="slotDefault.error">{{ slotDefault.error }}</div>
    <div v-else>
      <b-container>
        <b-row align-v="center">
          <b-col md="6" offset-md="3">
            <ul>
              <li class="block" v-for="(item, id) in slotDefault.state" :key="id">
                <b-col md="6" offset-md="3" class="block" v-if="item.isActive && item.todo === false && whatToDisplay == 'done'">
                  <SingleTodo :keys="item.id" :data="item" v-on:current-id="update"/> 
                  <DeleteForm :keys="item.id" v-on:delete-item="deleteItem"/>
                </b-col>
              </li>
            </ul>
          </b-col>
        </b-row >
      </b-container>
    </div>
  </section>
    <section v-else> 
    <div v-if="slotDefault.loading">Loading ...</div>
    <div v-else-if="slotDefault.error">{{ slotDefault.error }}</div>
    <div v-else>
      <b-container>
        <b-row align-v="center">
          <b-col md="6" offset-md="3">
            <ul>
              <li class="block" v-for="(item, id) in slotDefault.state" :key="id">
                <b-col md="6" offset-md="3" class="block" v-if="item.isActive && item.todo === true && whatToDisplay == 'todo'">
                  <SingleTodo :keys="item.id" :data="item" v-on:current-id="update"/> 
                  <DeleteForm :keys="item.id" v-on:delete-item="deleteItem"/>
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

export default {
components: { SingleTodo, DeleteForm },
  props: {
    slotDefault: Object,
    route: String,
    getRequest: Function,
    update: Function,
    deleteItem: Function,
    whatToDisplay: String
  },
  mounted () {
    this.getRequest()
  },
  beforeUpdate (){
    console.log("BEFORE UPDATED => ", this.whatToDisplay)
  }
}
</script>

<style scoped>
  .block {
    display: flex;
  }
</style>