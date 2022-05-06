<template>
  <v-container
    class="justify-center"
    style="padding-right: 5%; padding-left: 5%"
  >
    <!-- <experience-slot-calendar -->
    <!--   v-if="guide" -->
    <!--   :guide="guide" -->
    <!-- ></experience-slot-calendar> -->
    <v-row class="mt-4 justify-space-between">
      <div>
      <v-btn rounded @click.prevent="addGuideExperience">
        Ajouter
      </v-btn>
      <!-- <base-blue-button></base-blue-button> -->
      <v-chip> Incomplète </v-chip>
      </div>
      <v-btn rounded color="red" class="white--text">
        Suprimer
      </v-btn>
    </v-row>
    <v-row class="justify-center">
      <v-col class="text-left">
        <v-text-field
          v-model="title"
          style="font-size:27px"
          :label="
            $t(
              'Indiquez le titre de votre expérience (maximum 40 caractères espaces compris)'
            )
          "
        >
        </v-text-field>
      </v-col>
    </v-row>

    <div style="height: 500px">
      <experience-creation-slide-group />
    </div>

    <v-divider class="my-9"></v-divider>

    <v-row>
      <v-col cols="8">
        <experience-creation-attributes @update="updateAttribute" />

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
      att: [],
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
    updateAttribute(att) {
      this.att = att
      delete this.att.people
    },
    createExperience() {
      return this.$apollo.mutate({
        mutation: experienceMutation,
        variables: {
          input: {
            ...this.att,
            title: this.title,
            duration: '00:03:00.000',
          },
        },
      })
    },
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
  },
}
</script>
