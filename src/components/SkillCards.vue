<template>
  <article>
    <v-layout row wrap>
      <v-flex v-for="(skill, index) in skills" :key="index" xs12 md4>
        <v-card class="ma-2 pa-3">
          <h3>{{ skill.name }}</h3>
          <v-divider/>
          <p>実務経験年数:
            <span v-if="skill.years === 0"> 数ヶ月(独学)</span>
            <span v-else-if="skill.years === 0.5"> 半年</span>
            <span v-else> {{ skill.years }} 年</span>
          </p>
          <v-rating
                  v-model="skill.rate"
                  color="blue darken-4"
                  background-color="red darken-2"
                  half-icon="$vuetify.icons.ratingHalf"
                  half-increments
                  readonly
          ></v-rating>
        </v-card>
      </v-flex>
    </v-layout>
  </article>
</template>

<script>
  export default {
    name: "SkillCards",
    props: {
      skills: {
        type: Object,
      }
    },
    data: () => {
      return {
        skills: this.skills
      }
    }
  }
</script>

<style scoped>

</style>