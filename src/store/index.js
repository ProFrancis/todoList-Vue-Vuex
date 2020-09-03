import Vue from 'vue'
import Vuex from 'vuex'

// ROUTES API 

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todo: []
  },
  mutations: {
    MUT_GET(state, todo){
      state.todo = todo
    },
    MUT_POST(state, todo){
      state.todo.push(todo)
    },
    MUT_PUT(state, id){
      state.todo.map(item => {
        if(item.id === id) item.todo = !item.todo ? true : false
      })
    },
    MUT_DELETE(state, id){
      state.todo.map(item => item.id === id ? item.isActive = false : true)
    }
  },
  actions: {
    ACTION_GET({commit}, data){
      commit('MUT_GET', data)
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
  },
  getters: {
    getList: (state) => state.todo.length,
    getTodo: (state) => (data) => {
      if(data === "all")  return state.todo
      if(data === "done") return state.todo.filter(item => item.todo === false)
      if(data === "todo") return state.todo.filter(item => item.todo === true) 
    }
  }
})