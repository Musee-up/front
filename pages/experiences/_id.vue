<template>
  <v-container
    v-if="experience && experience.guide"
    class="pa-8 justify-center"
  >
    <v-row class="justify-center">
      <v-col class="text-left">
        <h1 class="dark--text exp-title">
          {{ experience.title }}
        </h1>
      </v-col>
    </v-row>

    <v-row justify="center">
      <experience-group-slide
        v-if="experience.photos"
        :photos="experience.photos"
      />
    </v-row>

    <v-divider class="my-9"></v-divider>

    <v-row>
      <v-col cols="12" md="8">
        <experience-attributes :attributes="experiencesAttributes" />
        <v-divider class="my-9"></v-divider>

        <v-row>
          <h3 class="black--text py-4">
            {{ $t("Présentation de l'experience") }}
          </h3>
          <p class="exp-description description-list--text">
            {{ experience.description }}
          </p>
        </v-row>

        <v-divider class="my-9"></v-divider>
        <experience-guide-profile :guide="experience.guide" />
      </v-col>

      <v-col class="mx-4">
        <v-row class="justify-end">
          <experience-booking-form
            :experience="experience"
            :slots="experience.slots"
            @picked="onPicked"
          ></experience-booking-form>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import experienceQuery from '@/graphql/queries/experienceProfile'
import Experience from '@/types/Experience'

export default {
  data() {
    return {
      experience: [],
      experiencesAttributes: [],
    }
  },
  methods: {
    onPicked(date) {
      console.log(date)
    },
  },
  apollo: {
    experience: {
      query: experienceQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) }
      },
      update(data): Experience {
        const exp = Experience.map(data.experience)

        if (!exp) return

        const languages = exp.languages?.
          map((x) => x.attributes.value)
          .join(', ')
        const themes = exp.themes?.map((x) => x.attributes.name).join(', ')
        const groupSizeSyntax = this.$t('pages.experiences.n_visite', {
          n: exp.groupSize,
        })
        this.experiencesAttributes = [
          {
            text: exp.location,
            icon: 'mdi-map-marker',
          },
          {
            text: exp.duration.match(/\d\d:\d\d/)[0],
            icon: 'mdi-timer',
          },
          {
            text: exp.transportation,
            icon: 'mdi-walk',
          },
          {
            text: groupSizeSyntax,
            icon: 'mdi-account-group',
          },
          {
            text: themes,
            icon: 'mdi-palette',
          },
          {
            text: languages,
            icon: 'mdi-earth',
          },
          exp.handifriendly && {
            text: 'Handifriendly',
            icon: 'mdi-human-wheelchair',
          },
        ].filter((x) => x.text)
        return exp
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.exp-title {
  font-size: 40px;
}

.exp-description {
  white-space: pre-line;
}
</style>
