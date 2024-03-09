module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('dj3rrfgfr'),
          api_key: env('dj3rrfgfr'),
          api_secret: env('sarmU-xCMDs92-LubPmhHWHrRAQ'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });