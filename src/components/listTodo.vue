<template>
  <section>
    <ul>
      <li class="listBox" v-for="item in list" :key="item.id">
        <SingleTodo :keys="item.id" :todo="item.todo" v-on:current-id="update"/> 
        <div :class="{barre: !item.todo}" >
          {{ item.name }}
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import SingleTodo from "./SingleTodo"

export default {
components: { SingleTodo },
 props: {
    list: Array,
    update: Function,
  }
}
</script>

<style scoped>
  .listBox {
    display: flex;
  }
  .barre{
    text-decoration: line-through;
  }
</style>