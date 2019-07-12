<template>
    <section class="skills">
        <v-layout justify-center>
            <h2>Skill Set</h2>
        </v-layout>

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
        explainMarkUp: "マークアップ言語です",
        skillsMarkUp: [
          { name: 'HTML', years: 4, rate: 4 },
          { name: 'CSS', years: 4, rate: 4 },
          { name: 'SCSS', years: 0, rate: 2 }
        ],


        titleFrontEnd: "フロントエンド",
        explainFrontEnd: "フロントエンドです",
        skillsFrontEnd: [
          { name: 'JavaScript', years: 1, rate: 2 },
          { name: 'Vue.js', years: 0, rate: 2 }
        ],

        titleBackEnd: "バックエンド",
        explainBackEnd: "バックエンドです",
        skillsBackEnd: [
          { name: 'Java', years: 3, rate: 3 },
          { name: 'ESQL', years: 2, rate: 3 },
          { name: 'Bash', years: 0.5, rate: 2 },
          { name: 'Python', years: 0, rate: 1.5 }
        ],

        titleDatabase: "データベース",
        explainDatabase: "データベースです",
        skillsDatabase: [
          { name: 'Oracle', years: 4.5, rate: 3.5 },
          { name: 'MySQL', years: 0, rate: 1.5 }
        ],

        titleInfra: "インフラ",
        explainInfra: "インフラです",
        skillsInfra: [
          { name: 'GCP', years: 0, rate: 1 }
        ],

        titleTools: "ツール",
        explainTools: "ツールです",
        skillsTools: [
          { name: 'FireWorks', years: 2.5, rate: 3 },
          { name: 'subversion', years: 4, rate: 3 },
          { name: 'Git', years: 0, rate: 1 },
          { name: 'Excel/VBA', years: 5, rate: 4 }
        ],

        licenses: [
          { name: '基本情報技術者', year: 2015 },
          { name: 'TOEIC 790点', year: 2019 }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.skillLists{
    margin: 10px;
}
</style>