require("dotenv").config();


export default {
  mode: "universal",
  // spa
  /*
   ** Headers of the page
   */
  head: {
    // title: process.env.npm_package_name || '',
    title: "Nuxt Blog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: " My cool web development blog "
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fa923f", failedColor: "red", height: "4px" },
  // loading:false

  // if mode == spa

  // loadingIndicator : {
  // name:'circle',color:"orange"
  // },

  env: {
    firebaseUrl: process.env.FIREBASE_URL
  },

  transition: {
    name: "fade",
    mode: "out-in"
  },
  /*
   ** Global CSS
   */
  css: ["~assets/styles/main.css"],
  /*
   ** Plugins to load before mounting the App
   */

  plugins: [
    "~plugins/core-components.js",
     "~plugins/date-filter.js"
    ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios'
  ],
  axios:{
    baseURL: process.env.BASE_URL||process.env.FIREBASE_URL,
    credentials:false
  }, 
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
