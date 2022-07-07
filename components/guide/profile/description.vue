<template v-if="guide">
  <v-container>
    <v-row class="text-center">
      <h2>{{ guide.headline }}</h2>
    </v-row>

    <v-row class="multiline pa-md-4">
      <p>{{ guide.description }}</p>
    </v-row>
  </v-container>
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
}
</script>
