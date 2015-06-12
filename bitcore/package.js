Package.describe({
  name: 'mikamai:bitcore',
  version: '0.12.8',
  summary: 'A pure and powerful JavaScript Bitcoin library.',
  git: 'https://github.com/wstucco/meteor-packages.git',
  documentation: 'README.md'
});

Npm.depends({'bitcore': '0.12.8'});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.export('bitcore');
  api.addFiles('bitcore.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mikamai:bitcore');
  api.addFiles('bitcore-tests.js');
});
