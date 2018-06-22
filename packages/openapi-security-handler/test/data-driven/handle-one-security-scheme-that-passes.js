module.exports = {
  path: '/',
  headers: null,

  constructorArgs: {
    securityDefinitions: {
      keyScheme: {
        type: 'apiKey',
        name: 'api_key',
        in: 'header'
      },
      passwordScheme: {
        type: 'basic'
      }
    },

    securityHandlers: {
      keyScheme: function(req, scopes, securityDefinition, cb) {
        req.user = {name: 'fred'};
        cb(null, true);
      },
      passwordScheme: function(req, scopes, securityDefinition, cb) {
        req.user = {name: 'fred'};
        cb(null, true);
      }
    },

    operationSecurity: [
      {
        keyScheme: ['write']
      },
      {
        passwordScheme: ['write']
      }
    ],
  },

  expectedError: null,
  expectedResult: true,
  expectedUser: {name: 'fred'}
};
