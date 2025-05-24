let b = document.querySelectorAll("button")
for (b of b){
    b.onclick = c;
    b.onmouseenter = mouse;
}
// console.dir(b);
function c(){
    console.log("Button was clicked")
}
function mouse(){
    console.log("You enter the button");
}