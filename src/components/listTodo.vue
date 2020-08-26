<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <imgs /> {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import imgs from "./singleTodo"

export default {
components: { imgs },
 props: {
    list: Array
  }
}
</script>

<style scoped>

</style>