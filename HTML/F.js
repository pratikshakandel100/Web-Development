// console.log(document.getElementById("dayInput"))
function checkDay(){
    debugger;
    
    const day = document.getElementById("dayInput").value.trim().tolowercase();
    console.log(day);
    const output = document.getElementById("output");

    switch(day){
        case "monday":
            output.textContent = "Start of the Week";
            break;
        case "friday":
            output.textContent = "Almost Weekend!";
            break;
        case "saturday":
            output.textContent = "Holiday";
            break;
        case "sundat":
            output.textContent = "Weekend";
            break;
        case "tuesday":
            output.textContent = "Happy Day";
            break;
        case "wednesday":
            output.textContent = "Boring Day";
            break;
        default:
            output.textContent = "Invalid Day";
    }

}
checkDay()

console.log("Happy code")