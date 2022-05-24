<template v-if="guide">
  <div>
    <v-row>
      <h2 class="headline">{{ guide.headline }}</h2>
    </v-row>

    <v-row>
      <p>{{ guide.description }}</p>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ['guide'],
}
</script>
