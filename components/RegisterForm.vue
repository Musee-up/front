<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template #activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">
          {{ $t("M'inscrire") }}
        </v-btn>
      </template>
      <v-card>
        <v-form>
          <v-card-title>
            <span class="text-h5"> {{ $t('Inscription') }} </span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="username"
                    :label="$t('Nom') + '*'"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field :label="$t('Prénom') + '*'"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="email"
                    :label="$t('Addresse Mail') + '*'"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="password"
                    label="Password*"
                    type="password"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6"> </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
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
              Close
            </v-btn>
            <v-btn
              color="fill_button"
              rounded
              outlined
              class="white-filled"
              @click.prevent="validate"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
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
