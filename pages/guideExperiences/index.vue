<template>
  <experience-creation-template
    v-if="experience"
    :id="$route.params.id"
    :experience="experience"
    :mutation-query="experienceUpdate"
  >
  </experience-creation-template>
</template>

<script>
import guideExperiencesMutation from '@/graphql/mutations/guideExperiences'
import singleUserQuery from '@/graphql/queries/user'

export default {
  data () {
    return {
      guide: null,
    }
  },
  async mounted() {

    const user = await this.getUser()
    this.guide = user.data.me.guide
  },
  methods: {
    getUser() {
      return this.$apollo.query({
        query: singleUserQuery,
        variables: {
          id: this.$strapi.user.id,
        },
      })
    },
    updateGuideExperiences(id, experiences) {
      this.$apollo.mutate({
        mutation: guideExperiencesMutation,
        variables: {
          id,
          input: {
            experiences,
          },
        },
      })
    },
    async addGuideExperience() {
      if (!this.$strapi.user) return

      await this.$apolloHelpers.onLogin(this.$strapi.getToken())

      const user = await this.getUser()

      this.guide = user.data.me.guide

      const result = await this.createExperience()

      const guideExperiences =
        user.data.me.guide.data.attributes.experiences.data.map((x) => x.id)
      guideExperiences.push(result.data.createExperience.data.id)

      await this.updateGuideExperiences(
        user.data.me.guide.data.id,
        guideExperiences
      )
    },
  }
}
</script>
