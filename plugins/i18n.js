import Vue from 'vue'
import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const SUPPORT_LOCALES = ['en', 'fr']

export function setupI18n(options = { locale: 'en' }) {
  const i18n = new VueI18n(options)
  setI18nLanguage(i18n, options.locale)
  return i18n
}

export function setI18nLanguage(i18n, locale) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    i18n.global.locale.value = locale
  }
  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  document.querySelector('html').setAttribute('lang', locale)
}

export async function loadLocaleMessages(i18n, locale) {
  const messages = await import(`./locales/${locale}.json`)
  i18n.global.setLocaleMessage(locale, messages.default)

  return nextTick()
}


export default ({ app }) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en',
    messages: {
      'en': require('~/locales/en.json'), 
      'fr': require('~/locales/fr.json')
    }
  })

  router.beforeEach(async (to, from, next) => {
    const paramsLocale = to.params.locale

    // use locale if paramsLocale is not in SUPPORT_LOCALES
    if (!SUPPORT_LOCALES.includes(paramsLocale)) {
      return next(`/${locale}`)
    }

    if (!i18n.global.availableLocales.includes(paramsLocale)) {
      await loadLocaleMessages(i18n, paramsLocale)
    }

    setI18nLanguage(i18n, paramsLocale)
    return next()
  })

}


