<template>
  <v-container>
    <v-row>
      <h3 class="title--text">
        {{ $t('components.account.client.reservations.group.title') }}
      </h3>
    </v-row>

    <v-row>
      <v-col>
        <v-avatar v-for="(img, i) in iter" :key="i">
          <nuxt-img src="/portrait.png"> </nuxt-img>
        </v-avatar>
      </v-col>
      <v-col cols="3">
        <base-blue-button>
          {{ $t('components.account.client.reservations.group.action') }}
        </base-blue-button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['experience'],
  data() {
    return {
      iter: [...Array(5).keys()],
    }
  },
}
</script>
