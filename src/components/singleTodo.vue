<template>
  <div class="img">
    <div>
      <input type="checkbox" class="check-circle" @click="pass_id(keys)"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    keys: Number,
  },
  methods: {
    pass_id: function(id){
      this.$emit("current-id", id)
    },
    delete_id: function(id){
      this.$emit("delete-id", id)
    }
  }
}
</script>

<style scoped>
  .img{
    margin-right: 1rem;
  }
</style>