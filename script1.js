let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorePara= document.querySelector("#user-Score");
const compScorePara= document.querySelector("#comp-Score");

const genCompChoice= ((userChoice)=>{
    const options=["rock", "paper", "scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options [randIdx];
});

const drawGame=(()=>{
    console.log("Game Draw, Play again");
    msg.innerText= "Draw, Play again";
    msg.style.backgroundColor="black";
});

const showWinner=( (userWin, userChoice, compChoice) =>{
    if (userWin){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText= `Your's ${userChoice} beat computer's ${compChoice} `;
        msg.style.backgroundColor="green";        
    }
    else{
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText= `Computer's ${compChoice} beat your's ${userChoice}`;
        msg.style.backgroundColor="red";
    }

//extra portion
if (userScore === 10){
    console.log("hi");
    msg.innerText= `Game is over, You beat Computer by getting ${userScore} points `;
    alert(`Game is over, You beat Computer by getting ${userScore} points `);
}

else if (compScore === 10){
    console.log("hi");
    msg.innerText= `Game is over, Computer beats You by getting ${compScore} points `;
    alert(`Game is over, Computer beats You by getting ${compScore} points `);
}
});


const playGame= ((userChoice) =>{
    console.log("Your choice=",userChoice);
    const compChoice= genCompChoice();
    console.log("Computer Choice=",compChoice);
    if (userChoice === compChoice){
        drawGame();
    }
    // else {
    //     let userWin = true;
    //     if (userChoice === "rock"){
    //         userWin = compChoice === "paper" ? false : true;
    //     }
    //     else if (userChoice === "paper"){
    //         userWin = compChoice === "scissors" ? false : true;
    //     } 
    //     else{
    //         userWin = compChoice === "rock" ? false : true;
    //     }
    //     showWinner(userWin);
    // }

    // different logic a kora code
    else {
        let userWin = true;
        if (userChoice === "scissors"){
            userWin = compChoice === "paper" ? true : false;
        }
        else if (userChoice === "rock"){
            userWin = compChoice === "scissors" ? true : false;
        } 
        else{
            userWin = compChoice === "rock" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }

});

choices.forEach((choice) =>{
    //console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        //console.log("choices was clicked", userChoice);
        playGame (userChoice);
    
    });

});
