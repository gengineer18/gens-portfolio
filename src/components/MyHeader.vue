<template>
  <header>
    <nav id="nav">
      <v-icon small color="blue darken-4">home</v-icon>
      <router-link to="/">Home</router-link> |

      <v-icon small color="blue darken-4">account_box</v-icon>
      <router-link to="/about">About Me</router-link> |

      <v-icon small color="blue darken-4">laptop_mac</v-icon>
      <router-link to="/skills">Skill Set</router-link> |

      <v-icon small color="blue darken-4">work</v-icon>
      <router-link to="/works">My Works</router-link> |

      <v-icon small color="blue darken-4">message</v-icon>
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
    color: darkblue;

    &.router-link-exact-active {
      color: red;
    }
  }
}
</style>