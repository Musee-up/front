<template>
  <v-container v-if="experience.data" class="justify-center">
    <v-row class="justify-center">
      <v-col class="text-left">
        <h1 class="dark--text" style="font-size: 40px">
          {{ experience.data.attributes.title }}
        </h1>
      </v-col>
    </v-row>

    <v-row v-if="experience.data" justify="center">
      <experience-group-slide :photos="experience.data.attributes.photos" />
    </v-row>

    <v-divider class="my-9"></v-divider>

    <v-row>
      <v-col cols="8">
        <experience-attributes :attributes="experiencesAttributes" />
        <v-divider class="my-9"></v-divider>

        <v-row>
          <h3 class="black--text py-4">
            {{ $t("Présentation de l'experience") }}
          </h3>
          <p class="description-list--text">
            {{ experience.data.attributes.description }}
          </p>
        </v-row>

        <v-divider class="my-9"></v-divider>
        <experience-guide-profile />
      </v-col>

      <v-col class="mx-4">
        <v-row class="justify-end">
          <experience-booking-form
            :experience="experience.data"
            :slots="slots"
            @picked="onPicked"
          ></experience-booking-form>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import experienceQuery from '@/graphql/queries/experience'

export default {
  data() {
    return {
      slots: [],
      experience: [],
      experiencesAttributes: [],
      selectedItem: 1,
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
      update(data) {
        if (!data.experience.data.attributes) return
        const exp = data.experience.data.attributes
        const languages = exp.languages.data
          .map((x) => x.attributes.value)
          .join(', ')
        const themes = exp.themes.data.map((x) => x.attributes.name).join(', ')
        const groupSizeSyntax = (n) =>
          this.$t('pages.experiences.n_visite', { n })

        this.slots = exp.experienceSlots
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
            text: groupSizeSyntax(exp.groupSize),
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
          // { text: 'experience.data.attributes.', icon: 'mdi-camera' },
        ]
        if (exp.handifriendly)
          this.experiencesAttributes.push({
            text: 'Handifriendly',
            icon: 'mdi-human-wheelchair',
          })
        return data.experience
      },
    },
  },
}
</script>
