let string = "Javascript onethree"
console.log(string.length);
console.log(string.toLocaleLowerCase());
console.log(string[4]);
console.log(string.length-1);
let lastindex = string.length-1
console.log(string[lastindex]);

// substr
console.log(string.substr(0,1))  
// substring

console.log(string.substring(0,1)) 
//split
console.log(string.split(" "))  
let show = document.getElementById("show")

let blog = document.getElementById("blog")
// trim
console.log(string.trim(' '))
// includes 
console.log(string.includes('Days')) 

// replace 
console.log(string.replace('Javascript', 'Python'))
// charAt
console.log(string.charAt(0)) 

console.log(Math.floor(100000));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10));

function post(){
  console.log(blog.value);
console.log( blog.value.includes("mad"))
if (blog.value.includes("mad")) {
  let value = blog.value.replace("mad", "good")
   show.innerHTML = value
}
//   let spli = blog.value.split(".")
//  console.log( blog.value.split("."));
//   show.innerHTML = spli[0] 
}


let password = document.getElementById("password")
console.log(password.type);
function change() {
    if (password.type == "password") {
        password.type = "text"
    }
}

function shownum(el){
 console.log(el);
}

let answer = document.getElementById("answer")

function guess() {
  console.log( answer.value);
 let randomnumber = Math.floor(Math.random() * 10)
 console.log(randomnumber);
 if (answer.value == randomnumber) {
   alert("you got it right")
 }else{
  alert("you got it wrong")
 }

}

// for(let i = 1; i <= 100; i++){
//    console.log(i);
// }

/// 33 - 46
// for(let i = 33; i <= 46 ; i++){
//   console.log(i);
// }

// 100 - 50
// for(let i = 100; i >= 50; i--){
//   console.log(i);
// }
let display = document.getElementById("display")

// even number and odd number 
for(let i = 1 ; i <= 100 ; i++){
  // console.log(i);
  if (i % 2 == 0) {
    console.log(i + " is an even number");
    // display.innerHTML += i + " is an even number"
    // display.innerHTML += `<p>${i} is an even number</p>`
  }else{
    console.log(i + "is an odd number");
      //  display.innerHTML += `<p style="color: red">${i} is an odd number</p>`
  }
}
// Multiplication table
let multiplicationtable = document.getElementById("multiplicationtable")

for(let i = 1; i <= 20; i++){
  multiplicationtable.innerHTML += `<h1>Multiplication Table ${i}</h1>`
  for(let j = 1; j <= 20; j++){
    console.log(j);
    multiplicationtable.innerHTML += `<h1>${i} * ${j}  = ${i * j}</h1>`
  }
}