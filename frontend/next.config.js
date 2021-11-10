const withImages = require('next-images')

module.exports = {
   reactStrictMode: true,
   publicRuntimeConfig: {
      APP_NAME: 'SEO_NEXT ',
      API_DEVELOPMENT: 'http://localhost:8000/api',
      PRODUCTION: false
   }
}

module.exports =  withImages()

