function process() {
    if (validateForm()) {
        let string = document.form.textblock.value;
        let char = document.form.searchchar.value;
        let occurNum = 0;
        for (i = 0; i < string.length; i++) {
            if (string.charAt(i) == char) {
                occurNum++;
            }
        }

        if (occurNum === 0) {
            var newWindow = window.open("", "Nothing Found!", "top=1,left=1,width=300,height=100");
            newWindow.document.write(
                "<html>" +
                "<head>" +
                "</head>" +
                "<body>" +
                "<h3>" +
                "Search character not found in text string!" +
                "</h3>" +
                "<h4>" +
                "Searching character: \"" + char + "\"" +
                "</h4>" +
                "</body>" +
                "</html>"
            );
            document.form.searchchar.value = "";
            newWindow.focus();
        } else {
            document.form.result.value = occurNum;
        }
    }
}

function validateForm() {
    if (document.form.searchchar.value == "" || document.form.textblock.value == "") {
        alert("Please fill in both input boxes.");
        return false;
    } else {
        if (/^.{1}$/.test(document.form.searchchar.value)) {
            return true;
        } else {
            alert("Please enter exactly one character to search");
            document.getElementById("searchchar").focus();
            return false;
        }
    }
}