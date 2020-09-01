<template>
  <button :class="{barre: !data.todo}" @click="pass_id(keys)" >
    <b-icon :icon="cls(data.todo)" @click="pass_id(keys)" aria-hidden="true"></b-icon>
    {{ data.name }}
  </button>
</template>

<script>
export default {
  props: {
    keys: Number,
    data: Object
  },
  methods: {
    pass_id: function(id){
      this.$emit("current-id", id)
    },
    cls: function(todo){
     return !todo ?  "emoji-angry" : "check2-circle"
    },
  }
}
</script>

<style scoped>
  .img{
    margin-right: 1rem;
  }
  button{
    border: none;
    cursor: pointer;
    background-color: #ffffff00;
  }
  .barre{
    text-decoration: line-through;
  }
</style>