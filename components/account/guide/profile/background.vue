<template>
  <v-container>
    <v-row>
      <h2>{{ $t(title) }}</h2>
    </v-row>

    <v-row>
      <v-textarea
        :value="background"
        :label="$t(title)"
        @change="(e) => $emit('input', { background: e })"
      ></v-textarea>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['background'],
  data() {
    return {
      title: 'components.account.guide.profile.background',
    }
  },
}
</script>
