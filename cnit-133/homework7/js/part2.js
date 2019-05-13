let dropDownMenu = document.getElementsByClassName('dropdown');

function dropDown(index, event) {
    let x = event.clientX;
    let y = event.clientY;
    clearDropDown();

    switch (index) {
        case 1:
            dropDownMenu[0].style.display = "block";
            dropDownMenu[0].style.top = `${y}px`;
            dropDownMenu[0].style.left = `${x}px`;
            break;
        case 2:
            dropDownMenu[1].style.display = "block";
            dropDownMenu[1].style.top = `${y}px`;
            dropDownMenu[1].style.left = `${x}px`;
            break;
        case 3:
            dropDownMenu[2].style.display = "block";
            dropDownMenu[2].style.top = `${y}px`;
            dropDownMenu[2].style.left = `${x}px`;
            break;
        case 4:
            dropDownMenu[3].style.display = "block";
            dropDownMenu[3].style.top = `${y}px`;
            dropDownMenu[3].style.left = `${x}px`;
            break;
        case 5:
            dropDownMenu[4].style.display = "block";
            dropDownMenu[4].style.top = `${y}px`;
            dropDownMenu[4].style.left = `${x}px`;
            break;
        case 6:
            dropDownMenu[5].style.display = "block";
            dropDownMenu[5].style.top = `${y}px`;
            dropDownMenu[5].style.left = `${x}px`;
            break;
        case 7:
            dropDownMenu[6].style.display = "block";
            dropDownMenu[6].style.top = `${y}px`;
            dropDownMenu[6].style.left = `${x}px`;
            break;
    }
}

function clearDropDown() {
    for (i = 0; i < dropDownMenu.length; i++) {
        dropDownMenu[i].style.display = "none";
    }
}

window.onclick = function (event) {
    if (!event.target.matches('.dropdown')) {
        for (i = 0; i < dropDownMenu.length; i++) {
            dropDownMenu[i].style.display = "none";
        }
    }
}