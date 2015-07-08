export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('brands'),
    this.use('crossFade', { duration: 300 }),
    this.reverse('crossFade', { duration: 300 })
  );
  this.transition(
    this.fromRoute('brands'),
    this.toRoute('index'),
    this.use('crossFade', { duration: 300 }),
    this.reverse('crossFade', { duration: 300 })
  );
}
