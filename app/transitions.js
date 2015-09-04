export default function(){
  //index
  this.transition(
    this.fromRoute('index'),
    this.toRoute('work'),
    this.use('toLeft', { duration: 300 }),
    this.reverse('toRight', { duration: 300 })
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('brands'),
    this.use('toLeft', { duration: 300 }),
    this.reverse('toRight', { duration: 300 })
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('about'),
    this.use('toLeft', { duration: 300 }),
    this.reverse('toRight', { duration: 300 })
  );

  // work
  this.transition(
    this.fromRoute('work'),
    this.toRoute('brands'),
    this.use('toLeft', { duration: 300 }),
    this.reverse('toRight', { duration: 300 })
  );
  this.transition(
    this.fromRoute('work'),
    this.toRoute('about'),
    this.use('toLeft', { duration: 300 }),
    this.reverse('toRight', { duration: 300 })
  );

  // brands
  this.transition(
    this.fromRoute('brands'),
    this.toRoute('about'),
    this.use('toLeft', { duration: 300 }),
    this.reverse('toRight', { duration: 300 })
  );
}
