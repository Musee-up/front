<template>
  <v-container
    class="justify-center"
    style="padding-right: 5%; padding-left: 5%"
  >
    <v-row class="justify-center">
      <v-col class="text-left">
        <h1 class="black--text" style="font-size: 40px">
          {{ experience.data.attributes.title }}
        </h1>
      </v-col>
    </v-row>

    <v-row v-if="experience.data">
      <experience-group-slide
        style="height: 500px"
        :photos="experience.data.attributes.photos"
      />
    </v-row>

    <v-divider class="my-9"></v-divider>

    <v-row>
      <v-col cols="8">
        <v-list dense>
          <v-list-item-group>
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon color="primary" v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content color="primary">
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>

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

        <v-row>
          <h3 class="black--text py-4">{{ $t('Votre guide') }}</h3>
        </v-row>
        <v-row>
          <v-col cols="3" style="align-self: center">
            <nuxt-img style="width: inherit" src="/portrait.png"> </nuxt-img>
            <h4>Héloïse Doiteau</h4>
          </v-col>
          <v-col>
            <p class="description-list--text">
              Bonjour, je m’appelle Héloïse et je serais peut-être votre guide
              pour cette merveilleuse expérience culturelle :) Diplômée en
              littérature et de l’école du Louvre en médiation culturelle, cela
              fait bientôt 3 ans que j’exerce le métier de guide-conférencière
              en Île-de-France. Je suis passionnée par l’histoire de l’art, la
              littérature française du XIXe siècle et par le partage, notamment
              avec les enfants.
            </p>
          </v-col>
        </v-row>
      </v-col>

      <v-col>
        <v-row class="justify-end">
          <ExperiencesRegistrationForm />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { eventQuery } from '@/graphql/query'
export default {
  data() {
    return {
      experience: [],
      selectedItem: 1,
      items: [],
    }
  },
  apollo: {
    experience: {
      query: eventQuery,
      variables() {
        return { id: parseInt(this.$route.params.id) }
      },
      update(data) {
        const groupSizeSyntax = (groupSize) =>
          `Jusqu'a ${groupSize} personnes (visite partagée)`
        this.items = [
          {
            text: data.experience.data.attributes.location,
            icon: 'mdi-map-marker',
          },
          { text: data.experience.data.attributes.duration.match(/\d\d:\d\d/)[0], icon: 'mdi-timer' },
          {
            text: data.experience.data.attributes.transportation,
            icon: 'mdi-walk',
          },
          {
            text: groupSizeSyntax(data.experience.data.attributes.groupSize),
            icon: 'mdi-account-group',
          },
          // { text: 'experience.data.attributes.', icon: 'mdi-camera' },
          // { text: 'experience.data.attributes.themes', icon: 'mdi-palette' },
          // { text: 'experience.data.attributes.languages', icon: 'mdi-earth' },
        ]
        if (data.experience.data.attributes.handifriendly)
          this.items.push({
            text: 'Handifriendly',
            icon: 'mdi-human-wheelchair',
          })
        return data.experience
      },
    },
  },
}
</script>
