<template v-if="guide">
  <v-container>
    <v-row>
      <h2>{{ guide.headline }}</h2>
    </v-row>

    <v-row class="pa-4">
      <p>{{ guide.description }}</p>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['guide'],
}
</script>
