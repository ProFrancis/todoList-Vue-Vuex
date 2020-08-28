<template>
  <div>
    <ListTodo 
      :list="list" 
      :update="updateClass"
    /> 
    <AddForm
      :addItem="addItem"
      v-on:add-item="addItem"
    />
  </div>
</template>

<script>
import ListTodo from "./ListTodo"
import AddForm from "./AddForm"

export default {
  components: { ListTodo, AddForm },
  props: {
    list: Array,
    addItem: Function,
    updateClass: Function
  }
}
</script>