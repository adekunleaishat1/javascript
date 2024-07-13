let name1 = "going"
let name2 = "notgoing"
let x = 10
let y = 4
let num = document.getElementById("num")
let input2 = document.getElementById("inpu")
console.log(input2.value);
num.innerHTML = 0
// console.log(x = y)
console.log(name1.length);
console.log(x %= y);   // Assignment Operator
console.log(x);
console.log(typeof y); // To check the data type of your variable
 

// Arithmetic Operator
x = x + y
x = x - y
x = x * y
x = x / y
x = x ** y
x = x % y

//Comparism operator

console.log(2 == "2"); // equal in value
console.log(2 === '2');  //equal in value and data type
console.log(2 != 2);  // check if the value is not equal
console.log(2 !== "2");  // check if the value and data type is not equal
console.log(3 > 2); // check greater than the other
console.log(1 < 2);  // check if value is less than the other
console.log(1 <= 2);
console.log(name1.length != name2.length);

console.log( 2 == 2 && 2 == 3); // true && false = false
console.log( 2 == 2  || 2 == 3); // true || false = true

let light = true
let nolight = !light
console.log(nolight); 

// increment operator

let count = 3
console.log( ++count);

//decrement 
let count2 = 4
console.log( --count);


function clik() {
    ++num.innerHTML
    console.log(input2.value);
    input2.value = "fgggg"
//  console.log( ++count);
}  
function minu(){
    num.innerHTML == 0 ? num.innerHTML = 0 :  --num.innerHTML 
}



let raining = false

raining == true ? console.log("it is working ") : console.log("it is not working");