Package.describe({
  name: 'invertedbit:impact-core',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Impact Core Package',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/InvertedBit/impact-core.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('less');
  api.use('nemo64:bootstrap');
  api.use('iron:core');
  api.use('iron:layout');
  api.use('iron:url');
  api.use('iron:dynamic-template');
  api.use('iron:location');
  api.use('iron:middleware-stack');
  api.use('iron:router');
  api.use('iron:controller');
  api.use('templating', 'client');
  
  api.addFiles('stylesheets/style.less');
  api.addFiles('stylesheets/vendor/custom.bootstrap.mixins.import.less');
  api.addFiles('stylesheets/vendor/custom.bootstrap.import.less');
  api.addFiles('stylesheets/typo.import.less');

  api.addFiles('templates.html');
  api.addFiles('underConstruction.html');

  api.addFiles('routing.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('invertedbit:impact-core');
  api.addFiles('impact-core-tests.js');
});
