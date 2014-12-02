import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('clients');
  this.route('about');
  this.resource('projects', function () { });
  this.route('project', {path: 'project/:project_id'}, function() { });
});

export default Router;
