<template>
  <div class="register">

    <h1>This is an register page</h1>
    <input v-model="email" type="email" placeholder="Email">
    <br>
    <input v-model="password" type="password">
    <br>
    <button @click="register">REGISTER</button>

  </div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
    }
  }
}
</script>

<style lang="stylus" scoped>
  input
    margin: 10px auto;
</style>

