<template>
  <v-toolbar fixed color="info" dark>
    <v-btn to="home" dark flat>
      <v-toolbar-title>MusicApp</v-toolbar-title>
    </v-btn>

    <v-toolbar-items>
      <v-btn flat dark>Browse</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn to="register" flat dark>SignUp</v-btn>
    </v-toolbar-items>

    <v-toolbar-items>
      <v-btn to="login" flat dark>SignIn</v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {

}
</script>

