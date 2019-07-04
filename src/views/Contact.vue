<template>
  <section class="contact">
    <h1>Contact me</h1>
    <p v-for="contact in contacts" :key="contact.sns" @click="link()">
      {{ contact.sns }}:
      <a target="_blank">{{ contact.name }}</a>
    </p>
  </section>
</template>

<script>
export default {
  name: "Contact",
  data: () => {
    return {
      contacts: [
        { sns: 'Twitter', name: '@gengineer18', link: 'https://twitter.com/gengineer18' },
        { sns: "GitHub", name: 'gengineer18', link: 'https://github.com/gengineer18' },
        { sns: 'Facebook', name: '妹尾 弦', link: 'https://www.facebook.com/gen.senoo' },
        { sns: "Gmail", name: 'gengineer.web@gmail.com', link: 'gengineer.web@gmail.com' }
      ]
    }
  }
}
</script>

<style scoped>

</style>