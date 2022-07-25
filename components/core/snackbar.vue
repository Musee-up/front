<template>
  <v-snackbar
    v-model="snackbar"
    color="error"
    :timeout="snackbarTimeout"
    class="text-center rounded-xl"
  >
    <p class="ma-0 white--text">
      {{ error }}
    </p>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      default: '',
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      snackbarTimeout: 10000,
    }
  },
  computed: {
    snackbar: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>
