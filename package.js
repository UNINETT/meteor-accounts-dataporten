Package.describe({
  name: 'kasperrt:accounts-dataporten',
  summary: "Login service for Dataporten accounts",
  version: "0.1.1",
  git: 'https://github.com/kasperrt/meteor-accounts-dataporten.git',
  documentation: null
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('kasperrt:dataporten@0.0.7', ['client', 'server']);

  api.addFiles('dataporten_login_button.css', 'client');

  api.addFiles("dataporten.js");
});
