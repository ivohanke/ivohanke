import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('brands');
  this.route('about');
  this.resource('work', function () {
    this.route('project', {path: 'project/:project_id'}, function() { });  
  });

});

export default Router;
