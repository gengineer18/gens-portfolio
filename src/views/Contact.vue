<template>
  <section class="contact">
    <v-layout justify-center>
      <v-icon color="blue darken-4">message</v-icon>
      <h1>Contact me</h1>
    </v-layout>
    <v-layout
            justify-center
            v-for="(contact, i) in contacts"
            :key="i"
    >
      <p>
        {{ contact.text }}:
        <a
                :href="contact.href"
                target="_blank"
        >
          {{ contact.account }}
        </a>
      </p>
    </v-layout>
  </section>
</template>

<script>
  export default {
    name: "Contact",
    data: () => {
      return {
        contacts: [
          {text: 'Twitter', account: '@gengineer18', href: 'https://twitter.com/gengineer18'},
          {text: "GitHub", account: 'gengineer18', href: 'https://github.com/gengineer18'},
          {text: 'Facebook', account: '妹尾 弦', href: 'https://www.facebook.com/gen.senoo'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  a {
    color: blue;

    &:hover {
      color: red;
    }
  }
</style>