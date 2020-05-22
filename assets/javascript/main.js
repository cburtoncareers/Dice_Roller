//The user should be able to tell how many dice they want to roll
const rollButton = document.querySelector("#rollButton")
const showAllRolls = document.querySelector("#showAllRolls")
let totalRolls = document.querySelector("#totalRolls")
const rollsList = document.querySelector("#rollsList")
const numberOfDice = document.querySelector("#numberOfDice")
const resetButton = document.querySelector("#resetButton")


let dieRolls = []

rollButton.addEventListener("click", function () {
    let diceCount = Number(numberOfDice.value);
    let counter = 1;
    let sum = 0;
    while (counter <= diceCount) {
        //Roll Dice
        let numberDiceRolled = Math.floor(Math.random() * 6) + 1;
        dieRolls.push(numberDiceRolled);
        sum = sum + numberDiceRolled;
        counter++;
    }

    totalRolls.innerHTML = sum;
    console.log(dieRolls);
    console.log(sum);
}) 

//Add another Event Listener for showallrolls button

showAllRolls.addEventListener("click", function() {
    let counter = 0;
    while (counter < dieRolls.length){
        rollsList.innerHTML += '<li>' + dieRolls[counter] + '</li>';
        counter++;
    }
    
})

resetButton.addEventListener("click", function() {
    dieRolls = [];
    numberOfDice.innerHTML = '';
    rollsList.innerHTML = '';
    totalRolls.innerHTML = '';
})
