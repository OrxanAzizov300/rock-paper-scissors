const startBtn = document.querySelector(".start-btn button");
const choices = document.querySelector(".choises");
const chooseOne=document.querySelector(".choose-one")
const rock=document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")

let userChoice = ""; // This will hold the choice (rock, paper, or scissors)

function handleChoice(choice) {
    userChoice = choice;
    console.log("You chose:", userChoice);
    let arrChoices = ["rock", "paper", "scissors"]


    let computerChoice = arrChoices[Math.floor(Math.random() * arrChoices.length)]
    console.log("computer choice=", computerChoice);

    if (userChoice==computerChoice) {
        alert(`oyun berabere bitdi, ikimiz de ${userChoice} secdik`)
        
    }
    else if(userChoice=="rock" && computerChoice=="scissors"){
        alert(`sen ${userChoice} secmisdin, men ise ${computerChoice} secmisdim, sen qazandin:(`)

    }
    else if(userChoice=="rock" && computerChoice=="paper"){
        alert(`sen ${userChoice} secmisdin, men ise ${computerChoice} secmisdim, men qazandim:)`)
    }
    else if(userChoice=="paper" && computerChoice=="rock"){
        alert(`sen ${userChoice} secmisdin, men ise ${computerChoice} secmisdim, sen qazandin:(`)
    }
    else if (userChoice == "paper" && computerChoice == "scissors") {
        alert(`sen ${userChoice} secmisdin, men ise ${computerChoice} secmisdim, men qazandim:)`)
    }
    else if (userChoice == "scissors" && computerChoice == "rock") {
        alert(`sen ${userChoice} secmisdin, men ise ${computerChoice} secmisdim, men qazandim:)`)
    }
    else if (userChoice == "scissors" && computerChoice == "paper") {
        alert(`sen ${userChoice} secmisdin, men ise ${computerChoice} secmisdim, sen qazandin:(`)
    }
}





startBtn.addEventListener("click", showChoices);

function showChoices() {
    choices.style.display = "flex"; // show the rock-paper-scissors buttons
    chooseOne.style.display="block"; 
    
    rock.addEventListener("click", () => handleChoice("rock"));
    paper.addEventListener("click", () => handleChoice("paper"));
    scissors.addEventListener("click", () => handleChoice("scissors"));

    
    
    
}

