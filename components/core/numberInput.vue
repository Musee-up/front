<template>
  <v-row align="center" justify="center">
    <v-col class="pa-0 d-flex justify-center">
      <v-btn
        :disabled="content <= 0"
        fab
        text
        color="primary"
        @click="content -= 1"
      >
        <v-icon> mdi-minus-circle-outline </v-icon>
      </v-btn>
    </v-col>

    <v-col class="text-center pa-0">
      <p class="pt-4">
        {{ content }}
      </p>
    </v-col>

    <v-col class="pa-0 d-flex justify-center">
      <v-btn
        color="primary"
        :disabled="disabled"
        text
        fab
        @click="content += 1"
      >
        <v-icon> mdi-plus-circle-outline </v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['value', 'disabled'],
  data() {
    return {
      content: this.value,
    }
  },
  watch: {
    content(newValue) {
      this.$emit('input', newValue)
    },
  },
}
</script>
