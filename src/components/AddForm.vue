<template>
  <b-container>
      <b-row class="justify-content-md-center">
        <b-nav-form>
          <b-input-group prepend="New Task">
            <b-form-input placeholder="todo" v-model="newTodo"></b-form-input>
            <button @click="add_item(newTodo)">+ Add</button>
          </b-input-group>
        </b-nav-form>
  </b-row>
  </b-container>
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
.form-inline{
  list-style: none;
}
</style>