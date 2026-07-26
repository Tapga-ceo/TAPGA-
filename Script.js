let coins = Number(localStorage.getItem("coins")) || 0;
let energy = Number(localStorage.getItem("energy")) || 500;
const maxEnergy = 500;

const coinText = document.getElementById("coins");
const energyText = document.getElementById("energyText");
const energyFill = document.getElementById("energyFill");
const tapButton = document.getElementById("tapButton");

coinText.innerText = coins;
energyText.innerText = energy + " / " + maxEnergy;
energyFill.style.width = (energy / maxEnergy * 100) + "%";

tapButton.addEventListener("click", function () {

    if (energy <= 0) {
        alert("Energy is empty. Please wait.");
        return;
    }

    coins++;
    energy--;

    coinText.innerText = coins;
    energyText.innerText = energy + " / " + maxEnergy;
    energyFill.style.width = (energy / maxEnergy * 100) + "%";

    localStorage.setItem("coins", coins);
    localStorage.setItem("energy", energy);
});

setInterval(function () {

    if (energy < maxEnergy) {

        energy++;

        energyText.innerText = energy + " / " + maxEnergy;
        energyFill.style.width = (energy / maxEnergy * 100) + "%";

        localStorage.setItem("energy", energy);

    }

}, 3000)
document.getElementById("dailyReward").addEventListener("click", function(){

    coins += 100;

    coinText.innerText = coins;

    localStorage.setItem("coins", coins);

    alert("You received 100 TAP Coins!");

});