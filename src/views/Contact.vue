<template>
  <section class="contact">
    <v-layout justify-center>
      <v-icon color="blue darken-4">message</v-icon>
      <h1>Contact me</h1>
    </v-layout>

    <div class="contact__box">
      <p>
        お仕事のご依頼は、メールまたは各SNSのDMにて承ります。<br>
        お気軽にご相談ください。
      </p>
    </div>

    <v-layout justify-center
              v-for="(contact, i) in contacts"
              :key="i">
      <p class="flexiblebox">
        <i :class="contact.icon" class="fa-2x pr-2"/>
        {{ contact.text }}:
        <a :href="contact.href"
           target="_blank"
           class="pl-2">
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
          {text: 'Twitter', account: '@gengineer18', href: 'https://twitter.com/gengineer18', icon: 'fab fa-twitter '},
          {text: "GitHub", account: 'gengineer18', href: 'https://github.com/gengineer18', icon: 'fab fa-github'},
          {text: 'Facebook', account: '妹尾 弦', href: 'https://www.facebook.com/gen.senoo', icon: 'fab fa-facebook'}
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

  .contact__box {
    margin: 0 auto;
    width: 400px;
  }

  .flexiblebox {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center; /* 縦方向中央揃え（Safari用） */
    align-items: center; /* 縦方向中央揃え */
    -webkit-justify-content: center; /* 横方向中央揃え（Safari用） */
    justify-content: center; /* 横方向中央揃え */
  }
</style>