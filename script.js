let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIdx= Math.floor(Math.random() * 3); //Generate random number between 0 and 2
    return options[randomIdx];
}

const drawGame= ()=>{
    console.log("It's a Draw");
    msg.innerText="It's a Draw! Play Again";
}
const showWinner= (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log ("You Win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else { 
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You lost!");
        msg.innerText=`You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }

}

const playGame=(userChoice)=>{
    console.log("user choice = ",userChoice);
    //Generate computer choice
    const compChoice= genCompChoice();
    console.log("Comp choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice ==="paper"? false : true;
        }
        if(userChoice==="paper"){
            userWin = compChoice ==="rock"? true : false;
        }
        else{
            userWin = compChoice ==="paper"? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });