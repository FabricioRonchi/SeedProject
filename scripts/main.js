require.config({
  baseUrl: "scripts",
  paths: {
    'angular': 'lib/angular',
    'angular-route': 'https://code.angularjs.org/1.3.0-beta.10/angular-route.min',
    'angularAMD': 'lib/angular-amd'
  },
  shim: {
    'angularAMD': ['angular'],
    'angular-route': ['angular']
  },
  deps: ['js/app']
});
