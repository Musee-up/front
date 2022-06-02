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
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="username"
                  autocomplete="new-firstname"
                  :label="$t('components.home.navbar.register.firstname') + '*'"
                  required
                  >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  autocomplete="new-lastname"
                  :label="$t('components.home.navbar.register.lastname') + '*'"
                  >
                </v-text-field>
              </v-col>
            </v-row>

            <v-row cols="12">
              <v-text-field
                v-model="email"
                autocomplete="new-email"
                type="email"
                :label="$t('components.home.navbar.register.email') + '*'"
                persistent-hint
                required
                >
              </v-text-field>
            </v-row>
            <v-row cols="12">
              <v-text-field
                v-model="password"
                type="password"
                autocomplete="new-password"
                :label="$t('components.home.navbar.register.password') + '*'"
                required
                >
              </v-text-field>
            </v-row>
          </v-container>
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
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    username: '',
    email: '',
    password: '',
    dialog: false,
  }),

  methods: {
    async validate() {
      this.dialog = false
      try {
        await this.$strapi.register({
          username: this.username,
          email: this.email,
          password: this.password,
        })
      } catch (e) {
        console.error(e)
      }
    },
  },
}
</script>
