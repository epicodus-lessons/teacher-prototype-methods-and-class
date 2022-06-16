//Business logic
class Parent {
  constructor(name) {
    this.name = name;
//We can't have the Child as a property 
//of the Parent class because Child extends Parent now. 
//Why exactly that is a bit beyond the scope of this example,
//and you do not need to know it. Just know that if a class 
//extends another class, it gets access to all the parent classes methods.
//But if you're curious see this page https://javascript.info/class-inheritance
}
  buyIceCream() {
    return this.name +  ' buys some ice cream';
  }
}

class Child extends Parent {
  constructor(name) {
    super(name);
    this.name = name + ' jr';
  }
  cries() {
    return this.name + ' cries a lot';
  }
}
$(document).ready(function(){
  let newParent;
  let newChild;
//event listeners below
  $('#name-form').submit(function(event){
    event.preventDefault();
    $('.hidden').show();
    const inputtedName = $('#p-name').val();
    newParent = new Parent(inputtedName);
    newChild = new Child(inputtedName); 
    console.log(newParent);
    $('#child-name').text(newParent.name);
    $('#parent-name').text(newChild.name);
  });
  $('#cry').click(function(){
    $('#child-output').text(newChild.cries());
  });
  $('#child-buy').click(function(){
    $('#child-output').text(newChild.buyIceCream());
//The child can now also has buyIceCream as one of 
//it's methods because it is extending the Parent class,
//so it inherits the parents methods.
  });
  $('#buy').click(function(){
    $('#parent-output').text(newParent.buyIceCream());
//newParent.cries();//<-- this is not a funciton. 
//The Parent object does not have cry() as one of it's methods,
//that method is defined in the Child class. Even though the Child 
//inherits the Parents methods, the reverse it not true and the 
//Parent does not inherit the childs methods.
  });
  $('#reset-everything').click(function(){
    $('.hidden').hide();
    $('#p-name').val("");
    $('#child-name').text('Child name does not exist, because Child object does not exist yet');
    $('#parent-name').text('parent name does not exist, because parent object does not exist yet');
    $('#parent-output').text('');
    $('#child-output').text('');
  })
})