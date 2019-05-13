function changeTheme() {
    let body = document.getElementsByTagName('body')[0];
    let theme = document.getElementsByName('theme');

    if (theme[1].checked) {
        body.className = "justblack";
    } else {
        body.className = "plainbright";
    }
}

function changeFontFamily() {
    let selection = document.getElementById('font-family');

    if (selection.value == "josefin") {
        document.querySelectorAll('.heading').forEach(function (item) {
            item.className = "heading josefin";
        });
        document.querySelectorAll('.title').forEach(function (item) {
            item.className = "title josefin";
        });
        document.querySelectorAll('li').forEach(function (item) {
            item.className = "josefin";
        });
    } else if (selection.value == "cinzel") {
        document.querySelectorAll('.heading').forEach(function (item) {
            item.className = "heading cinzel";
        });
        document.querySelectorAll('.title').forEach(function (item) {
            item.className = "title cinzel";
        });
        document.querySelectorAll('li').forEach(function (item) {
            item.className = "cinzel";
        });
    } else {
        document.querySelectorAll('.heading').forEach(function (item) {
            item.className = "heading codystar";
        });
        document.querySelectorAll('.title').forEach(function (item) {
            item.className = "title codystar";
        });
        document.querySelectorAll('li').forEach(function (item) {
            item.className = "codystar";
        });
    }
}

function changeFontWeight() {
    let selection = document.getElementById('font-weight');
    let body = document.getElementsByTagName('body')[0];

    body.style.fontWeight = selection.value;
}

function changeFontStyle() {
    let deg = document.getElementById('font-style').value;
    let target = document.getElementById('font-style-target');
    let label = document.querySelector('label[for="font-style"]');
    label.textContent = `Oblique ${deg}deg`;
    target.style.fontStyle = `oblique ${deg}deg`;
}

let fontSize = 1;

function increaseFontSize() {
    let html = document.getElementsByTagName('html')[0];
    fontSize += 0.1;
    html.style.fontSize = `${fontSize}em`;
}

function decreaseFontSize() {
    let html = document.getElementsByTagName('html')[0];
    fontSize -= 0.1;
    html.style.fontSize = `${fontSize}em`;
}