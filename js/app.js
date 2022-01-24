var name = prompt("Enter your name: ");
console.log("Your name is " + name);

var gender = prompt("Please enter your gender","male or female");
console.log("Your gender is " + gender);

    var age = prompt("Enter your age: ");
    console.log("Your age is " + age);

    if (age <= 0) {
        alert("your age is wrong 😇");

      } else {
       console.log("Hello 😇 .. " );

    }

   var welcome= confirm("Press yess to enter welcoming message ")

    if (gender.toLocaleLowerCase() == "male" && welcome == true ) {
        alert("Welcome Mr " +name)
      } else if (gender.toLocaleLowerCase() == "female"  && welcome == true ) {
        alert("Welcome Ms " +name)
      } else if ( welcome == true) { 
       alert("Welcome")
      }
       else {

      }

      var questionNumberOne = prompt("Are you happy today??","Yes / no");
  

      if (questionNumberOne.toLocaleLowerCase() == "yes" ) {
        console.log(true);

      } else if (questionNumberOne.toLocaleLowerCase() =="no") {
        console.log(false);

      }
       else {
        console.log("invalid");
      }

      
      var questionNumberTwo = prompt("Do you like Javascript ??","Yes / no");
      if (questionNumberTwo.toLocaleLowerCase() == "yes" ) {
        console.log(true);

      } else if (questionNumberTwo.toLocaleLowerCase() =="no") {
        console.log(false);

      }
       else {
        console.log("invalid");
      }
      
      var questionNumberThree = prompt("Do you work ??","Yes / no");
      
      if (questionNumberThree.toLocaleLowerCase() == "yes" ) {
        console.log(true);

      } else if (questionNumberThree.toLocaleLowerCase() =="no") {
        console.log(false);

      }
       else   {
        console.log("invalid") ;
      }

    
      const myArray = [questionNumberOne, questionNumberTwo , questionNumberThree];
      console.log(myArray)

      for (var i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
      }