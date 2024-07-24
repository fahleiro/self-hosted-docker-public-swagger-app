module.exports = {

  swagger: '2.0',

  info: {

    version: '1.0.0',

    title: 'Sample API',

    description: 'API documentation for the Sample API',

  },

  host: 'localhost:25000',

  basePath: '/',

  schemes: ['http'],

  paths: {

    '/hello': {

      get: {

        summary: 'Returns a greeting message',

        responses: {

          200: {

            description: 'A greeting message',

            schema: {

              type: 'string',

            },

          },

        },

      },

    },

  },

};
