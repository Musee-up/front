<template>
  <v-form>
  <!--   ref="form" -->
  <!--   v-model="valid" -->
  <!--   lazy-validation -->
  <!-- > -->

  <!--   <v-text-field -->
  <!--     v-model="email" -->
  <!--     :rules="emailRules" -->
  <!--     label="E-mail" -->
  <!--     required -->
  <!--   ></v-text-field> -->
  <!--     <v-btn -->
  <!--     :disabled="!valid" -->
  <!--     color="success" -->
  <!--     class="mr-4" -->
  <!--     @click="onSubmit" -->
  <!--   > -->
  <!--     Validate -->
  <!--   </v-btn> -->
  </v-form>
</template> 

<script >
//export default {
//  data: () => ({
//    valid: true,
//    name: '',
//    nameRules: [
//      v => !!v || 'Name is required',
//      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
//    ],
//    email: '',
//    emailRules: [
//      v => !!v || 'E-mail is required',
//      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
//    ],
//  }),
//
//  methods: {
//    validate () {
//      this.$refs.form.validate()
//    },
//    onSubmit: async () => {
//      try {
//        await this.$strapi.register({ email: '', username: '', password: '', phoneNumber: '' })
//
//        router.push('/authenticated-page')
//      } catch (e) {}
//    }
//  },
//}
</script>
