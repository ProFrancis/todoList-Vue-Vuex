<template>
  <div>
    <router-view
      :addItem="addItem"
      :update="updateClass"
      v-on:add-item="addItem"
    />
  </div>
</template>

<script>
export default {
  props: {
    addItem: Function,
    updateClass: Function
  }
}
</script>