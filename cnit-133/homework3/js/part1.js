function calculate() {
    let hwAvg = document.getElementById("hwAvg").value;
    let midExam = document.getElementById("midExam").value;
    let fiExam = document.getElementById("fiExam").value;
    let acr = document.getElementById("acr").value;
    let hwAvgN = parseInt(hwAvg, 10),
        midExamN = parseInt(midExam, 10),
        fiExamN = parseInt(fiExam, 10),
        acrN = parseInt(acr, 10);
    if (validate(hwAvgN, midExamN, fiExamN, acrN)) {
        display(hwAvgN, midExamN, fiExamN, acrN);
    }
}

function validate(hwAvgN, midExamN, fiExamN, acrN) {
    if (isNaN(hwAvgN) || hwAvgN < 0 || hwAvgN > 100) {
        alert("Please enter a homework average between 0 - 100.");
        document.getElementById("hwAvg").focus();
        return false;
    } else if (isNaN(midExamN) || midExamN < 0 || midExamN > 100) {
        alert("Please enter a midterm exam grade between 0 - 100.")
        document.getElementById("midExam").focus();
        return false;
    } else if (isNaN(fiExamN) || fiExamN < 0 || fiExamN > 100) {
        alert("Please enter a final exam grade between 0 - 100.");
        document.getElementById("fiExam").focus();
        return false;
    } else if (isNaN(acrN) || acrN < 0 || acrN > 100) {
        alert("Please enter an ACR grade between 0 - 100.");
        document.getElementById("acr").focus();
        return false;
    } else {
        return true;
    }
}

function display(hwAvgN, midExamN, fiExamN, acrN) {
    let fiGrade = Math.round(0.5 * hwAvgN + 0.2 * midExamN + 0.2 * fiExamN + 0.1 * acrN);
    let letterG;
    if (fiGrade <= 59) {
        letterG = "F";
        document.getElementById("warning").innerHTML = "Student must retake this course.";
    } else if (fiGrade <= 69) {
        letterG = "D";
        document.getElementById("warning").innerHTML = "Student must retake this course.";
    } else if (fiGrade <= 79) {
        letterG = "C";
    } else if (fiGrade <= 89) {
        letterG = "B";
    } else {
        letterG = "A";
    }
    document.getElementById("fiAvg").value = fiGrade;
    document.getElementById("letterG").value = letterG;
}