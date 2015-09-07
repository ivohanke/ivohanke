import Ember from "ember";

export default Ember.Controller.extend({
  init: function() {
    Ember.$('section').css('height', Ember.$(document).height() );

    Ember.$(window).resize(function() {
      Ember.$('section').css('height', Ember.$('section').height() - Ember.$('footer').height());
    });
  }
});
