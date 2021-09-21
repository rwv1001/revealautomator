<template>
  <div class="container">

    <div id="login_id" class="row">
      <div class="col-md">
        <h1>Login</h1>
        <input type="email" name="email" v-model="email" placeholder="email" />
        <br />
        <input
          type="password"
          name="password"
          v-model="password"
          placeholder="password"
        />
        <br />
        <div
          class="alert alert-danger"
          role="alert"
          v-if="error"
          v-html="error"
        />

        <br />
        <button class="btn btn-primary" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        this.error = null;
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
#login_id {
  padding-top: 60px;
}
</style>
