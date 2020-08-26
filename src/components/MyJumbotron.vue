<template>
  <div>
    <listTodo 
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
import listTodo from "./ListTodo"
import AddForm from "./AddForm"

export default {
  components: { listTodo, AddForm },
  props: {
    list: Array,
    addItem: Function,
    updateClass: Function
  }
}
</script>