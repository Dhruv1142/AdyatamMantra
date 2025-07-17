
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const showWinner = (userWin)=> {

    if (userWin) {
        userScore++
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText="You Win!";
        msg.style.backgroundColor = "green";
    }
    else{
           compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose!");
        msg.innerText="You Lose!";
                msg.style.backgroundColor = "red";

    }
}

const generateCompChoice = ()=>{
    const option = ["rock" , "paper" , "scissors"];
    const ranInd = Math.floor(Math.random()*3);

    return option[ranInd];
}


const drawGame = ()=>{

    
            msg.innerText="Game Draw";
                    msg.style.backgroundColor = "yellow";
                    msg.style.color = "black"

};

const playGame = (userChoice) => {

    

    const compChoice = generateCompChoice();
    

    if(userChoice === compChoice){
      // draw game 

      drawGame();
    } else {

        let userWin = true;
        if(userChoice === "rock"){
            // scissors,paper
            userWin = compChoice === "paper" ? false :true;

        }else if(userChoice === "paper"){
             // rock,scissors
            userWin = compChoice ==="scissors" ? false : true;
        }else{
             // rock,paper
            userWin = compChoice === "rock" ? false: true;
        }

        showWinner(userWin);
    }
        

}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",()=>{
        console.log("choice was clicked");

        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
    
});
