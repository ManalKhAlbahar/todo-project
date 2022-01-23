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
      