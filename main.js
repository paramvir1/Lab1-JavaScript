
const rock = document.querySelector('#rock'); // rock button
const paper = document.querySelector('#paper'); // paper button
const scissors = document.querySelector('#scissors'); // scissors button 


// function for selecting options(buttons): Rock, Paper, Scissor.
function userSelectons(){

    rock.addEventListener('click', function(){
        play("rock");
        console.log(" You selected the Rock! ");
    })
    
    paper.addEventListener('click', function(){
        play("paper");
        console.log(" You selected the Paper! ");    
    })

    scissors.addEventListener('click', function(){
        play("scissors");
        console.log(" You selected the Scissor! ");
    })

}
userSelectons();


function getCompChoice(){
 
    const choice =["rock", "paper", "scissors"];
    const turns = Math.floor(Math.random()*3);
    return choice[turns];

}

//When the userSelection gets played, function gets called.
function play(userChoice){

    const computerChoice = getCompChoice();
    message1.textContent =`Computer choose ${computerChoice} `; 
    
    if(userChoice === computerChoice){
        message1.textContent = `Its a draw, play again!`;
        message.textContent = ` `;
        }
          
    else if(userChoice ==="rock" && computerChoice === "scissors" 
    || userChoice ==="scissors" && computerChoice === "paper" 
    ||userChoice ==="paper" && computerChoice === "rock")
    {
        message.textContent =`Player wins`;
        
    }
    else if(userChoice ==="scissors" && computerChoice === "rock" 
    || userChoice ==="paper" && computerChoice === "scissors" 
    ||userChoice ==="rock" && computerChoice === "paper")
    {
        message.textContent =`Computer wins`;
        
    }

}