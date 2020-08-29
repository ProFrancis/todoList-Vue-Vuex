<template>
  <section class="block">
    <div class="blockTwo">
      <label for="todo">New Item : {{ newTodo }}</label>
    </div>
    <div class="blockThree">
      <input type="text" id="todo" placeholder="Name" v-model="newTodo">
      <button @click="add_item(newTodo)">+</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Form',
  props: {
    addItem: Function
  },
  data () {
    return {
      newTodo: ''
    }
  },
  methods: {
    add_item: function(newItem){
      this.$emit("add-item", newItem)
      this.newTodo = ''
    },
  }
}
</script>

<style scoped>
.block{
  display:flex; 
  flex-direction: column; 
  width: 300px;
}
.blockTwo{
  text-align: initial;
}
.blockThree{
  display: flex;
}
</style>