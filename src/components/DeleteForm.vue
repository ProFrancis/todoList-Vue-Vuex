<template>
  <div>
    <button @click="delete_id(keys)">X</button>
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