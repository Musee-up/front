<template v-if="guide">
  <v-container>
    <v-row>
      <h2>{{ title }}</h2>
    </v-row>

    <v-row>
      <p>
        {{ guide.background }}
      </p>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['guide'],
  data() {
    return {
      title: 'components.guide.background',
    }
  },
}
</script>
