<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <v-row>
          <account-guide-dashboard-profile v-if="user" :user="user">
          </account-guide-dashboard-profile>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-card class="rounded-xl" rounded outlined>
            <v-card-title>
              <v-col>
                <h4>Vos informations</h4>
              </v-col>
              <v-col class="text-right">
                <v-btn text @click="edit = true">
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
