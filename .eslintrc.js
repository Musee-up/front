module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  ignorePatterns: ['tools/**', 'graphql/generated.ts'],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/multi-word-component-names': 'off',
    // 'vue/multi-word-component-names': [
    //  'error',
    //  {
    //    ignores: ['default', 'index'],
    //  },
    // ],
  },
}
