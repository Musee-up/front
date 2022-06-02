<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template #activator="{ on, attrs }">
      <v-btn class="pa-0 text-center" text v-bind="attrs" v-on="on">
        <slot></slot>
      </v-btn>
    </template>

    <v-form class="white">
      <v-container>
        <v-card-title>
          <span class="text-h5">
            {{ $t('components.home.navbar.login.title') }}
          </span>
        </v-card-title>
        <v-row>
          <v-col>
            <v-text-field
              v-model="email"
              :label="$t('components.home.navbar.login.email')"
              type="email"
              autocomplete="current-mail"
              required
            >
            </v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="password"
              autocomplete="current-password"
              type="password"
              :label="$t('components.home.navbar.login.password')"
              required
            >
            </v-text-field>
          </v-col>
        </v-row>
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
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    router: useRouter(),
    email: '',
    password: '',
  }),
  methods: {
    async onSubmit() {
      this.dialog = false
      try {
        await this.$strapi.login({
          identifier: this.email,
          password: this.password,
        })
        await this.$apolloHelpers.onLogin(this.$strapi.getToken())
        this.router.push('/')
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>
