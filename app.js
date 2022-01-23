var getName = prompt("What is your name? ");

var gender = prompt("what is your gender");
if (gender != "male" && gender != "female")
    alert("invalid input")
else if (gender == "male")
    alert("welcome Mr." + getName)
else
    alert("welocme Ms." + getName)

var age = prompt("what is your age");
if (age <= 0)
    alert("age is invalid");
var bool = confirm("Do you want to skip the welcoming message ??");
if (bool != true)
    alert("Welcome to My todo list website, this website will help you to memorize your tasks and do them in the best way");