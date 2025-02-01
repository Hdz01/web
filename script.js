let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionDiv = document.getElementById("question");
let loveMessageDiv = document.getElementById("loveMessage");
let yesSize = 18;

function growYes() {
    yesSize += 10;
    yesButton.style.fontSize = yesSize + "px";
    yesButton.style.padding = (yesSize / 3) + "px " + (yesSize / 2) + "px";
}

function showLove() {
    questionDiv.classList.add("hidden");
    loveMessageDiv.classList.remove("hidden");
}
