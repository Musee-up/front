<template>
  <v-container>
    <v-row><h2>Mes experiences favorites</h2></v-row>
    <v-divider></v-divider>
    <v-row v-if="experiences">
      <experience-list-horizontal
        :experiences="experiences"
      ></experience-list-horizontal>
    </v-row>
    <v-divider class="ma-4"></v-divider>
    <v-row><h2>Mes guides favoris</h2></v-row>
    <v-row>
      <v-col v-for="(guide, i) in guides" :key="i">
        <guide-list-item :guide="guide"></guide-list-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Experience from '@/types/Experience'
import Guide from '@/types/Guide'

export default {
  layout: 'account-client',
  computed: {
    experiences() {
      return (
        this.favorites?.experiences &&
        Experience.mapList(this.favorites?.experiences)
      )
    },
    guides() {
      console.log(this.favorites?.guides)
      return this.favorites?.guides && Guide.mapList(this.favorites?.guides)
    },
    ...mapGetters({
      favorites: 'user/getFavorites',
    }),
  },
}
</script>
