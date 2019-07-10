<template>
    <section class="skills">
        <h1>This is my skills page</h1>
        <v-flex v-for="(mu, index) in markUp" :key="index">
            <p>{{ mu.name }}</p>
            <p v-if="mu.years === 0">数ヶ月(独学)</p>
            <p v-else-if="mu.years === 0.5">半年</p>
            <p v-else>{{ mu.years }} 年</p>
            <v-rating
                    v-model="mu.rate"
                    color="blue darken-4"
                    background-color="red darken-2"
                    half-icon="$vuetify.icons.ratingHalf"
                    half-increments
                    readonly
            ></v-rating>
        </v-flex>

        <v-flex v-for="(fe, index) in frontEnd" :key="index">
            <p>{{ fe.name }}</p>
            <p v-if="fe.years === 0">数ヶ月(独学)</p>
            <p v-else-if="fe.years === 0.5">半年</p>
            <p v-else>{{ fe.years }} 年</p>
            <v-rating
                    v-model="fe.rate"
                    color="blue darken-4"
                    background-color="red darken-2"
                    half-icon="$vuetify.icons.ratingHalf"
                    half-increments
                    readonly
            ></v-rating>
        </v-flex>

        <v-flex v-for="(be, index) in backEnd" :key="index">
            <p>{{ be.name }}</p>
            <p v-if="be.years === 0">数ヶ月(独学)</p>
            <p v-else-if="be.years === 0.5">半年</p>
            <p v-else>{{ be.years }} 年</p>
            <v-rating
                    v-model="be.rate"
                    color="blue darken-4"
                    background-color="red darken-2"
                    half-icon="$vuetify.icons.ratingHalf"
                    half-increments
                    readonly
            ></v-rating>
        </v-flex>

        <v-flex v-for="(db, index) in database" :key="index">
            <p>{{ db.name }}</p>
            <p v-if="db.years === 0">数ヶ月(独学)</p>
            <p v-else-if="db.years === 0.5">半年</p>
            <p v-else>{{ db.years }} 年</p>
            <v-rating
                    v-model="db.rate"
                    color="blue darken-4"
                    background-color="red darken-2"
                    half-icon="$vuetify.icons.ratingHalf"
                    half-increments
                    readonly
            ></v-rating>
        </v-flex>

        <v-flex v-for="(infra, index) in infrastructure" :key="index">
            <p>{{ infra.name }}</p>
            <p v-if="infra.years === 0">数ヶ月(独学)</p>
            <p v-else-if="infra.years === 0.5">半年</p>
            <p v-else>{{ infra.years }} 年</p>
            <v-rating
                    v-model="infra.rate"
                    color="blue darken-4"
                    background-color="red darken-2"
                    half-icon="$vuetify.icons.ratingHalf"
                    half-increments
                    readonly
            ></v-rating>
        </v-flex>

        <v-flex v-for="(tool, index) in tools" :key="index">
            <p>{{ tool.name }}</p>
            <p v-if="tool.years === 0">数ヶ月(独学)</p>
            <p v-else-if="tool.years === 0.5">半年</p>
            <p v-else>{{ tool.years }} 年</p>
            <v-rating
                    v-model="tool.rate"
                    color="blue darken-4"
                    background-color="red darken-2"
                    half-icon="$vuetify.icons.ratingHalf"
                    half-increments
                    readonly
            ></v-rating>
        </v-flex>

        <v-flex v-for="(license, index) in licenses" :key="index">
            <p>{{ license.name }}</p>
            <p>{{ license.year }}</p>
        </v-flex>

    </section>
</template>

<script>
  export default {
    name: "Skills",
    data: () => {
      return {
        markUp: [
          {
            name: 'HTML',
            years: 4,
            rate: 4.5
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
          {
            name: 'Python',
            years: 0,
            rate: 1.5
          }
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
        infrastructure: [
          {
            name: 'GCP',
            years: 0,
            rate: 1,
          }
        ],
        tools: [
          {
            name: 'FireWorks',
            years: 2.5,
            rate: 3,
          },
          {
            name: 'subversion',
            years: 4,
            rate: 3,
          },
          {
            name: 'Git',
            years: 0,
            rate: 1,
          },
          {
            name: 'Excel/VBA',
            years: 5,
            rate: 4,
          }
        ],
        licenses: [
          {
            name: '基本情報技術者',
            year: 2015,
          },
          {
            name: 'TOEIC 790点',
            year: 2019,
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>