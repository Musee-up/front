<template>
  <v-container>
    <v-row v-for="(item, i) in first" :key="i">
      <v-col cols="5" md="5" class="ma-md-0 mx-md-2">
        <p>
          {{ $t(item.label) }}
        </p>
      </v-col>
      <v-col v-if="!$vuetify.breakpoint.mobile">
        <v-divider vertical />
      </v-col>
      <v-col cols="6" md="5" class="ma-md-0 mx-md-2">
        <p>
          {{ $t(item.value) }}
        </p>
      </v-col>
      <v-divider
        v-if="!$vuetify.breakpoint.mobile && i != first.length - 1"
        class="ma-1"
      >
      </v-divider>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      user: 'user/getCore',
    }),
    first() {
      return [
        {
          label: 'components.account.guide.resume.lastname',
          value: this.user.lastname,
        },
        {
          label: 'components.account.guide.resume.firstname',
          value: this.user.firstname,
        },
        {
          label: 'Date de naissance',
          value: this.user.birthdate,
        },
        {
          label: 'components.account.guide.resume.mail',
          value: this.user.email,
        },
        {
          label: 'components.account.guide.resume.phone',
          value: this.user.phone,
        },
        {
          label: 'components.account.guide.resume.password',
          value: '',
        },
      ].filter((x) => x.value)
    },
  },
}
</script>
