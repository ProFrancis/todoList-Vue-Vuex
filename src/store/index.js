import Vue from 'vue'
import Vuex from 'vuex'

// ROUTES API 

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todo: ''
  },
  mutations: {
    getTodo(payload){
      console.log("DANS LE STORE => Mutation ", payload)
    }
  },
  actions: {
      actionTodo(context, data){
        context.commit('getTodo', data)
      }
  }
})