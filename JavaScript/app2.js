let Greeting = "Good Morning";
let neww= Greeting.slice(-2);
console.log(Greeting.length);

console.log(Greeting.indexOf("Morning"));
console.log(Greeting.indexOf("Nonn"));
console.log(Greeting.toUpperCase().trim());
console.log(Greeting.slice(5));
console.log(Greeting.slice(5, 9));
console.log(neww);

let str = "HappyCodding";
console.log(str.replace("Coding", "Life"));
console.log(str.replace("C", "H"));
console.log(str.replace("d", "i"));
console.log(str.repeat(4));

//Array
let Students = ["Unisha", "Sristika", "Anushka", "Sony"];
console.log(Students[1]);
let mixedArray = ["Unisha", 1, false, 90.20]
console.log(mixedArray[3]);
let empty = [];
console.log(empty);
console.log(Students[0][3])
Students[3] = "Samkshya";
console.log(Students);
Students[8] = "Sony";
console.log(Students);
console.log(Students.length);
Students.push("Pratiksha");
console.log(Students);
Students.push("Kamana");
console.log(Students.pop());
console.log(Students.shift())
Students.unshift("Kriti");
console.log(Students)
let month = ["January", "July", "March", "August"];
console.log(month);
month.sort();

month.shift();
month.shift();
month.unshift("june");
month.unshift("july");
console.log(month);
console.log(Students.indexOf("Pratiksha"));
console.log(Students.includes("Pratiksha"));
console.log(Students.indexOf("So"));
newString = Students.concat(month);
console.log(newString);
console.log(mixedArray);
reverseArray = mixedArray.reverse();
console.log(reverseArray);
console.log(mixedArray);
console.log(month.slice(1,4));
console.log(month.slice(2));
console.log(month);
console.log(month.slice(-2));

//splice concept
let number = [1,2,3,4,5,6,7];
console.log(number.splice(5));
console.log(number);
console.log(number.splice(0,2));
console.log(number);
console.log(number.splice(0,2,10,11));
console.log(number);
