
//******** */!!!
//Please note that Parent and Child are common names for the relationship between classes in many programming languages, and this example is NOT demonstrating that relationship. Read about parent and child class relationships here https://www.w3schools.com/jsref/jsref_class_extends.asp#:~:text=Definition%20and%20Usage,you%20create%20a%20new%20class.

///******* */!!!

//Business logic
function Parent(name){//Parent constructor
  //console.log(name) to see if the variable is coming in as what you expect
  this.name = name;
  //console.log(this.name) you can console.log() after to see if it got set right
  this.child = new Child(name);
}
Parent.prototype.buyIceCream = function(){
  return `${this.name} buys ice cream`;//template literal https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
}
function Child(name){//Child constructor
  this.name = "jr " + name;
}
Child.prototype.cries = function(){
  return `${this.name} cries`
}
$(document).ready(function(){
  //setting my new parent variable outside the form submit scope so I can use it in other events (like the click listeners)
  let newParent; // don't need to set it equals to anything, it'll be undefined by default and we can change it later
  $('#result').text("the parent does not exist yet, please submit the form to create the parent")
  //event listeners below
  $('#name-form').submit(function(event){
    event.preventDefault();
    const parentName = $('#p-name').val();//grab value from form input
    newParent = new Parent(parentName);//create parent using Parent() constructor and the `new` keyword
    console.log(newParent);
    $('#result').text("your parent exists now, congratulations. Click one of the buttons below to begin parenting.")
  });
  $('#cry').click(function(){
    $('#result').text(newParent.child.cries());//set the text to the return of Child.prototype.cries()
  });
  $('#buy').click(function(){
    $('#result').text(newParent.buyIceCream());//set the text to the return of Parent.prototype.buyIceCream()
  });
  //NOTE  
  //newParent.cries() is not a funciton, cries only belongs to the Child object. Even though the child object exists as a property of the newParent, newParent does not inherit cries() as it's own method. 
  //the same goes for newParent.child.buyIceCream(), <-- that is not a function. The Child inside newParent dosen't have that method as part of it's prototype
})