const resolve = require('path').resolve

const isVueRule = (rule) => {
  return rule.test.toString() === '/\\.vue$/'
}
const isSASSRule = (rule) => {
  return ['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1
}
const sassResourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: [
      resolve(__dirname, 'assets/scss/_base.scss')
    ]
  }
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'dailysource-designTest',
    titleTemplate: '%s - Dailysource',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Design Test' },
      { hid: 'og:url', property: 'og:url', content: 'https://dailysource.org/' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'DailySource' },
      { hid: 'og:image', property: 'og:image', content: 'https://res.cloudinary.com/startics/image/upload/v1511190940/AAEAAQAAAAAAAAUqAAAAJDQ2NzEwNDg5LTkxNWItNGRlNS1hMTNkLWRjN2I2NzJlMGU0OQ_nncfhs.png' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'dailysource' },
      { hid: 'og:description', property: 'og:description', content: 'Design Test' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro' }
    ]
  },
  env: {
    baseUrl: 'http://localhost:3000'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#FF5555'
  },
  /*
  ** Build configuration
  */
  plugins: [
    { src: '~/plugins/buefy.js' }
  ],
  css: ['~/assets/main.scss'],
  build: {
    // Needed to fix issues with bulma.
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      /* Allow global scss */
      config.module.rules.forEach((rule) => {
        if (isVueRule(rule)) {
          rule.options.loaders.sass.push(sassResourcesLoader)
          rule.options.loaders.scss.push(sassResourcesLoader)
        }
        if (isSASSRule(rule)) {
          rule.use.push(sassResourcesLoader)
        }
      })
    }
  }
}
