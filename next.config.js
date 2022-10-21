require('dotenv').config()

module.exports = {
    images: {
      domains: ['lh3.googleusercontent.com'],
      formats: ['image/webp'],
    },
    env: {
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
    }
  }