/**
 * This JavaScript file controls index.html behavior.
 */

function openTab(evt, tabName) {
    let i;
    let tabs = document.getElementsByClassName("tabs");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    let buttons = document.getElementsByClassName("nav-button");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].style.background = "url(./pictures/button.png) no-repeat center";
        buttons[i].style.color = "white";
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.style.background = "url(./pictures/button_pressed.png) no-repeat center";
    evt.currentTarget.style.color = "#FFDE57";
}

function musicControl() {
    let music = document.getElementById("music");
    let control = document.getElementById("music_button");
    if (music.paused === false) {
        music.pause();
        control.style.background = "url(./pictures/mograph/play.png) no-repeat center";
    } else {
        music.play();
        control.style.background = "url(./pictures/mograph/pause.png) no-repeat center";
    }
}