<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#">TodList</b-nav-item>
          <b-nav-item href="#"><router-link to="/new">New</router-link></b-nav-item>
          <b-nav-item href="#"><router-link to="/list">list</router-link></b-nav-item>
          <b-nav-item href="#"><router-link to="/done">Done</router-link></b-nav-item>
          <b-nav-item href="#"><router-link to="/todo">Todo</router-link></b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<style scoped>
  .title{
    color: #fafafa;
  }
</style>