
export default [
  // The array is pre-populated with internal, built-in middlewares, prefixed by `strapi::`
  'strapi::logger',
  'strapi::cors',
  'strapi::body',
  'strapi::errors',
  // ...
  'my-custom-node-module', // custom middleware that does not require any configuration
  {
    // custom name to find a package or a path
    name: 'my-custom-node-module',
    config: {
      foo: 'bar',
    },
  },
  {
    // custom resolve to find a package or a path
    resolve: '../some-dir/custom-middleware',
    config: {
      foo: 'bar',
    },
  },
];

module.exports = ({ env }) => ({
  settings: {
    cors: {
      enabled: true,
      origin: env('CORS_ORIGIN', 'https://gyncancersite.vercel.app'), // Set your frontend origin
      headers: ['Content-Type', 'Authorization', 'Accept'],
    },
  },
  load: {
    before: ['strapi::cors', 'strapi::logger', 'strapi::body', 'strapi::errors'],
    order: ['Define the order in which middleware should be applied'],
  },
});

