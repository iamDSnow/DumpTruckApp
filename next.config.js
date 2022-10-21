require('dotenv').config()

module.exports = {
    images: {
      domains: ['lh3.googleusercontent.com'],
      formats: ['image/webp'],
    },
    env: {
      SENDGRID_API_KEY: process.env.NEXT_PUBLIC_SENDGRID_API_KEY
    }
  }