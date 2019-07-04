<template>
  <header>
    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About Me</router-link> |
      <router-link to="/skills">Skill Set</router-link> |
      <router-link to="/works">My Works</router-link> |
      <router-link to="/contact">Contact me</router-link>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "MyHeader"
  }
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>