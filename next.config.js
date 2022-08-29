const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // next.js config
}), {
  images: {
    domains: ['lh3.googleusercontent.com'],
    formats: ['image/webp'],
  },
}
