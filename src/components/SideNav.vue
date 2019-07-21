<template>
  <v-layout wrap>
    <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>

      <v-list class="pt-0">
        <v-list-tile v-for="item in items"
                     :key="item.title"
                     :to='item.link'>
          <v-list-tile-action>
            <v-icon color="blue darken-4">{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
  export default {
    name: "SideNav",
    data: () => {
      return {
        items: [
          {title: 'Home', icon: 'home', link: '/'},
          {title: 'About Me', icon: 'account_box', link: 'about'},
          {title: 'Skill Set', icon: 'laptop_mac', link: 'skills'},
          {title: 'My Works', icon: 'work', link: 'works'},
          {title: 'Contact Me', icon: 'message', link: 'contact'},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>