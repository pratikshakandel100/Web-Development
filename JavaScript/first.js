// console.log("Happy Coding");
// console.log("Unisha Khanal");
// let a = "12";
// let b = 13;
// let c = 15;
// console.log(a + b +c);
// console.log("The sum of a and b and c  is " + a + " " +b+ " " + c );


// let outer = "I am outside!"; 
 
// function outerFunction() { 
//   let inner = "I am inside!"; 
   
//   function innerFunction() { 
//     console.log(outer);  
//     console.log(inner); 
//   } 
 
//   innerFunction(); 
// } 
 
// outerFunction(); 
 

function letExample() {
    if (true) {
        let y = 20;
        console.log("Inside if block: y =", y); // 20
    }
    console.log("Outside if block: y =", y); // ReferenceError: y is not defined
}
letExample();


function constExample() {
    const z = 30;
    console.log("Value of z:", z); // 30
    z = 40; // TypeError: Assignment to constant variable
}
constExample();

function letExample() {
    if (true) {
        let y = 20;
        console.log("Inside if block: y =", y); // 20
    }
    // console.log("Outside if block: y =", y); // ReferenceError: y is not defined
}
letExample();


function varExample() {
    if (true) {
        var x = 10;
        console.log("Inside if block: x =", x); // 10
    }
    console.log("Outside if block: x =", x); // 10 (accessible due to function scope)
}
varExample();



function constExample() {
    const z = 30;
    console.log("Value of z:", z); // 30
    // z = 40; // TypeError: Assignment to constant variable
}
constExample();
