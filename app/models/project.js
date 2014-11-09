import DS from 'ember-data';

var Project = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  isCompleted: DS.attr('date')
});

Project.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Bugs Bunny',
      description: 'Lorem ipsum dolor sit amet',
      date: null

    },
    {
      id: 2,
      title: 'Wile E. Coyote',
      description: 'Lorem ipsum dolor sit amet',
      date: null
    }
  ]
});

export default Project;
