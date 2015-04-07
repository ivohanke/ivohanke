export default function(){
  this.transition(
    this.fromRoute('projects'),
    this.toRoute('project'),
    this.use('toDown', { duration: 300 }),
    this.reverse('toUp', { duration: 300 })
  );
}
