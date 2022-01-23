var name = prompt("Enter your name: ");
console.log("Your name is " + name);

var gender = prompt("Please enter your gender","male or female");
console.log("Your gender is " + gender);

/*if (gender == 'male')
{
    alert("Welcome, MR. " + name);

}
else  (gender == 'female')
{
    alert("Welcome, MS. " + name);
    */
    
    var age = prompt("Enter your age: ");
    console.log("Your age is " + age);

    if (age <= 0) {
        alert("your age is wrong 😇");

      } else {
       console.log("Hello 😇 .. " );

    }

    var Welcome = confirm("Welcoming Message");
    console.log(Welcome);

    if (gender == "male" ) {
        alert("Hello Mr " +name)
      } else if (gender == "female") {
        alert("Hello Ms " +name)
      } else {
        console.log(Welcome)
      }
      