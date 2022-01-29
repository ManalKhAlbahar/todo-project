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

      
    

      function askQuestion (question){
          let answer = prompt(question);
          if (answer.toLocaleLowerCase()=="yes" || answer.toLocaleLowerCase()== "no" ) {
              return answer;
              
          }
          else  {
            return "invalid";
          }

      }



      var questionNumberOne =askQuestion("Are you happy today??","Yes / no");
      var questionNumberTwo = askQuestion("Do you like Javascript ??","Yes / no");
     var questionNumberThree = askQuestion("Do you work ??","Yes / no");
      

    
      const myArray = [questionNumberOne, questionNumberTwo , questionNumberThree];
      console.log(myArray)

      for (var i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
      }