<template>
  <div>
    <button @click="delete_id(keys)">
      <b-icon icon="trash" aria-hidden="true"></b-icon>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    keys: Number
  },
  methods: {
    delete_id: function(id){
      this.$emit("delete-item", id)
    }
  }
}
</script>

<style scoped>
  button{
    border: none;
    cursor: pointer;
    background-color: #ffffff00;
  }
</style>