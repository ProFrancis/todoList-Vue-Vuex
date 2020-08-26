<template>
  <div>
    <listTodo v-bind:list="item"/> 
  </div>
</template>

<script>
import listTodo from "./listTodo"

export default {
  components: { listTodo },
  props: {
    list: Array
  },
  data () {
    return {
      item: this.list
    }
  }
}
</script>