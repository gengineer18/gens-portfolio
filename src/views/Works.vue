<template>
  <section class="works">
    <v-layout justify-center>
      <h1>This is my works page</h1>
    </v-layout>

    <v-layout row wrap>
      <v-flex v-for="work in works" :key="work.title" xs12 md6>
        <v-card class="ma-2">
          <v-card-title primary-title>
            <article>
              <p class="title">{{ work.title}}</p>
              <v-divider></v-divider>
              <p>{{ work.explain}}</p>
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
                color="blue"
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

  </section>
</template>

<script>
  export default {
    name: "Works",
    data: () => ({
      works: [
        {
          title: 'Santac-lause',
          href: 'https://santac-lause3.appspot.com/',
          explain:'初めて作ったポートフォリオ用アプリケーションです。' +
            '自分のお気に入りを3つの選択肢として共有できるSNSチックなアプリです。(リファクタリング予定)',
          skills:['Python', 'Django', 'Sass', 'Bootstrap','GAE',]
        },
        { title: 'Portfolio Site',
          href: 'https://www.google.co.jp', // 一旦Googleにリンクを仮置き
          explain:'このサイトのことです。Vue.jsの勉強を兼ねて作りました。' +
            'Nuxt.jsでの制作は少々過剰かなと思い、Vue CLI 3を採用しています。配色はあくまで自分の好みにしています。',
          skills:['Vue.js','Vuetify']
        }
      ]
    }),
    methods: {
      openDemoPage: (href) => {
        window.open(href);
      }
    }
  }
</script>

<style scoped>
.works {
  max-width: 980px;
  margin: auto;
}
.works__lang:not(:first-child){
    margin-left: 5px;
}
</style>