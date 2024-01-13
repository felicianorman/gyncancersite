
module.exports = [
  // ...
  {
    name: 'strapi::cors',
    config: {
      origin: ['https:/localhost:1337/graphql', 'https://gyncancersite.vercel.app/', 'hhttps://gyncancersite.vercel.app/graphql'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  // ...
]