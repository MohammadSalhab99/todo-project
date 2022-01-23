var getName = prompt("What is your name? ");

var gender = prompt("what is your gender");
if (gender != "male" && gender != "female") {
    alert("invalid input")

}


var age = prompt("what is your age");
if (age <= 0)
    alert("age is invalid");
var bool = confirm("Do you want to skip welcoming??");
if (bool != true)
    alert("welcome to my todo list ");