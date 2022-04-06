<template>
  <v-container class="justify-center px-16" fluid>
    <v-row class="justify-center">
      <v-col class=" text-left">
        <h1 style="color:#24242C;font-size:40px;">
          {{ experience.data.attributes.title }}</h1>
      </v-col>
    </v-row>

    <v-row class="justify-center">
      <experience-group-slide
        :photos="experience.data.attributes.photos"/>
    </v-row>

    <v-divider class="ma-9"></v-divider>
    <v-spacer class=""></v-spacer>
    <v-row cols="8">
      <v-spacer></v-spacer>
      <v-col>
        <v-list dense>
          <v-list-item-group>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              >
              <v-list-item-icon>
                <v-icon
                  color="black"
                  v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content color="primary">
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>

      <v-col>
        <v-row cols="2">
        <ExperiencesRegistrationForm/>
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
        const groupSizeSyntax = (groupSize) => `Jusqu'a ${groupSize} personnes (visite partagée)`
      this.items = [
        { text: data.experience.data.attributes.location, icon: 'mdi-map-marker' },
        { text: data.experience.data.attributes.duration, icon: 'mdi-timer' },
        { text: data.experience.data.attributes.transportation, icon: 'mdi-walk' },
        { text: groupSizeSyntax(data.experience.data.attributes.groupSize), icon: 'mdi-account-group' },
        //{ text: 'experience.data.attributes.', icon: 'mdi-camera' },
        //{ text: 'experience.data.attributes.themes', icon: 'mdi-palette' },
        //{ text: 'experience.data.attributes.languages', icon: 'mdi-earth' },
      ]
        if (data.experience.data.attributes.handifriendly)
          this.items.push({ text: 'Handifriendly', icon: 'mdi-human-wheelchair' })
        return data.experience
      }
    },
  },
}
</script>

