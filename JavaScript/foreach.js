let a = [1,2,3,4,5,6];
let s = function(al){
    console.log(al)
}
a.forEach(s);
a.forEach(function(el){
    console.log("Hello");
})

let list = [{
    list1: 13,
    list2: 20
},
{
   list1: 13,
    list2: 20 
},
{
   list1: 13,
    list2: 20  
}]
list.forEach(function(el){
    console.log(el.list1);
})
list.forEach(el => {
    console.log(el.list2)
})