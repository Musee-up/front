<template>
  <default-layout>
    <v-app-bar class="nav-bar">
      <v-container>
        <v-row>
          <v-col></v-col>
          <v-col v-for="(item, index) in pages" :key="index">
            <nuxt-link :to="item.link">
              <p>
                {{ $t(item.label) }}
              </p>
            </nuxt-link>
          </v-col>
          <v-col></v-col>
        </v-row>
        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>
    <Nuxt></Nuxt>
  </default-layout>
</template>

<script>
import { mapActions } from 'vuex'
import DefaultLayout from '~/layouts/default.vue'

export default {
  components: { DefaultLayout },
  middleware: ['auth'],
  data() {
    return {
      pages: [
        {
          label: 'pages.account.guide.dashboard',
          link: '/account/guide',
        },
        {
          label: 'pages.account.guide.experiences',
          link: '/account/guide/experiences',
        },
        {
          label: 'pages.account.guide.calendar',
          link: '/account/guide/calendar',
        },
        {
          label: 'pages.account.guide.messages',
          link: '/account/guide/messages',
        },
        {
          label: 'pages.account.guide.account',
          link: '/account/guide/account',
        },
        {
          label: 'pages.account.guide.publish',
          link: '/account/experiences',
        },
        {
          label: 'Mon profile',
          link: '/account/guide/profile',
        },
      ],
    }
  },
  mounted() {
    this.load()
  },
  methods: mapActions({ load: 'guide/load' }),
}
</script>

<style lang="scss" scoped>
.label {
  text-transform: capitalize;
}

.v-app-bar * {
  font-size: 16px;
  font-weight: bold;
  color: $white !important;
}

.nav-bar {
  background: $_blue !important;
  background-color: $_blue !important;
}
</style>
