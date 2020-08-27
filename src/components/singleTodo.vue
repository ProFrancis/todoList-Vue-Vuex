<template>
  <div class="img">
    <div>
      <input type="checkbox" class="check-circle" v-model="completed" @click="pass_id(keys, completed)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    keys: Number,
    todo: Boolean
  },
  data () {
    return {
      completed: false,
    }
  },
  methods: {
    pass_id: function(id, status){
      this.$emit("current-id", id, status)
    }
  }
}
</script>

<style scoped>
  .img{
    margin-right: 1rem;
  }
</style>