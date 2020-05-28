export default {
  mode: 'universal',
  head: {
    title: 'About Ghufron Fikrianto | Front-end web developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Front-end web developer, building modern web apps, and experimenting using bleeding-edge technology. Just a personal landing page, built using nuxt.js'
      },
      {
        name: 'msapplication-TileColor',
        content: '#2b5797'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#2056e2'
      }
    ]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [
    {
      src: './plugins/directives/index.js',
      mode: 'client',
      ssr: false
    }
  ],
  buildModules: [
    '@nuxt/components',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss'
  ],
  modules: ['@nuxtjs/pwa', 'nuxt-webfontloader'],
  webfontloader: {
    google: {
      families: ['Montserrat:500,600,700']
    }
  },
  pwa: {
    meta: {
      name: 'Ghufron Fikrianto',
      author: 'Ghufron Fikrianto',
      lang: 'en'
    },
    manifest: {
      name: 'GHF',
      lang: 'en'
    }
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
