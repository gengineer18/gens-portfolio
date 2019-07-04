<template>
  <div id="app">
    <MyHeader />
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
  import MyHeader from "@/components/MyHeader";
  export default {
    components: {MyHeader}
  }
</script>