const startBtn = document.querySelector(".start-btn button");
const choices = document.querySelector(".choises");
const chooseOne = document.querySelector(".choose-one");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const againBtn = document.querySelector(".again-btn");
const startBtnContainer = document.querySelector(".start-btn");

let userChoice = "";

function handleChoice(choice) {
    userChoice = choice;
    const arrChoices = ["rock", "paper", "scissors"];
    const computerChoice = arrChoices[Math.floor(Math.random() * arrChoices.length)];

    if (userChoice === computerChoice) {
        result.innerHTML = `oyun berabere bitdi, ikimiz de ${userChoice} secdik`;
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result.innerHTML = `sen ${userChoice} secmisdin, men ise ${computerChoice} secmisdim, sen qazandin:(`;
    } else {
        result.innerHTML = `sen ${userChoice} secmisdin, men ise ${computerChoice} secmisdim, men qazandim:)`;
    }

    againBtn.style.display = "block"; // Show the again button after result
}

startBtn.addEventListener("click", showChoices);

function showChoices() {
    choices.style.display = "flex";
    chooseOne.style.display = "block";
    startBtnContainer.style.display = "none"; // hide start button

    rock.addEventListener("click", () => handleChoice("rock"));
    paper.addEventListener("click", () => handleChoice("paper"));
    scissors.addEventListener("click", () => handleChoice("scissors"));
}

againBtn.addEventListener("click", () => {
    // Reset game
    result.innerHTML = "";
    againBtn.style.display = "none";
    choices.style.display = "none";
    chooseOne.style.display = "none";
    startBtnContainer.style.display = "flex";
});


