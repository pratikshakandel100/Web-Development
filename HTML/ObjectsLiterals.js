const student = {
    Name: "Unisha",
    age: 21,
    marks: 94.4,
    city: "Kathmandu"
};
console.log(student);
console.log(student["Name"]);
console.groupCollapsed(student.age);
student.marks = 92;
console.log(student);

// const classInfo = {
//     stu1: {
//         name : "Unisha Khan",
//         age: 21,
//         location: "Mulpani"
//     },
//     stu2: {
//         name: "Swikriti",
//         Gender: "Female",
//         height: "5ft"
//     },
//     stu3: {
//         faceType: "Oily"
//     }
// }
// }
let classInfo = {
    stu1: {
        name: "Unisha Khanal",
        age: 21,
        location: "Mulpani"
    },
    stu2: {
        name: "Swikriti",
        Gender: "Female",
        height: "5ft"
    },
    stu3: {
        faceType: "Oily"
    }
};

console.log(classInfo); // <-- This should print to the console



console.log(classInfo.stu1);
console.log(classInfo.stu1.name);

num = console.log(Math.floor(Math.random()*10 + 1));
function printPoem(){
     console.log("Poem")
}

function rollADic(){
    num = Math.floor(Math.random()*6 ) +1;
    console.log(num);
}
// rollADic();
// rollADic();

function ave( a, b,  c){
    result = (a+b+c)/3;
    console.log(result);   
}
// ave(2,3,4);
let sum = function s(a,b){
    return a+b;
}
// console.log(sum(3,4));

function number(func, count){
    for ( i = 1; i <= count; i++){
        func();
    }
}
function help(){
    console.log("Help");
}

// console.log(number(help, 5));

function greatFactory(greetRequest){
    if (greetRequest == "Nepal"){
        let g = function(ca) {
            console.log(ca,  "Namaste");
            return "Namaste";
        }
    }
    else if(greetRequest == "Canada"){
        let c = function(ca){
            console.log(ca, "Hello!")
            return "Canada";
        }

    } else{
        console.log("Wrong")
    }

}
greetRequest = "Canada";
// console.log(c(90));
