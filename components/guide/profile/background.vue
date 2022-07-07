<template>
  <v-container>
    <v-row class="text-center">
      <h2>{{ $t(title) }}</h2>
    </v-row>

    <v-row>
      <p class="multiline primary--text">
        {{ background }}
      </p>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'components.guide.background',
    },
    background: {
      type: String,
      default: '',
    },
  },
}
</script>
