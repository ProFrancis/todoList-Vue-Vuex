import Vue from 'vue'
import Vuex from 'vuex'

// ROUTES API 

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todo: []
  },
  mutations: {
    SET_GET(state, todo){
      state.todo = todo
    },
    MUT_POST(state, todo){
      state = todo
    },
    MUT_PUT(state, todo){
      state = todo
    }
  },
  actions: {
    ACTION_GET({commit}, data){
      commit('SET_GET', data)
    },
    ACTION_POST({commit}, data){
      commit('MUT_POST', data)
    },
    ACTION_PUT({commit}, data){
      commit('MUT_PUT', data)
    },
    ACTION_DELETE({commit}, data){
      commit('MUT_DELETE', data)
    }
  }
})