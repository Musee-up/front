<template>
  <div>
    <v-app-bar class="nav-bar">
      <v-tabs v-model="tab" center center-active class="justify-center">
        <v-spacer></v-spacer>
        <v-tab v-for="(c, i) in tabs" :key="i" class="capitalize ma-4">
          {{ c.label }}
        </v-tab>

        <v-tab class="ma-4">
          <NuxtLink to="/guideexperiences">
            {{ $t('Publier une annonce') }}
          </NuxtLink>
        </v-tab>

        <v-spacer></v-spacer>
      </v-tabs>
    </v-app-bar>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="(c, i) in tabs"
        :key="i"
        active-class="d-flex justify-center fluid"
      >
        <component :is="c.component"></component>
      </v-tab-item>

      <v-tab-item active-class="d-flex justify-center"> </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      tab: null,
      tabs: [
        {
          label: 'Tableau de bord',
          component: 'account-dashboard',
        },
        {
          label: 'Mes annonces',
          component: 'guide-experiences',
        },
        {
          label: 'Mon agenda',
          component: 'calendar',
        },
        {
          label: 'Mes messages',
          component: 'chat-friends',
        },
        {
          label: 'Mon Compte',
          component: 'account',
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
  font-weight: bold;
  color: $white !important;
}

.nav-bar {
  background: $_blue !important;
  background-color: $_blue !important;
}
</style>
