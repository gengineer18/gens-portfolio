<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="OpenSideMenu"/>
      <v-toolbar-title class="headline">
        <span>Gen Senoo's Portfolio Site</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-layout justify-center>
        <MyHeader/>
      </v-layout>
      <router-view/>
    </v-content>
    <SideNav/>
  </v-app>
</template>

<script>
  import 'normalize.css'
  import MyHeader from "@/components/MyHeader";
  import SideNav from "@/components/SideNav";

  export default {
    name: 'App',
    components: {
      MyHeader,
      SideNav,
    },
    data() {
      return {
        //
      }
    },
    methods: {
      OpenSideMenu() {
        this.$store.dispatch('toggleSideMenu')
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