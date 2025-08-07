const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
    "$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("pass1");
let password2 = document.getElementById("pass2");

function generatePassword() {
    let pass1 = "";
    let pass2 = "";
    for (let i=0 ; i<15; i++) {
        let rand1 = Math.floor(Math.random() * characters.length);
        let rand2 = Math.floor(Math.random() * characters.length);
        pass1 += characters[rand1];
        pass2 += characters[rand2];
    }
    password1.textContent = pass1;
    password2.textContent = pass2;
}

function copyText() {
    let text = event.target.textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("Copied " + text);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}