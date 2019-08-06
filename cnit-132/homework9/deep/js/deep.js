// window.addEventListener('load', main(), false);

// function main() {
//     // Main
//     let date = new Date();
//     let dateString = date.toISOString;
//     let txtArray = ["> CALL TRANS OPT: RECEIVED. " + dateString + " REC:LOG>", "> WARNING: CARRIER ANOMALY.", "> TRACE PROGRAM: RUNNING.", "> WAKE UP...", "> THE MATRIX HAS YOU.", "> IT HAS BEEN WATCHING.", "> IT IS TIME FOR YOU TO KNOW THE TRUTH.", "> WILL YOU? (Y / N)"];
//     const _SPEED = 100;

//     wait(5000);

//     let ul = document.createElement("ul");
//     let listClass = document.createAttribute("class");
//     listClass.value = "dialog-pane";
//     ul.setAttributeNode(listClass);

//     newChat(txtArray[0], _SPEED, ul);


//     // Chat
//     function newChat(string, speed, ulist) {
//         let li = document.createElement("li");
//         let label = document.createElement("label");
//         let prompt = document.createTextNode(">");
//         label.appendChild(prompt);

//         let classAtt = document.createAttribute("class");
//         classAtt.value = "message";
//         label.setAttributeNode(classAtt);

//         li.appendChild(label);

//         ulist.appendChild(li);

//         typeWriter(string, li, speed);
//     }

//     // Typewrite
//     function typeWriter(str, list, spd) {
//         let i = 0;
//         if (i < str.length) {
//             list.innerHTML += str.charAt(i);
//             i++;
//             setTimeout(typeWriter, spd);
//         }
//     }
//     // Helper
//     function wait(ms) {
//         let d = new Date();
//         let d2 = null;
//         do {
//             d2 = new Date();
//         } while (d2 - d < ms);
//     }
// }