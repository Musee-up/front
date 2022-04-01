<template>
  <v-form ref="form" lazy-validation>
    <v-text-field
      v-model="email"
      label="E-mail"
    ></v-text-field>
    <v-btn color="success" class="mr-4" @click="onSubmit">
      Validate
    </v-btn>
  </v-form>
</template>

<script >
export default {
  data: () => ({
    email: '',
  }),

  methods: {
    onSubmit: async function() {
      await this.$strapi
        .register({
          username: 'Strapi user',
          email: 'user@strapi.io',
          password: 'strapiPassword'
        })
    },
  },
}
</script>
