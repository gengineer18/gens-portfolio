<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>Gen's Portfolio Site</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <v-layout justify-center>
        <MyHeader/>
      </v-layout>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import 'normalize.css'
import MyHeader from "@/components/MyHeader";

export default {
  name: 'App',
  components: {
    MyHeader
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss">
  section {
    max-width: 980px;
    margin: auto;
  }

  article {
    text-align: left;
  }
</style>