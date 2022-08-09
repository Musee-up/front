<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template #activator="{ on, attrs }">
        <v-btn color="primary" icon v-bind="attrs" v-on="on">
          <v-icon large color="primary"> mdi-menu </v-icon>
        </v-btn>
      </template>
      <v-card @click="dialog = !dialog">
        <div v-if="$strapi.user">
          <account-guide-navigation-links v-if="isGuide">
          </account-guide-navigation-links>
          <account-client-navigation-links> </account-client-navigation-links>
        </div>

        <core-visitor-action v-else> </core-visitor-action>
      </v-card>
      <v-footer fixed>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-footer>
    </v-dialog>
  </v-row>
</template>

<script>
import query from '@/graphql/queries/account/client/role.gql'

export default {
  data() {
    return {
      dialog: false,
      isGuide: false,
    }
  },
  mounted() {
    if (!this.$strapi.user) {
      return
    }
    this.isGuide = this.$apollo
      .query({ query })
      .then((data) => data?.me?.role?.name === 'Guide')
  },
  methods: {
    openDialog() {
      this.dialog = true
    },
  },
}
</script>
