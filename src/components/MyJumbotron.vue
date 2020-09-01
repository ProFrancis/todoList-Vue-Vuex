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
        :slotDefault="slotDefault"
        :route="route"
        :addItem="addItem"
        :update="updateClass"
        :deleteItem="deleteClass"
        :getRequest="getRequest"
        v-on:add-item="addItem"
      />
    </b-jumbotron>
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