import Vue from 'vue'
import Router from 'vue-router'
import AddForm from './components/AddForm.vue'
import ListTodo from './components/ListTodo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/new', 
      name: "new",
      component: AddForm 
    },{
      path: '/list', 
      name: "list",
      component: ListTodo,
      props: {whatToDisplay: "all"}
    },{
      path: '/done', 
      name: "done",
      component: ListTodo,
      props: {whatToDisplay: "done"}
    },{
      path: '/todo', 
      name: "todo",
      component: ListTodo,
      props: {whatToDisplay: "todo"}
    }
  ]
})