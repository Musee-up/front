<template>
  <v-container>
    <v-row>
      <h3 class="title--text">
        {{ $t('components.account.client.bookings.group.title') }}
      </h3>
    </v-row>

    <v-row>
      <v-col cols="12" md="9">
        <v-avatar v-for="(img, i) in iter" :key="i">
          <nuxt-img src="/portrait.png"> </nuxt-img>
        </v-avatar>
      </v-col>
      <v-col>
        <v-row justify="center" justify-md="end">
          <base-blue-button>
            {{ $t('components.account.client.bookings.group.action') }}
          </base-blue-button>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Experience from '@/types/Experience'

export default {
  props: {
    experience: {
      type: Experience,
      required: true,
    },
  },
  data() {
    return {
      iter: [...Array(5).keys()],
    }
  },
}
</script>
