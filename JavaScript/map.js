let array = [1,2,3,4,5,6,56,23,4,52,34,57,45];
array.map(function sum(el){
    console.log(el);
})

let neww = array.map(el => {
    return el + 10;
})
console.log(neww);
let oddd = array.filter((num) => {
    return (num % 2) != 0;
})
console.log(oddd);
let n = [2,4,6,8].every(el => {return el % 2 == 0})

console.log(array.reduce((aa,bb) =>  (aa+bb)))
    