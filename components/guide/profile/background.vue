<template>
  <v-container>
    <v-row>
      <h2>{{ $t(title) }}</h2>
    </v-row>

    <v-row>
      <p class="primary--text">
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
      default: 'components.account.guide.profile.background',
    },
    background: {
      type: String,
      default: '',
    },
  },
}
</script>
