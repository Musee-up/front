<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      >
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          icon
          v-bind="attrs"
          v-on="on"
          >
          <v-icon
            large
            color="primary"
            >
            mdi-menu
          </v-icon>
        </v-btn>
      </template>
      <v-card @click="dialog = !dialog">
        <account-guide-navigation-links>
        </account-guide-navigation-links>
        <!-- <account-client-navigation-links> -->
        <!-- </account-client-navigation-links> -->
      </v-card>
      <v-footer fixed>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="dialog = false"
          >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-footer>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
  },
}

</script>
