<template>
  <v-container
    class="justify-center"
    style="padding-right: 5%; padding-left: 5%"
  >
    <!-- <experience-slot-calendar -->
    <!--   v-if="guide" -->
    <!--   :guide="guide" -->
    <!-- ></experience-slot-calendar> -->
    <!-- <v-btn @click.prevent="createExperience" /> -->
    <v-row class="justify-center">
      <v-col class="text-left">
        <v-text-field
          :label="
            $t(
              'Indiquez le titre de votre expérience (maximum 40 caractères espaces compris)'
            )
          "
        >
          test 131324
        </v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-container fluid>
        <experience-creation-slide-group style="height: 100px" />
      </v-container>
    </v-row>

    <v-divider class="my-9"></v-divider>

    <v-row>
      <v-col cols="8">
        <experience-creation-attributes />

        <v-divider class="my-9"></v-divider>

        <v-row class="d-flex flex-row">
          <h3 class="black--text py-4">
            {{ $t("Présentation de l'experience") }}
          </h3>
        </v-row>
        <v-row>
          <v-textarea
            v-model="title"
            :label="
              $t(
                'Ecrivez-ici la présentation de votre expérience. (maximum 700 caractères espaces compris).'
              )
            "
          ></v-textarea>
        </v-row>

        <v-divider class="my-9"></v-divider>

        <experience-guide-profile />
      </v-col>

      <v-col>
        <v-row class="justify-end">
          <experience-creation-price-picker></experience-creation-price-picker>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import experienceMutation from '@/graphql/mutations/experience'
import guideExperiencesMutation from '@/graphql/mutations/guideExperiences'
import singleUserQuery from '@/graphql/queries/user'

export default {
  data() {
    return {
      guide: null,
      title: '',
    }
  },
  async mounted() {
    const user = await this.$apollo.query({
      query: singleUserQuery,
      variables: {
        id: this.$strapi.user.id,
      },
    })
    this.guide = user.data.me.guide
  },
  methods: {
    async createExperience() {
      if (!this.$strapi.user) return

      await this.$apolloHelpers.onLogin(this.$strapi.getToken())

      const user = await this.$apollo.query({
        query: singleUserQuery,
        variables: {
          id: this.$strapi.user.id,
        },
      })
      const guideExperiences =
        user.data.me.guide.data.attributes.experiences.data.map((x) => x.id)
      this.guide = user.data.me.guide
      const result = await this.$apollo.mutate({
        mutation: experienceMutation,
        variables: {
          input: {
            title: this.title,
            duration: '00:03:00.000',
          },
        },
      })
      guideExperiences.push(result.data.createExperience.data.id)
      await this.$apollo.mutate({
        mutation: guideExperiencesMutation,
        variables: {
          id: user.data.me.guide.data.id,
          input: {
            experiences: guideExperiences,
          },
        },
      })
    },
  },
}
</script>
