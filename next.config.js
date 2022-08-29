const withPWA = require('next-pwa');

module.exports = withPWA({

  dest: 'public',
  register: true,
  skipWaiting: true,
  
  
}), {
  images: {
    domains: ['lh3.googleusercontent.com'],
    formats: ['image/webp'],
  },
}
