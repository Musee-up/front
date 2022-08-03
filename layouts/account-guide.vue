<template>
  <default-layout>
    <v-app-bar v-if="!$vuetify.breakpoint.mobile" class="nav-bar pa-2">
      <v-row align="center">
        <v-col v-for="(item, index) in links" :key="index">
          <nuxt-link :to="item.link">
            <p class="text-center">
              {{ $t(item.label) }}
            </p>
          </nuxt-link>
        </v-col>
      </v-row>
    </v-app-bar>
    <Nuxt></Nuxt>
  </default-layout>
</template>

<script>
import { mapActions } from 'vuex'
import links from '@/data/nav/guide'
import DefaultLayout from '~/layouts/default.vue'

export default {
  components: { DefaultLayout },
  middleware: ['auth'],
  data() {
    return {
      links,
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
