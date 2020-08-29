<template>
  <div>
    <router-view
      :addItem="addItem"
      :update="updateClass"
      :delete="deleteClass"
      v-on:add-item="addItem"
    />
  </div>
</template>

<script>
export default {
  props: {
    addItem: Function,
    updateClass: Function,
    deleteClass: Function,
  }
}
</script>