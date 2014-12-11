Package.describe({
  name: 'webcomponents',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.use(['templating'], 'client');

    api.addFiles([
        'meteor-button.html',
        'meteor-button.css'
    ], 'client', {isAsset:true});

    api.addFiles('head.html', 'client');
});
