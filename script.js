const hint = document.getElementById("hint");
const number = document.getElementById("num");
const btn = document.getElementById("button");
const count_guess = document.getElementById("count");

let random_num = Math.floor(Math.random() * 100) + 1 ;
let count_chance = 0 ;
let again = false;

btn.addEventListener("click" , compare);

 function compare(){
     let user_number = parseInt(number.value);

    if(isNaN(user_number)|| user_number <0 || user_number > 100){
        hint.innerText = "please enter a number between 0 and 100!";
        hint.classList.add("text-red-500");
        return;
    }
    else {
        hint.classList.remove("text-red-500");
    }

    if(again){
        again = false;
        count_chance = 0;
        btn.innerText = "check";
        random_num = Math.floor(Math.random()*100)+1;
        hint.innerText = "I'm waiting for you!";
        count_guess.innerText = count_chance;
        number.disabled =false;
        return;
    }

     user_number = parseInt(number.value);
    console.log(random_num);

    count_chance++;
    count_guess.innerText = count_chance;

    if(user_number > random_num){

        hint.innerText = "Enter a lower number!";
        hint.className ="my-4 text-red-500 ";
    }

    else if(user_number < random_num){

        hint.innerText = "Enter a higher number!";
        hint.className = "my-4 text-blue-900";
    }

    else if (user_number == random_num){

        hint.innerText = "Correct! you found the secret";
        hint.className ="my-4 text-green-700";
        again = true;
    }

    if(again){
        
        btn.innerText = "play again!";
        number.disabled = true;
    }

    number.value = "";
    number.focus();
 }


    
