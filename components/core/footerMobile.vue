<template>
  <v-footer app center flat bottom outlined fixed class="pa-0 pt-4">
    <v-container fluid class="pa-0">
      <v-row justify="center">
        <v-col
          v-for="(action, index) in actions"
          :key="index"
          cols="3"
          class="text-center pa-0 mx-4"
          style="max-width: max-content"
        >
          <nuxt-link :to="action.link">
            <v-icon large color="primary">
              {{ action.icon }}
            </v-icon>
          </nuxt-link>
          <p class="description--text font-weight-thin black--text" small>
            {{ action.label }}
          </p>
        </v-col>
        <v-col
          class="text-center mx-4"
          style="max-width: max-content"
          cols="3">
          <core-client-layout></core-client-layout>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      actions: [
        {
          icon: 'mdi-magnify',
          link: '/experiences',
          label: 'Explore',
        },
        {
          icon: 'mdi-account-outline',
          link: '/about',
          label: 'About',
        },
        {
          icon: 'mdi-heart-outline',
          link: '/contact',
          label: 'Contact',
        },
      ],
    }
  },
}
</script>
