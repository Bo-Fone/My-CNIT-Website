function validateForm() {
    if (document.form.name.value == "") {
        alert("Please fill in your name.");
        document.getElementById("name").focus();
        return false;
    } else if (document.form.gender[0].checked == false && document.form.gender[1].checked == false) {
        alert("Please choose your gender.");
        document.getElementById("gender").focus();
        return false;
    } else if (document.form.size.checked == false) {
        alert("Please choose your size.");
        document.getElementById("size").focus();
        return false;
    } else if (document.form.type.selectedIndex == 0) {
        alert("Please choose a type.");
        document.getElementById("type").focus();
        return false;
    } else {
        alert("Your form as been submitted.");
        return true;
    }
}