//!!! Important note !!!
//Please note that you will see Parent and Child as common names for the relationship between classes in many programming languages, and this example is NOT demonstrating that relationship. Read about the difference between classes and prototypes in Javascript at these links:
//What is a prototype in Javascript? - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
//What is a class in javascript? - https://www.w3schools.com/jsref/jsref_classes.asp
//!!!----------------!!!

//Business logic
function Person(name){//Constructor function
  this.name = name;
  this.baby = new Baby(name);
}
Person.prototype.buyIceCream = function(){//Prototype method
  return `${this.name} buys ice cream`;//this uses template literals, read about them here - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
}
function Baby(name){//Constructor function
  this.name = name + " jr";
}
Baby.prototype.cries = function(){//Prototype method
  return `${this.name} cries`
}
$(document).ready(function(){
  //setting my new Person variable outside the form submit scope so I can use it in other (lower) scopes (like the click listeners)
  let newPerson; // don't need to set it equals to anything, it'll be undefined by default and we can change it later
  $('#result').text("the Person does not exist yet, please submit the form to create the Person")
  //event listeners below
  $('#name-form').submit(function(event){
    event.preventDefault();
    const personName = $('#p-name').val();
    newPerson = new Person(personName);//set newPerson variable to an instance of Person using Person() constructor and the `new` keyword
    console.log(newPerson);
    $('#result').text("your Person exists now, congratulations. Click one of the buttons below to begin Personing.")
  });
  $('#cry').click(function(){
    $('#result').text(newPerson.baby.cries());//set the text to the return of Baby.prototype.cries(), I can access `cries()` because there is an instance of Baby as a property of newPerson, and the object newPerson.baby has the method `cries()`
  });
  $('#buy').click(function(){
    $('#result').text(newPerson.buyIceCream());//set the text to the return of Person.prototype.buyIceCream()
  });
  //NOTE  
  //newPerson.cries() is not a funciton, cries only belongs to the baby object. Even though the baby object exists as a property of the newPerson, newPerson does not inherit cries() as it's own method. 
  //the same goes for newPerson.baby.buyIceCream(), <-- that is not a function. The baby inside newPerson dosen't have that method as part of it's prototype
})