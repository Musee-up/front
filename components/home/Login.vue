<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template #activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on">
        {{ $t('Me connecter') }}
      </v-btn>
    </template>

    <v-form class="white">
      <v-container>
        <v-card-title>
          <span class="text-h5"> {{ $t('Bienvenue sur Musée up') }} </span>
        </v-card-title>
        <v-row>
          <v-col>
            <v-text-field v-model="email" label="email" required></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="password"
              label="password"
              required
            ></v-text-field>
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
            Close
          </v-btn>
          <v-btn
            color="fill_button"
            rounded
            outlined
            class="white-filled"
            @click.prevent="onSubmit"
          >
            Save
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
        router.push('/')
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>
