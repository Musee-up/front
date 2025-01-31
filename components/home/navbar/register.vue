<template>
  <v-dialog v-model="dialog" persistent max-width="400px">
    <template #activator="{ on, attrs }">
      <v-btn text class="pa-0" v-bind="attrs" v-on="on">
        <slot></slot>
      </v-btn>
    </template>

    <v-card class="rounded-xl pa-4">
      <v-form>
        <v-card-title>
          <span class="text-h5">
            {{ $t('components.home.navbar.register.title') }}
          </span>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="username"
                :label="$t('components.home.navbar.register.firstname') + '*'"
                autocomplete="new-firstname"
                :rules="rules.name"
                required
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                :label="$t('components.home.navbar.register.lastname') + '*'"
                autocomplete="new-lastname"
                :rules="rules.name"
                required
              >
              </v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="email"
                :label="$t('components.home.navbar.register.email') + '*'"
                autocomplete="new-email"
                :rules="rules.email"
                type="email"
                persistent-hint
                required
              >
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="password"
                :label="$t('components.home.navbar.register.password') + '*'"
                autocomplete="new-password"
                type="password"
                required
              >
              </v-text-field>
            </v-col>
            <v-col>
              <v-checkbox v-model="isGuide" label="Je suis guide">
                Je suis guide
              </v-checkbox>
            </v-col>
          </v-row>
          <small>
            {{ $t('components.home.navbar.register.description') }}
          </small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            outlined
            rounded
            color="fill_button"
            class="white-filled"
            @click="dialog = false"
          >
            {{ $t('components.home.navbar.register.close') }}
          </v-btn>
          <v-btn
            color="fill_button"
            rounded
            outlined
            class="white-filled"
            @click.prevent="validate"
          >
            {{ $t('components.home.navbar.register.submit') }}
          </v-btn>
        </v-card-actions>
      </v-form>
      <core-snackbar v-model="snackbar" :error="error"> </core-snackbar>
    </v-card>
  </v-dialog>
</template>

<script>
import mutation from '@/graphql/mutations/guide/create.gql'

export default {
  data: () => ({
    rules: {
      name: [
        (v) => !!v || 'Required.',
        (v) => (v || '').length <= 10 || 'Name must be less than 10 characters',
      ],
      email: [
        (value) => !!value || 'Required.',
        (value) => (value || '').length <= 30 || 'Max 30 characters',
        (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      ],
    },
    isGuide: false,
    username: '',
    email: '',
    password: '',
    dialog: false,
    snackbar: false,
    error: '',
  }),
  computed: {
    redirect() {
      return `/account/` + this.isGuide ? 'guide' : 'client'
    },
  },

  methods: {
    createGuide() {
      this.$apollo.mutate({
        mutation,
        variables: {
          input: {
            user: this.$strapi.user.id,
          },
        },
      })
    },
    validate() {
      this.$strapi
        .register({
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then(() => this.$apolloHelpers.onLogin(this.$strapi.getToken()))
        .then(() => {
          if (this.isGuide) this.createGuide()
        })
        .then(() => {
          this.router.push(this.redirect)
        })
        .catch((_) => {
          this.error = 'Invalid email or password'
          this.snackbar = true
        })
    },
  },
}
</script>
