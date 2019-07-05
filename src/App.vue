<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>Gen's Portfolio Site</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <MyHeader/>
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

</style>