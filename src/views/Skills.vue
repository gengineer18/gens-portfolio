<template>
    <section class="skills">
        <v-layout justify-center>
            <h1>This is my skills page</h1>
        </v-layout>


        <SkillCards :skills="markUp"/>
        <SkillCards :skills="frontEnd"/>
        <SkillCards :skills="backEnd"/>
        <SkillCards :skills="database"/>
        <SkillCards :skills="infrastructure"/>
        <SkillCards :skills="tools"/>

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
  import SkillCards from "@/components/SkillCards"

  export default {
    name: "Skills",
    components: {
      SkillCards
    },
    data: () => {
      return {
        markUp: [
          { name: 'HTML', years: 4, rate: 4 },
          { name: 'CSS', years: 4, rate: 4 },
          { name: 'SCSS', years: 0, rate: 2 }
        ],
        frontEnd: [
          { name: 'JavaScript', years: 1, rate: 2 },
          { name: 'Vue.js', years: 0, rate: 2 }
        ],
        backEnd: [
          { name: 'Java', years: 3, rate: 3 },
          { name: 'ESQL', years: 2, rate: 3 },
          { name: 'Bash', years: 0.5, rate: 2 },
          { name: 'Python', years: 0, rate: 1.5 }
        ],
        database: [
          { name: 'Oracle', years: 4.5, rate: 3.5 },
          { name: 'MySQL', years: 0, rate: 1.5 }
        ],
        infrastructure: [
          { name: 'GCP', years: 0, rate: 1 }
        ],
        tools: [
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

</style>