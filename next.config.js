module.exports = {
 trailingSlash: true,
 redirects: async () => [
  {
    source: '/:path*',
    has: [{ type: 'host', value: 'www.ccroadcases.com' }],
    destination: 'https://ccroadcases.com/:path*',
    permanent: true
  }
 ]
}