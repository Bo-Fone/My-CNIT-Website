var data = [
    [
        "AL",
        "Alabama",
        "Montgomery",
        4779736
    ],
    [
        "AK",
        "Alaska",
        "Juneau",
        710231
    ],
    [
        "AZ",
        "Arizona",
        "Phoenix",
        6392017
    ],
    [
        "AR",
        "Arkansas",
        "Little Rock",
        2915918
    ],
    [
        "CA",
        "California",
        "Sacremento",
        37253956
    ],
    [
        "CO",
        "Colorado",
        "Denver",
        5029196
    ]
];

var row;

function showStateInfo() {
    var input = document.form.name.value;
    if (validateForm(input)) {
        let output = "Thanks for your inquiry, here is the information you requested: <br> State abbr = " + data[row][0] + "<br>State Name = " + data[row][1] + "<br>Capital = " + data[row][2] + "<br>Population = " + data[row][3].toLocaleString();
        document.getElementById("output").innerHTML = output;
    }
}

function validateForm(input) {
    if (input.length == 0) {
        alert("Please enter a state name or its abbreviation.");
        document.getElementById("name").focus();
        return false;
    }
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < 2; j++) {
            if (input.localeCompare(data[i][j], 'en', {
                    sensitivity: 'base'
                }) == 0) {
                row = i;
                return true;
            }
        }
    }
    document.getElementById("output").innerHTML = "We can not find the state you are looking for. Please check your input again.";
    return false;
}