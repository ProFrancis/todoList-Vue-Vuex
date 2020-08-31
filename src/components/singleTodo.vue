<template>
  <div class="img">
    <div>
      <button  :class="{barre: !data.todo}" @click="pass_id(keys)" >{{ data.name }}</button>
    </div>
  </div>
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
  }
}
</script>

<style scoped>
  .img{
    margin-right: 1rem;
  }
  .barre{
    text-decoration: line-through;
  }
</style>