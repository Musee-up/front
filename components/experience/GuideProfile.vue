<template v-if="guide && user">
  <v-flex>
    <v-row>
      <h3 class="black--text py-4">{{ $t('Votre guide') }}</h3>
    </v-row>
    <v-row>
      <v-col cols="3" style="align-self: center">
        <guide-list-item :guide="guide" class="guide"> </guide-list-item>
      </v-col>
      <v-col>
        <p class="description-list--text">
          {{ guide.description }}
        </p>
      </v-col>
    </v-row>
  </v-flex>
</template>

<script>
import Guide from '@/types/Guide'
export default {
  props: {
    guide: {
      type: Guide,
      required: true,
    },
  },
  data() {
    return {
      user: this.guide.user,
      url: process.env.API_URL,
    }
  },
}
</script>
