<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="400px"
    @keydown.esc="dialog = false"
  >
    <template #activator="{ on, attrs }">
      <v-btn class="pa-0" text v-bind="attrs" v-on="on">
        <slot></slot>
      </v-btn>
    </template>

    <v-card class="rounded-xl pa-4">
      <v-form>
        <v-container>
          <v-row></v-row>
          <v-card-title>
            <span class="text-h5">
              {{ $t('components.home.navbar.login.title') }}
            </span>
          </v-card-title>

          <v-card-text>
            <v-row>
              <v-col cols="2"></v-col>
              <v-col cols="8">
                <v-row>
                  <v-text-field
                    v-model="email"
                    :label="$t('components.home.navbar.login.email')"
                    type="email"
                    autocomplete="current-mail"
                    required
                  >
                  </v-text-field>
                </v-row>
                <v-row>
                  <v-text-field
                    v-model="password"
                    autocomplete="current-password"
                    type="password"
                    :label="$t('components.home.navbar.login.password')"
                    required
                    @keyup.enter="onSubmit"
                  >
                  </v-text-field>
                </v-row>
              </v-col>
              <v-col cols="2"></v-col>
            </v-row>
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
              {{ $t('components.home.navbar.login.close') }}
            </v-btn>
            <v-btn
              color="fill_button"
              rounded
              outlined
              class="white-filled"
              @click.prevent="onSubmit"
            >
              {{ $t('components.home.navbar.login.login') }}
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-form>
      <v-snackbar
        v-model="snackbar"
        color="error"
        :timeout="snackbarTimeout"
        class="text-center"
        rounded="xl"
      >
        <p class="ma-0 white--text">
          {{ error }}
        </p>
      </v-snackbar>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    snackbar: false,
    router: useRouter(),
    snackbarTimeout: 3000,
    email: '',
    password: '',
    error: '',
  }),
  methods: {
    onSubmit() {
      this.$strapi
        .login({
          identifier: this.email,
          password: this.password,
        })
        .then(() => 
          this.$apolloHelpers.onLogin(this.$strapi.getToken())
        )
        .then(() => {
          this.router.push('/account/client')
        })
        .catch((_) => {
          this.error = 'Invalid email or password'
          this.snackbar = true
        })
    },
  },
}
</script>
