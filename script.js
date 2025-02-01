let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionDiv = document.getElementById("question");
let loveMessageDiv = document.getElementById("loveMessage");
let flowersContainer = document.getElementById("flowers");
let yesSize = 18;

function growYes() {
    yesSize += 10;
    yesButton.style.fontSize = yesSize + "px";
    yesButton.style.padding = (yesSize / 3) + "px " + (yesSize / 2) + "px";
}

function showLove() {
    questionDiv.classList.add("hidden");
    loveMessageDiv.classList.remove("hidden");
    startFlowers();
}

function startFlowers() {
    for (let i = 0; i < 20; i++) {
        createFlower();
    }
}

function createFlower() {
    let flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = (Math.random() * 2 + 3) + "s"; // Diferente velocidad de caída
    flowersContainer.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 20000); // Remueve la flor después de la animación
}
