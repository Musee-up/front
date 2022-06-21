<template>
  <v-container>
    <v-row
      v-for="(item, i) in first"
      :key="i"
      class="justify-space-between d-flex"
    >
      <v-col cols="5" class="ma-0 mx-2 label">
        <p style="white-space: nowrap">
          {{ $t(item.label) }}
        </p>
      </v-col>
      <v-col>
        <v-divider vertical />
      </v-col>
      <v-col cols="5" class="ma-0 mx-2">
        <p>
          {{ $t(item.value) }}
        </p>
      </v-col>
      <v-divider v-if="i != first.length - 1" class="ma-1"> </v-divider>
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
      return {
        lastname: {
          label: 'components.account.guide.resume.lastname',
          value: this.user.lastname,
        },
        firstname: {
          label: 'components.account.guide.resume.firstname',
          value: this.user.firstname,
        },
        birthdate: {
          label: 'Date de naissance',
          value: this.user.birthdate,
        },
        email: {
          label: 'components.account.guide.resume.mail',
          value: this.user.email,
        },
        phone: {
          label: 'components.account.guide.resume.phone',
          value: this.user.phone,
        },
        password: {
          label: 'components.account.guide.resume.password',
          value: '',
        },
      }
    },
  },
}
</script>
