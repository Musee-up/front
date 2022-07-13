<template>
  <v-container class="pa-8">
    <v-row>
      <v-col order="2" cols="12" md="2">
        <account-guide-dashboard-settings :user="user">
          <p>
            <small class="grey--text">{{ location }}</small>
          </p>
        </account-guide-dashboard-settings>
      </v-col>

      <v-col>
        <v-row>
          <account-info></account-info>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      location: 'Ile de France, France',
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/getCore',
    }),
  },
}
</script>
