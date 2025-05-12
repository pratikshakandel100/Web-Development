// let favoriteMovie = "Avatar";
// let guess = prompt("Guess your Favorite Movie...");
// while((guess != favoriteMovie) && (guess != 'quilt')){
//     console.log("wrong");
//     guess = prompt("Guess correct one");
// }
// if(guess == favoriteMovie){
//     console.log("Congrats");
// }

let fruits = ["Mango", "Orange", "Banana", "Litchi", "Orange", "Papaya"];
fruits.push("Papaya");
for(let i = fruits.length - 1; i < fruits.length; i = i --){
    console.log(i, fruits[i])
}
let F =