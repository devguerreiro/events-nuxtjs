export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Events Social Network | Nuxtjs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'DevGuerreiro' },
      {
        hid: 'description',
        name: 'description',
        content: 'Invite friends to participate your events',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // custom
    '~/assets/main.css',
    // element ui
    'element-ui/packages/theme-chalk/lib/icon.css',
    'element-ui/packages/theme-chalk/lib/dropdown.css',
    'element-ui/packages/theme-chalk/lib/dropdown-menu.css',
    'element-ui/packages/theme-chalk/lib/dropdown-item.css',
    'element-ui/packages/theme-chalk/lib/tooltip.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/element-ui.js', '~/plugins/vee-validate.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components/',
      prefix: 'Event',
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.js',
      },
      {
        code: 'es',
        file: 'es-ES.js',
      },
      {
        code: 'pt-br',
        file: 'pt-BR.js',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Add exception
    transpile: ['vee-validate/dist/rules'],
  },
}
