//The user should be able to tell how many dice they want to roll
const rollButton = document.querySelector("#rollButton")
const showAllRolls = document.querySelector("#showAllRolls")
let totalRolls = document.querySelector("#totalRolls")
const rollsList = document.querySelector("#rollsList")
const numberOfDice = document.querySelector("#numberOfDice")

let dieRolls = []

rollButton.addEventListener("click", function () {
    let diceCount = Number(numberOfDice.value);
    let counter = 1;
    let sum = 0;
    while (counter <= diceCount) {
        //Roll Dice
        let numberRolled = Math.floor(Math.random() * 6) + 1;
        dieRolls.push(numberRolled);
        sum = sum + numberRolled;
        counter++;
    }

    totalRolls.innerHTML = sum;
    console.log(dieRolls);
    console.log(sum);
}) 

//Add another Event Listener for showallrolls button

showAllRolls.addEventListener("click", function() {
    let counter = 0;
    while (counter < dieRolls.length) {
        rollsList.innerHTML += "<li>" + dieRolls[counter] + "</li>";
        counter++;
    }
})

























