let UserChoise=0;
let comScore=0;

const choises=document.querySelectorAll('.choise');
// const choise=document.querySelector('.choise');
const winner=document.querySelector('#winner');
const Userscore=document.querySelector('.Userscore');
const computerscore=document.querySelector('.computerscore');
const reset=document.querySelector('.reset');

function showValue(){
    let content=["rock","paper","scissors"];

    let index=Math.floor(Math.random()*3)
    console.log(index)
    return content[index]
}

let UserScore=0;
let ComputerScore=0;

let index=0;
let computerScore=0;






function showWinner(UserWin){
    if(UserWin){
        console.log("the user is win", UserWin)
        winner.innerText="The user is win";
        winner.style.backgroundColor="green"
       Userscore.innerText=++index;
       computerscore.innerText=--computerScore;
    }
    else{
        console.log("the user was lost")
        winner.innerText="The user was lost";
        winner.style.backgroundColor="red";
         Userscore.innerText=--index;
        computerscore.innerText=++computerScore;
    }
}

function draGame(){

   console.log("game was draw")
  winner.innerText=" The game was draw"

winner.style.backgroundColor="cadetblue";
}




function showContent(UserChoise){
console.log("the user choise is=",UserChoise)
let ComChoise=showValue();

if(UserChoise===ComChoise){
 draGame();

}
else{
    let UserWin=true;
    if(UserChoise=="rock"){
        // paper scissor
        UserWin=ComChoise==='paper'?false:true

    }
    else if(UserChoise==='paper'){
        UserWin=ComChoise==='scissors'?false:true
    }
    else{
        UserWin=ComChoise==='rock'?false:true
    }
    showWinner(UserWin);
}


console.log("the computer value is ",ComChoise);
}


choises.forEach((choise)=>{
    choise.addEventListener('click',()=>{
        const UserChoise=choise.getAttribute("id");
        console.log("item was cliked",UserChoise)
        showContent(UserChoise);

    })
})



reset.addEventListener('click',()=>{
    Userscore.innerText=0;
    computerscore.innerText=0
    winner.innerText="Lets Play Again"
    winner.style.backgroundColor="cadetblue"

    console.log("hii")
});