/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var autoprefixer = require('broccoli-autoprefixer');
var compileSass = require('broccoli-sass');

var appCss = compileSass(['app/styles'], 'app.scss', 'assets/app.css');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.
app.import('bower_components/jquery/dist/jquery.js');
app.import('bower_components/foundation/js/foundation.js');

app.import('bower_components/processing/processing.js');

// Icons
app.import("bower_components/foundation-icons/foundation_icons_general/stylesheets/general_foundicons.css");
app.import("bower_components/foundation-icons/foundation_icons_general/fonts/general_foundicons.eot", { destDir: "fonts" });
app.import("bower_components/foundation-icons/foundation_icons_general/fonts/general_foundicons.svg", { destDir: "fonts" });
app.import("bower_components/foundation-icons/foundation_icons_general/fonts/general_foundicons.ttf", { destDir: "fonts" });
app.import("bower_components/foundation-icons/foundation_icons_general/fonts/general_foundicons.woff", { destDir: "fonts" });

// Compile CSS
var appCss = compileSass(['app/styles'], 'app.scss', 'assets/app.css');

module.exports = app.toTree();
