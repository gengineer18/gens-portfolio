<template>
  <section class="skills">
    <h1>This is my skills page</h1>
    <v-flex v-for="mu in markUp" :key="mu.name">
      <p>{{ mu.name }}</p>
    </v-flex>

    <v-flex v-for="fe in frontEnd" :key="fe.name">
      <p>{{ fe.name }}</p>
    </v-flex>

    <v-flex v-for="be in backEnd" :key="be.name">
      <p>{{ be.name }}</p>
    </v-flex>

    <v-flex v-for="db in database" :key="db.name">
      <p>{{ db.name }}</p>
    </v-flex>

    <v-flex v-for="infra in infrastructure" :key="infra.name">
      <p>{{ infra.name }}</p>
    </v-flex>

    <v-flex v-for="tool in tools" :key="tool.name">
      <p>{{ tool.name }}</p>
    </v-flex>

    <v-flex v-for="license in licenses" :key="license.name">
      <p>{{ license.name }}</p>
    </v-flex>

  </section>
</template>

<script>
  export default {
    name: "Skills",
    data: () => ({
      markUp: [
        {
          name: 'HTML',
          years: 4,
          rate: 4
        },
        {
          name: 'CSS',
          years: 4,
          rate: 4
        },
        {
          name: 'SCSS',
          years: 0,
          rate: 2,
        }
      ],
      frontEnd: [
        {
          name: 'JavaScript',
          years: 1,
          rate: 2,
        },
        {
          name: 'Vue.js',
          years: 0,
          rate: 2,
        }
      ],
      backEnd: [
        {
          name: 'Java',
          years: 3,
          rate: 3,
        },
        {
          name: 'ESQL',
          years: 2,
          rate: 3,
        },
        {
          name: 'Bash',
          years: 0.5,
          rate: 2,
        },
      ],
      database: [
        {
          name: 'Oracle',
          years: 4.5,
          rate: 3.5,
        },
        {
          name: 'MySQL',
          years: 0,
          rate: 1.5,
        }
      ],
      infrastructure:[
        {
          name: 'GCP',
          year: 0,
          rate: 1,
        }
      ],
      tools: [
        {
          name: 'FireWorks',
          year: 2.5,
          rate: 3,
        },
        {
          name:'subversion',
          year: 4,
          rate: 3,
        },
        {
          name:'Git',
          year: 0,
          rate: 1,
        },
        {
          name: 'Excel/VBA',
          year: 5,
          rate: 4,
        }
      ],
      licenses: [
        {
          name: '基本情報技術者'
        },
        {
          name: 'TOEIC 790点'
        }
      ]
    })
  }
</script>

<style scoped>

</style>