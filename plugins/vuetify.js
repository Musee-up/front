import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

// const messages = {
//   en: {
//     $vuetify: {
//       dataIterator: {
//         rowsPerPageText: 'Items per page:',
//         pageText: '{0}-{1} of {2}',
//       },
//     },
//   },
//   fr: {
//     $vuetify: {
//       dataIterator: {
//         rowsPerPageText: 'Élement par page:',
//         pageText: '{0}-{1} de {2}',
//       },
//     },
//   },
// }

export default new Vuetify({
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
  theme: {
    themes: {
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
      },
      light: {
        primary: colors.white,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
    },
  }
})
