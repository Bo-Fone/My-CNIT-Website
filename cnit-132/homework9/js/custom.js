/**
 * jQuery Section
 */
$(function () {
    $("#window").dialog({
        autoOpen: true,
        minWidth: 400,
        show: {
            effect: "blind",
            duration: 5000
        },
        hide: {
            effect: "clip",
            duration: 1000
        }
    })
});



/**
 * Regular JavaScript Section
 */

// Toggle the menu
function toggleMenu(id) {
    let barItem = document.getElementsByClassName("menu-bar-item");
    let menu = document.getElementsByClassName("menu");
    for (let i = 0; i < barItem.length; i++) {
        if (i !== id) {
            barItem[i].classList.remove("bar-item-visible");
        }
    }
    barItem[id].classList.toggle("bar-item-visible");
    for (let i = 0; i < menu.length; i++) {
        if (i !== id) {
            menu[i].classList.remove("menu-visible");
        }
    }
    menu[id].classList.toggle("menu-visible");
}

// Close the menu and deselect shortcut if user clicks elsewhere
window.onclick = function (event) {
    if (!(event.target.matches('.menu-bar-item') || event.target.matches('.menu-bar-item h6') || event.target.matches('.menu ul li'))) {
        let barItem = document.getElementsByClassName("menu-bar-item");
        let menu = document.getElementsByClassName("menu");
        for (let i = 0; i < barItem.length; i++) {
            barItem[i].classList.remove("bar-item-visible");
        }
        for (let i = 0; i < menu.length; i++) {
            menu[i].classList.remove("menu-visible");
        }
    }
    if (!(event.target.matches('.shortcut') || event.target.matches('.shortcut img') || event.target.matches('.shortcut p') || event.target.matches('.menu-bar-item') || event.target.matches('.menu-bar-item h6') || event.target.matches('.menu ul li'))) {
        let shortcut = document.getElementsByClassName("shortcut");
        for (let i = 0; i < shortcut.length; i++) {
            shortcut[i].classList.remove("shortcut-selected");
        }
    }
}

// Click to select desktop shortcut
function selectShortcut(id) {
    let shortcut = document.getElementsByClassName("shortcut");
    for (let i = 0; i < shortcut.length; i++) {
        if (i !== id) {
            shortcut[i].classList.remove("shortcut-selected");
        }
    }
    shortcut[id].classList.add("shortcut-selected");
}

// Disable default context menu
window.oncontextmenu = function (event) {
    event.preventDefault();
}