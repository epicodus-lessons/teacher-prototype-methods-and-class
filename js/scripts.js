
//******** */!!!
//Please note that Parent and Child are common names for the relationship between classes in many programming languages, and this example is NOT demonstrating that relationship. Read about parent and child class relationships here https://www.w3schools.com/jsref/jsref_class_extends.asp#:~:text=Definition%20and%20Usage,you%20create%20a%20new%20class.

///******* */!!!

//Business logic
class Parent {
  constructor(name) {
    this.name = name;
    // this.child = new Child(name);// we can't create the child as a property of the Parent class in the same way, because it extends that parent class now and will gives us a recursive function call error https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Too_much_recursion
  }
  buyIceCream() {
    return `${this.name} buys some ice cream`;
  }
}

class Child extends Parent {
  constructor(name) {
    super(name);
    this.name = "jr " + name;
  }
  cries() {
    return `${this.name} cries a lot`;
  }
}
$(document).ready(function(){
  //setting my new parent variable outside the form submit scope so I can use it in other events (like the click listeners)
  let newParent; // don't need to set it equals to anything, it'll be undefined by default and we can change it later
  let newChild;
  $('#result').text("the parent does not exist yet, please submit the form to create the parent")
  //event listeners below
  $('#name-form').submit(function(event){
    event.preventDefault();
    const inputtedName = $('#p-name').val();//grab value from form input
    newParent = new Parent(inputtedName);//create parent using Parent() constructor and the `new` keyword
    newChild = new Child(inputtedName); 
    console.log(newParent);
    $('#result').text("your parent exists now, congratulations. Click one of the buttons below to begin parenting.")
  });
  $('#cry').click(function(){
    $('#result').text(newChild.cries());//set the text to the return of Child.cries(). The child can now also has buyIceCream as one of it's methods because it is extending the Parent class, so it inherits the parents methods.
    console.log(newChild.buyIceCream());//look in the console to see this output
  });
  $('#buy').click(function(){
    //console.log(newParent.cries());//<-- this is not a funciton. The Parent object does not have cry() as one of it's methods, that method is defined in the Child class. Even though the Child inherits the Parents methods, the reverse it not true and the Parent does not inherit the childs methods.
    $('#result').text(newParent.buyIceCream());
  });
})