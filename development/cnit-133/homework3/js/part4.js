function multGen() {
    return Math.floor(Math.random() * 10);
}

function printMult() {
    document.getElementById("mult1").value = multGen();
    document.getElementById("mult2").value = multGen();
}

function checkAnswer() {
    document.getElementById("next").style.display = "none";
    let answer = parseInt(document.getElementById("answer").value);
    let mult1 = parseInt(document.getElementById("mult1").value);
    let mult2 = parseInt(document.getElementById("mult2").value);
    document.getElementById("answer").value = "";
    if (answer !== mult1 * mult2) {
        document.getElementById("prompt").innerHTML = "No. Please try again.";
    } else {
        document.getElementById("next").style.display = "block";
        document.getElementById("prompt").innerHTML = "Very good! Click next for a new question."
    }
}