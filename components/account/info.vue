<template>
  <v-container>
    <v-row>
      <v-col md="10" cols="12">
        <v-row>
          <account-guide-dashboard-profile v-if="user" :user="user">
          </account-guide-dashboard-profile>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-card
            :class="$vuetify.breakpoint.mdAndUp ? 'rounded-xl' : ''"
            :rounded="$vuetify.breakpoint.mdAndUp"
            :outlined="$vuetify.breakpoint.mdAndUp"
          >
            <v-card-title>
              <v-col>
                <h4>Vos informations</h4>
              </v-col>
              <v-col cols="3" class="text-right">
                <v-btn text @click="edit = !edit">
                  <v-icon color="primary"> mdi-pencil </v-icon>
                </v-btn>
              </v-col>
            </v-card-title>
            <v-card-text style="width: 100%">
              <account-guide-resume v-if="!edit"> </account-guide-resume>

              <account-info-form v-else> </account-info-form>
            </v-card-text>
            <v-card-actions class="text-center justify-center">
              <v-btn text color="error"> Supprimer mon compte </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'account-client',
  data() {
    return {
      edit: false,
    }
  },
  computed: mapGetters({
    user: 'user/getCore',
  }),
}
</script>
