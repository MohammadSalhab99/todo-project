//task 5
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



//task 6
var arr = []

function wakingUp() {
    var morningWakeup = prompt("Do you wake up early? yes/no");
    if (morningWakeup != "yes" && morningWakeup != "no") {
        alert("invalid input");
        arr.push("invalid");
    } else if (morningWakeup == "yes")
        arr.push("yes");
    else
        arr.push("no");

}

function training() {
    var workout = prompt("Do you workout? yes/no");
    if (workout != "yes" && workout != "no") {

        alert("invalid input");
        arr.push("invalid");
    } else if (workout == "yes")
        arr.push("yes");
    else
        arr.push("no")
}

function eatingBreakfast() {
    var eatBreakfast = prompt("Do you eat breakfast? yes/no");

    if (eatBreakfast != "yes" && eatBreakfast != "no") {
        alert("invalid input")
        arr.push("invalid");
    } else if (eatBreakfast == "yes")
        arr.push("yes");
    else
        arr.push("no");
}

function traverseArray(arr) {
    for (let i = 0; i < arr.length; i++)
        console.log(arr[i]);

}
wakingUp();
training();
eatingBreakfast();

traverseArray(arr);