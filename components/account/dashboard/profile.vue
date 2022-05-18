<template>
  <v-container fluid class="">
    <v-row class="d-flex justify-center">
      <v-avatar color="primary" size="100">
        <nuxt-img style="width: inherit" :src="portrait"> </nuxt-img>
      </v-avatar>
    </v-row>
    <v-row class="d-flex justify-center">
      <h2>{{ username }}</h2>
    </v-row>

    <v-row class="d-flex justify-center">
      <p>
        <small class="grey--text">{{ location }}</small>
      </p>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      portrait: '/portrait.png',
      username: 'Bienvenue Héloise',
      location: 'Ile de France, France',
    }
  },
}
</script>
