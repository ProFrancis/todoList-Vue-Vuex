<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    addItem: Function,
    updateClass: Function
  }
}
</script>