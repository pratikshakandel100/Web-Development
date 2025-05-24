function save(data){
    return new Promise ((resolve, reject) => {
    let n = Math.floor(Math.random() * 10) + 1;
    console.log(n)
    if (n < 6){
        resolve("data is saved");
    } else{
        reject("data isn't saved");
    }
})
}
let r = save("Hello")
console.log(r)
r.then(()=>{
    console.log("approved")
    return save("Hello")


})
.catch(()=>{
    console.log("decline")
})