<template>
  <section class="skills">
    <v-layout justify-center>
      <v-icon color="blue darken-4">laptop_mac</v-icon>
      <h1>Skill Set</h1>
    </v-layout>

    <transition-group name="skill-lists-animation" appear>
      <div class="skill-lists-animation-enter" :key="explainFrontEnd">
        <SkillLists :explain="explainMarkUp" :title="titleMarkUp" :skills="skillsMarkUp" class="skillLists"/>

        <SkillLists :explain="explainFrontEnd" :title="titleFrontEnd" :skills="skillsFrontEnd" class="skillLists"/>

        <SkillLists :explain="explainBackEnd" :title="titleBackEnd" :skills="skillsBackEnd" class="skillLists"/>

        <SkillLists :explain="explainDatabase" :title="titleDatabase" :skills="skillsDatabase" class="skillLists"/>

        <SkillLists :explain="explainInfra" :title="titleInfra" :skills="skillsInfra" class="skillLists"/>

        <SkillLists :explain="explainTools" :title="titleTools" :skills="skillsTools" class="skillLists"/>

        <v-layout row wrap>
          <v-flex v-for="(license, index) in licenses" :key="index" xs12 md6>
            <v-card class="ma-3 pa-3">
              <h3>{{ license.name }}</h3>
              <v-divider/>
              <p>取得年: {{ license.year }}</p>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </transition-group>
  </section>
</template>

<script>
  import SkillLists from "@/components/SkillLists"

  export default {
    name: "Skills",
    components: {
      SkillLists
    },
    data: () => {
      return {
        titleMarkUp: "マークアップ",
        explainMarkUp: "基本的なところはWeb制作アルバイトで身につけました。",
        skillsMarkUp: [
          {name: 'HTML', years: 4, rate: 4},
          {name: 'CSS', years: 4, rate: 4},
          {name: 'SCSS', years: 0, rate: 2}
        ],


        titleFrontEnd: "フロントエンド",
        explainFrontEnd: "Vue.jsは独学ではありますが、このWebサイトはVue.jsで制作しています。",
        skillsFrontEnd: [
          {name: 'JavaScript', years: 1, rate: 2},
          {name: 'Vue.js', years: 0, rate: 2}
        ],

        titleBackEnd: "バックエンド",
        explainBackEnd: "SIer時代に身につけた言語です。Javaによる開発経験は豊富です。",
        skillsBackEnd: [
          {name: 'Java', years: 3, rate: 3},
          {name: 'ESQL', years: 2, rate: 3},
          {name: 'Bash', years: 0.5, rate: 2},
          {name: 'Python', years: 0, rate: 1.5}
        ],

        titleDatabase: "データベース",
        explainDatabase: "OR Mapperを使うよりも生のSQLの方が自信ありです。",
        skillsDatabase: [
          {name: 'Oracle', years: 4.5, rate: 3.5},
          {name: 'MySQL', years: 0, rate: 1.5}
        ],

        titleInfra: "インフラ",
        explainInfra: "公開している自作アプリはGCPを使ってデプロイしています。",
        skillsInfra: [
          {name: 'GCP / Firebase', years: 0, rate: 1}
        ],

        titleTools: "ツール",
        explainTools: "これまでに業務などで使用経験のあるツール類です",
        skillsTools: [
          {name: 'FireWorks', years: 2.5, rate: 3},
          {name: 'Subversion', years: 4, rate: 3},
          {name: 'Redmine', years: 0.5, rate: 2},
          {name: 'Git', years: 0, rate: 1},
          {name: 'Excel/VBA', years: 5, rate: 4}
        ],

        licenses: [
          {name: '基本情報技術者', year: 2015},
          {name: 'TOEIC 790点', year: 2019}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .skillLists {
    margin: 10px;
  }

  .skill-lists-animation-enter {
    opacity: 0;
    transform: translateY(20px);
  }

  .skill-lists-animation-enter-active {
    transition: all 1.5s;
  }

</style>