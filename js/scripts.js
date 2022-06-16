// Business logic
function Person(name){//Constructor function
  this.name = name;
  this.baby = new Baby(name);//Creating a instance of Baby and setting it as a property of Person
}
Person.prototype.buyIceCream = function(){//Prototype method
  return this.name + " buys ice cream";
}
function Baby(name){
  this.name = name + " jr";
}
Baby.prototype.cries = function(){
  return this.name + " cries";
}
// UI logic
$(document).ready(function(){
// setting my new Person variable outside the form submit scope 
// so I can use it in other (lower) scopes (like the click listeners)
  let newPerson;
  $('#name-form').submit(function(event){
    event.preventDefault();
    $('.hidden').show();
    const personName = $('#p-name').val();
    newPerson = new Person(personName);
    $('#person-name').text(newPerson.name);
    $('#baby-name').text(newPerson.baby.name);
  });
  $('#cry').click(function(){
    $('#baby-output').text(newPerson.baby.cries());
// the above code displays the return of Baby.prototype.cries(), 
// I can access `cries()` because there is an instance of Baby
// as a property of newPerson, and the object newPerson.baby 
// has the method `cries()`
  });
  $('#buy').click(function(){
    $('#person-output').text(newPerson.buyIceCream());
  });
//TAKE AWAY
// newPerson.cries() is not a funciton, cries() only belongs to the baby object. 
// Even though the baby object exists as a property of the newPerson, newPerson 
// does not inherit cries() as it's own method. 
// the same goes for newPerson.baby.buyIceCream(), <-- that is not a function. 
// The baby inside newPerson dosen't have that method as part of it's prototype
  $('#reset-everything').click(function(){
    newPerson = {};
    $('.hidden').hide();
    $('#person-name').text('person name does not exist, because person object does not exist yet');
    $('#baby-name').text('baby name does not exist, because baby object does not exist yet');
    $('#baby-output').text("");
    $('#person-output').text("");
    $("input#p-name").text("");
  })
});
//!!! Important note !!!
// Please note that you will see Parent and Child as common names for the relationship
// between classes in many programming languages, and this example is NOT demonstrating 
// that relationship. If you are interested in knowing more you can
// Read about the difference between classes and prototypes in Javascript at the below links.
// ES6 classes will be covered in future lessons, so don't feel obligated to look at these now.
// What is a prototype in Javascript? - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
// What is a class in javascript? - https://www.w3schools.com/jsref/jsref_classes.asp
//!!!----------------!!!