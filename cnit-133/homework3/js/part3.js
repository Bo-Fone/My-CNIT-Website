function celsius(fah) {
    return Math.round(5 / 9 * (fah - 32));
}

function fahrenheit(cel) {
    return Math.round(9 / 5 * cel + 32);
}

function converter(unit) {
    if (unit === "cel") {
        document.getElementById("cel").value = celsius(document.getElementById("fah").value);
    } else {
        document.getElementById("fah").value = fahrenheit(document.getElementById("cel").value);
    }
}