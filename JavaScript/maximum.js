let nums = [1,2,3,4,10, 0,6,7];
let result = nums.reduce((max, el) => {
    if(el>max){
        return el;
    } else{
        return max;
    }

})
let num = [10,25,30,40,5,50];
console.log(result);

console.log(num.every(el => {return el%10 == 0;}));



function m(num){
let final = num.reduce((minimum, el) => {
    if (minimum < el){
        return minimum;
    }
    else{
        return el;
    }
})
return final;

}
console.log(m(num))


let name = "Anushka";
console.log(..."Anushka");
let literal = {
    name: "Life",
    hope: "Glad"

}
let literalCopy = {...literal, wish:"Good"}
console.log(literalCopy)
let l = {...num}
console.log(l)

function sum(...args){
    console.log(arguments)
}
sum(1,2,3,4,5)

let names = ["Anushka", "Unisha", "Sristika", "Akriti", "Neehangma"]
let [Winner, Runnerup, ...o] = names;

console.log(Winner, Runnerup, ...o);