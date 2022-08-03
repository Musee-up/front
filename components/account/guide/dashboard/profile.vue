<template v-if="user">
  <v-container fluid>
    <v-row justify="center">
      <v-avatar color="primary" size="100">
        <nuxt-img v-if="img" :src="img"> </nuxt-img>
      </v-avatar>
    </v-row>

    <v-row justify="center">
      <h2>Bienvenue {{ user.firstname }}</h2>
    </v-row>

    <v-row justify="center">
      <slot> </slot>
    </v-row>
  </v-container>
</template>

<script>
import User from '@/types/User'

export default {
  props: {
    user: {
      type: User,
      required: true,
    },
  },
  data() {
    return {
      img: process.env.API_URL + this.user.picture?.formats.thumbnail.url,
    }
  }
}
</script>
