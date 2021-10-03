<template>
  <div class="container">
    <div class="row">
      <nav class="navbar navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="#">
          <img
            src="/docs/4.0/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          Boostrap
        </a>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <router-link to="/register" class="btn red" v-if="!$store.state.isUserLoggedIn">Sign Up</router-link>            
          </li>
          <li class="nav-item">
            <router-link to="/login" class="btn red" v-if="!$store.state.isUserLoggedIn">Login</router-link>            
          </li> 
          <li class="nav-item">
            <button v-if="$store.state.isUserLoggedIn" class="btn btn-router-link" @click="listpresntations">List Presentations</button>            
          </li>         
          <li class="nav-item">
            <button v-if="$store.state.isUserLoggedIn" class="btn btn-router-link" @click="logout">Logout</button>            
          </li>          
        </ul>
      </nav>
    </div>
    <div id="header_id">.</div>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'Home'
      })
    },
    listpresntations () {
      this.$router.push({
        name: 'presentations'
      })
    }
  }
};
</script>

<style scoped>
#header_id {
  padding-bottom: 60px;
}
</style>
