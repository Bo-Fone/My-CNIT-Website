function process() {
    if (validated()) {
        let number = Number.parseFloat(document.form.number.value);

        document.form.nearint.value = Math.round(number);
        document.form.sqrtint.value = Math.round(Math.sqrt(number));
        document.form.neartenths.value = (Math.floor(number * 10 + 0.5) / 10).toFixed(1);
        document.form.nearhund.value = (Math.floor(number * 100 + 0.5) / 100).toFixed(2);
        document.form.nearthousand.value = (Math.floor(number * 1000 + 0.5) / 1000).toFixed(3);

        document.getElementById("number").readOnly = true;

    } else {
        alert("Please fill in the correct format.");
        document.getElementById("number").focus();
    }
}

function validated() {
    if (/^\d*\.\d{4,}$/.test(document.form.number.value)) {
        return true;
    } else {
        return false;
    }
}

function removeReadOnly() {
    document.getElementById("number").readOnly = false;
    document.getElementById("number").focus();
}