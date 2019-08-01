<template>
  <section class="works">
    <v-layout justify-center>
      <v-icon color="blue darken-4">work</v-icon>
      <h1>My Works</h1>
    </v-layout>

    <transition-group name="works__animation" appear>
      <div class="works__animation-enter" :key="works">
        <v-layout row wrap>
          <v-flex v-for="work in works" :key="work.title" xs12 md6>
            <v-card class="ma-2">
              <v-card-title primary-title>
                <article>
                  <div>
                    <img class="works__img" :src="work.image_src" />
                  </div>

                  <p class="title">{{ work.title }}</p>
                  <v-divider/>
                  <p>{{ work.explain }}</p>
                  <p>
                    使った技術：
                    <span
                        v-for="(skill, i) in work.skills"
                        :key="i" class="works__lang"
                    >
                  {{ skill }}
                </span>
                  </p>
                  <v-btn
                      color="blue darken-4"
                      outline
                      @click="openDemoPage(work.href)"
                  >
                    Demo
                  </v-btn>
                </article>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </transition-group>

  </section>
</template>

<script>
  export default {
    name: "Works",
    data: () => {
      return {
        works: [
          {
            title: 'Santac-Lause',
            href: 'https://santac-lause3.appspot.com/',
            explain: '初めて作ったポートフォリオ用アプリケーションです。' +
              '自分のお気に入りを3つの選択肢として共有できるSNSチックなアプリです。(リファクタリング予定)',
            skills: ['Python', 'Django', 'Sass', 'Bootstrap', 'GAE',],
            image_src: require('../assets/work_image_santaclause.png')
          },
          {
            title: 'Portfolio Site',
            href: 'https://gens-portfolio.firebaseapp.com/',
            explain: 'このサイトのことです。Vue.jsの勉強を兼ねて作りました。' +
              'Nuxt.jsでの制作は少々過剰かなと思い、Vue CLI 3を採用しています。配色はあくまで自分の好みにしています。',
            skills: ['Vue.js', 'Vuetify'],
            image_src: require('../assets/work_image_portfolio.png')
          }
        ]
      }
    },
    methods: {
      openDemoPage: (href) => {
        window.open(href);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .works__lang:not(:first-child) {
    margin-left: 5px;
  }

  .works__animation-enter {
    opacity: 0;
    transform: translateY(20px);
  }

  .works__animation-enter-active {
    transition: all 1.5s;
  }

  .works__img {
    max-height: 120px;
  }
</style>