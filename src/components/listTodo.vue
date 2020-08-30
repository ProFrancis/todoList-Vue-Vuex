<template v-slot:default="{ loading, error, state }">
  <section v-if="route === '/list'"> 
    <div v-if="slotDefault.loading">Loading ...</div>
    <div v-else-if="slotDefault.error">{{ slotDefault.error }}</div>
    <div v-else>
      <ul>
        <li class="block" v-for="(item, id) in slotDefault.state" :key="id">
          <div class="block" v-if="item.isActive && whatToDisplay == 'all' ">
            <SingleTodo :keys="item.id" v-on:current-id="update"/> 
            <div :class="{barre: !item.todo}" >
              {{ item.name }}
            </div>
            <DeleteForm :keys="item.id" v-on:delete-item="deleteItem"/>
          </div>
       </li>
      </ul>
    </div>
  </section>
  <section v-else-if="route === '/done'"> 
    <div v-if="slotDefault.loading">Loading ...</div>
    <div v-else-if="slotDefault.error">{{ slotDefault.error }}</div>
    <div v-else>
      <ul>
        <li class="block" v-for="(item, id) in slotDefault.state" :key="id">
          <div class="block" v-if="item.isActive && item.todo === false && whatToDisplay == 'done'">
            <SingleTodo :keys="item.id" v-on:current-id="update"/> 
            <div :class="{barre: !item.todo}" >
              {{ item.name }}
            </div>
            <DeleteForm :keys="item.id" v-on:delete-item="deleteItem"/>
          </div>
       </li>
      </ul>
    </div>
  </section>
    <section v-else> 
    <div v-if="slotDefault.loading">Loading ...</div>
    <div v-else-if="slotDefault.error">{{ slotDefault.error }}</div>
    <div v-else>
      <ul>
        <li class="block" v-for="(item, id) in slotDefault.state" :key="id">
          <div class="block" v-if="item.isActive && item.todo === true && whatToDisplay == 'todo'">
            <SingleTodo :keys="item.id" v-on:current-id="update"/> 
            <div :class="{barre: !item.todo}" >
              {{ item.name }}
            </div>
            <DeleteForm :keys="item.id" v-on:delete-item="deleteItem"/>
          </div>
       </li>
      </ul>
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