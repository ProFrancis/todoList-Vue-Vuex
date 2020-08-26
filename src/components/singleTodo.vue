<template>
  <div class="img">
    <div>
      <input type="checkbox" class="check-circle" v-model="completed" @click="pass_id(keys, completed)" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

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

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
</script>

<style scoped>
  .img{
    margin-right: 1rem;
  }
</style>