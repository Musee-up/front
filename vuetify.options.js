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
        special_1: '#BEB1F2',
        special_2: '#56D9FD',
        primary: '#064888',
        delete: '#C64343',
        dark: '#24242C',
        selected: '#618AB2',
        blue: '#064888',
        variant: '#FC206C',
        dark_text: '#45535F',
        title: '#404259',
        description: '#b1b1b1',
        'description-list': '#63686E',
        detail: '#AEAEB2',
        attributes: '#45535F',
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
    },
  },
}
