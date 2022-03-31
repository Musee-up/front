import colors from 'vuetify/es5/util/colors'

export default {
  theme: {
    dark: false,
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
        primary: colors.blue.darken2,
        text: '#24242C',
        selected: '#618AB2',
        fill_button: '#064888',
        variant: '#FC206C',
        dark_text: '#45535F',
        title: '#404259',
        description: '#63686E',
        // 'secondary--text': 'colors.blue.darken2',
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
    },
  },
}
