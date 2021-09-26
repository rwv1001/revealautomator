<template>
  <div class="container">

    <div id="register_id" class="row">
      <div class="col-md">
        <h1>Register</h1>
        <form name="register-form" autocomplete="off">
          <input type="email" name="email" v-model="email"  placeholder="email" />
          <br />
          <input
            type="password"
            name="password"
            v-model="password"
            autocomplete="new-password"
            placeholder="password"
          />
        </form>
        <br />
        <div
          class="alert alert-danger"
          role="alert"
          v-if="error"
          v-html="error"
        />

        <br />
        <button class="btn btn-primary" @click="register">Register</button>
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
    async register() {
      try {
        this.error = null;
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
        name: 'presentations'})
        
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

</style>
