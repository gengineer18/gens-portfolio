<template>
  <section class="contact">
    <v-layout justify-center>
      <v-icon color="blue darken-4">message</v-icon>
      <h1>Contact me</h1>
    </v-layout>

    <transition-group name="slide--contact"
                      appear>
      <div class="slide--contact-enter"
           :key="contacts">
        <div class="contact__box">
          <p>
            お仕事のご依頼は、各SNSのDMにて承ります。<br>
            お気軽にご相談ください。
          </p>
        </div>

        <v-layout justify-center
                  v-for="(contact, i) in contacts"
                  :key="i">
          <a :href="contact.href"
             target="_blank"
             class="pl-2 mb-3">
        <button class="flexiblebox" :class="contact.borderColor">
          <i :class="contact.icon" class="fa-2x pr-2"/>
          {{ contact.text }}: {{ contact.account }}
        </button>
          </a>
        </v-layout>
      </div>
    </transition-group>
  </section>
</template>

<script>
  export default {
    name: "Contact",
    data: () => {
      return {
        contacts: [
          {
            text: 'Twitter',
            account: '@gengineer18',
            href: 'https://twitter.com/gengineer18',
            icon: 'fab fa-twitter fa-twitter-color',
            borderColor: 'border-twitter-color'
          },
          {
            text: "GitHub",
            account: 'gengineer18',
            href: 'https://github.com/gengineer18',
            icon: 'fab fa-github fa-github-color',
            borderColor: 'border-github-color'
          },
          {
            text: 'Facebook',
            account: '妹尾 弦',
            href: 'https://www.facebook.com/gen.senoo',
            icon: 'fab fa-facebook fa-facebook-color',
            borderColor: 'border-facebook-color'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  a {
    color: blue;
    text-decoration: none;

    &:hover {
      color: red;
    }
  }

  .contact__box {
    margin: 0 auto;
    width: 400px;
    text-align: center;
  }

  .slide--contact-enter-active {
    transition: all 1.5s;
  }

  .slide--contact-enter {
    opacity: 0;
    transform: translateY(10px);
  }

  .flexiblebox {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center; /* 縦方向中央揃え（Safari用） */
    align-items: center; /* 縦方向中央揃え */
    -webkit-justify-content: center; /* 横方向中央揃え（Safari用） */
    justify-content: center; /* 横方向中央揃え */
    border: 2px solid;
    width: 240px;
    padding: 8px;
  }

  .fa-twitter-color, .border-twitter-color {
    color: #1DA1F2;
  }

  .fa-github-color, .border-github-color {
    color: #24292E;
  }

  .fa-facebook-color, .border-facebook-color {
    color: #3C5A99;
  }
</style>