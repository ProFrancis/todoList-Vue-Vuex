<template>
  <div>
    <router-view
      :slotDefault="slotDefault"
      :route="route"
      :addItem="addItem"
      :update="updateClass"
      :delete="deleteClass"
      :getRequest="getRequest"
      v-on:add-item="addItem"
    />
  </div>
</template>

<script>
export default {
  props: {
    slotDefault: Object,
    route: String,
    addItem: Function,
    getRequest: Function,
    updateClass: Function,
    deleteClass: Function,
  }
}
</script>