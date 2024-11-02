let userScore = 0;
let compScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawScorePara = document.querySelector("#draw-score");


const genCompChoice =()=>{
  let options = ["rock","paper","scissors"]
  let randIdx = Math.floor(Math.random() * 3)
  return options[randIdx]
}

const drawGame = ()=>{
  drawScore++
  drawScorePara.innerHTML = drawScore
  msg.innerHTML="Game was Draw. Play again";
  msg.style.backgroundColor ="#081b31";
}

let showWinner =(userWin,userChoice,compChoice)=>{
  if (userWin) {
    userScore++
    userScorePara.innerHTML = userScore;
    msg.style.backgroundColor="green";
    msg.innerHTML=`your win!. your ${userChoice} beats ${compChoice}`;
  }
  else{
    compScore++
    compScorePara.innerHTML = compScore;
    msg.style.backgroundColor= "red";
    msg.innerHTML=`your lose.  ${compChoice} beats your ${userChoice}`
  }
}

const playGame =(userChoice)=>{
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
      drawGame();
    }else{
      let userWin = true;
      if (userChoice === "paper") {
         userWin = compChoice === "scissors" ? false : true
      } else if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true
      }else{
        userWin = compChoice === "rock" ? false : true
      }
      showWinner(userWin,userChoice,compChoice)
    }
    
}

choices.forEach((choice)=>{
  choice.addEventListener('click',()=>{
    let userChoice = choice.getAttribute('id')
    playGame(userChoice)
  })
})