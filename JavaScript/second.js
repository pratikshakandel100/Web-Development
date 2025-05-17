// function arithmeticOperators(a,b,c){
//    console.log(a+b+c);
//    console.log(a+b-c);
//    console.log(a*b);
//    console.log(a/b);
//    console.log(a**2);
//    console.log(a%b);
//    a++;
//    a += 2;
//    console.log(b /= 2);
//    console.log(a);
//    console.log(a %=  4);
//    console.log( c *= 3);
//    let r = "4";
//    let t = 4;
//    console.log(r === t);
//    console.log(r == t);
//    console.log(r != t);
//    console.log(r !== t);
//    console.log(a > b);
//    console.log(a <b);
//    console.log(a > b && a<b);
//    q = 10;
//    w = 12;
//    e = 10;
//    console.log(q<w || e ==w);

// }
// // arithmeticOperators(10,20,30);
// console.log("Another fun")

// function logicalOperator(isTrue, isFalse, age,){

//     let result = (age>=18)? "Adult":"Minor";
//     console.log(result);
//     console.log(typeof age);
//     console.log(typeof isFalse);

//     if (isTrue || isFalse){
//         console.log("Or Operator");
//     }
//     else if (isTrue && isFalse){
//         console.log("And operaotor")
//     }
//     else if (!isFalse){
//         console.log("! operator")
//     }

 
// }
// logicalOperator(true,false,18);
// function Markss(marks){
//     if (marks > 90){
//         console.log("A+");
//     }
//     else if(marks >= 80 && marks <= 90){
//         console.log("A");
//     }
//     else if(marks >= 70 && marks <= 80){
//         console.log("B+");
//     }
//     else if (marks >= 60 && marks < 70){
//         console.log("B");
//     }
//     else if (marks < 60){
//         console.log("C+");
        
//     }
//     else if(marks < 50){
//         console.log("C");
//     }
//     else if (marks < 40){
//         console.log("Fail")
//     }
// }
// Marks(85);






function Marksss(Eng, Math, Nepali, Sci, Computer){
    let totalSubMarks = 500;
    let totalMarks = Eng + Math + Nepali + Sci + Computer;
    let percentage =( (totalMarks / totalSubMarks)  * 100);
    console.log(percentage);
    if (percentage > 90 && percentage <= 100){
        console.log("Your percentage is ", percentage, "and Grade is A+");
    }
    else if(percentage >= 80 && percentage <= 90){
        console.log("Your percentage is ", percentage, "and Grade is A");
    }
    else if(percentage >= 70 && percentage < 80){
        console.log("Your percentage is ", percentage, "and Grade is B+");
    }
    else if (percentage >= 60 && percentage < 70){
        console.log("Your percentage is ", percentage, "and Grade is B");
    }
    else if (percentage < 60){
        console.log("Your percentage is ", percentage, "and Grade is C+");    
    }
    else if(percentage < 50){
        console.log("Your percentage is ", percentage, "and Grade is C");
    }
    else if (percentage < 40){
        console.log("Fail")
    }
    else if (percentage > 100){
        console.log("Your marks is invalid.")
    }
}
Marksss(50,50,50,50,50);
// 2 user
//