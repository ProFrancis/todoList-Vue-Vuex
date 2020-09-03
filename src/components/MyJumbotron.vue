<template>
  <div>
    <b-jumbotron>
      <template v-slot:header>Todo List</template>
      <template v-slot:lead>
        New Features we will have to donne for this project
      </template>
      <hr class="my-4">
      <p>
        easy to use, we created this web app just for you !
      </p>
      <router-view
        :route="route"
        :slotDefault="slotDefault"
      />
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  props: {
    route: String,
    slotDefault: Object,
  }
}
</script>