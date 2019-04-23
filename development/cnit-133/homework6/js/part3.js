$('#phonenum').mask('(000) 000-0000', {
    'translation': {
        0: {
            pattern: /[0-9]/
        }
    }
});

function printDate() {
    let date = new Date();

    document.form.tostr.value = date.toString();
    document.form.tolocale.value = date.toLocaleString();
    document.form.toutc.value = date.toUTCString();
    document.form.pstutc.value = date.getTimezoneOffset() / 60;
    document.form.estutc.value = date.getTimezoneOffset() / 60 - 3;
}

function parsePhone() {
    let str = document.phone.phonenum.value;
    if (str == "") {
        alert("Please fill in your phone number.");
        document.getElementById("phonenum").focus();
    } else {
        let splitArr = str.split(/^\((\d{3})\)\s(\d{3})\-(\d{4})$/);
        document.phone.area.value = splitArr[1];
        document.phone.num.value = splitArr[2] + splitArr[3];
    }
}