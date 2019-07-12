<template>
    <div>
        <v-card class="pa-3">
            <p>{{ title }}</p>
            <p>{{ explain }}</p>
            <SkillCards :skills="skills"/>
        </v-card>
    </div>
</template>

<script>
  import SkillCards from "@/components/SkillCards"

  export default {
    name: "SkillLists",
    components: {
      SkillCards
    },
    props: {
      skills: {
        type: Object
      },
      title: {
        type: String
      },
      explain: {
        type: String
      }
    },
    data: () => {
      return {
        skills: this.skills,
        title: this.title,
        explain: this.explain
      }
    }
  }
</script>

<style scoped>

</style>