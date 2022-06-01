<template>
  <div>
    <v-app-bar class="nav-bar">
      <v-tabs v-model="tab" center center-active class="justify-center">
        <v-spacer></v-spacer>
        <v-tab
          v-for="(c, i) in tabs"
          :key="i"
          class="font-weight-regular label ma-8 font-weight-regular"
        >
          {{ $t(c.label) }}
        </v-tab>

        <v-tab class="ma-4">
          <NuxtLink class="font-weight-regular label" to="/account/experiences">
            {{ $t('pages.account.guide.publish') }}
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
          label: 'pages.account.guide.dashboard',
          component: 'account-guide-dashboard',
        },
        {
          label: 'pages.account.guide.experiences',
          component: 'guide-experiences',
        },
        {
          label: 'pages.account.guide.calendar',
          component: 'calendar',
        },
        {
          label: 'pages.account.guide.messages',
          component: 'chat-friends',
        },
        {
          label: 'pages.account.guide.account',
          component: 'account-guide',
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
