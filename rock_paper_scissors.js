user_choice = prompt("choose [r,p,s]:");
const index = Math.floor((Math.random()*3));
const choices = ["r","p","s"];
const ai = choices[index];
let user_won = false;
let message = String();

if (user_choice == ai){
    message = "draw!";
}
else{
    // r > s
    if (user_choice == "r" && ai == "s") {
        user_won = true;
    }
    // p > r
    else if (user_choice == "p" && ai == "r"){
        user_won = true;
    }
    // s > p
    else if (user_choice == "s" && ai == "p"){
        user_won = true;
    }
    user_won ? message = "user won!": message = "ai won!";
}
console.log(`ai = ${ai} \n user = ${user_choice}`);
alert(message);



