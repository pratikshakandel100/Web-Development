let q = document.querySelector("h1");
function C(co, delay, nextcolorchange){
    setTimeout(()=>{
        q.style.color = co;
        if (nextcolorchange) nextcolorchange();
    }, delay);
}

C("pink", 1000, ()=> {
    C("green", 2000, ()=>{
        C("blue", 2000);
    })
});

// setTimeout(()=> {
//   q.style.color = "red";   
// }, 1000);
// setTimeout(()=> {
//   q.style.color = "brown";   
// }, 2000);
// setTimeout(()=> {
//   q.style.color = "pink";   
// }, 3000);