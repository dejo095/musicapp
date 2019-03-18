<template>
  <v-container class="mt-5">
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-toolbar flat dense color="info" dark>
            <v-toolbar-title>SignIn</v-toolbar-title>
          </v-toolbar>

          <div>
            <v-text-field class="pl-4 pr-4 pt-4" label="Email address"
              v-model="email"
              required></v-text-field>

            <v-text-field class="pl-4 pr-4" label="Password"
              v-model="password"
              required></v-text-field>

            <div class="error" v-html="error">{{error}}></div>

            <v-btn color="info"
              @click="login"
              >SignIn</v-btn>

          </div>

        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {

      try {

        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })

      } catch (error) {
        this.error = error.response.data.error
      }

    }
  }
}
</script>

<style lang="stylus" scoped>
  input
    margin: 10px auto;
</style>

