<template>
  <v-container fluid class="">
    <v-row class="d-flex justify-center">
      <v-avatar color="primary" size="100">
        <nuxt-img style="width: inherit" :src="portrait"> </nuxt-img>
      </v-avatar>
    </v-row>

    <v-row class="d-flex justify-center">
      <h2>Bienvenue {{ user.firstame }}</h2>
    </v-row>

    <v-row class="d-flex justify-center">
      <slot> </slot>
      <!-- <p> -->
      <!--   <small class="grey--text">{{ location }}</small> -->
      <!-- </p> -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['user'],
  data() {
    return {
      portrait: '/portrait.png',
      location: 'Ile de France, France',
    }
  },
}
</script>
