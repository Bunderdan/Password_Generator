const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstBtn = document.getElementById("first-btn")
let secondBtn = document.getElementById("second-btn")
let passwordList = []
let passwordListTwo = []

function generateCharacter() {
   let randomCharacter = Math.floor( Math.random() * characters.length )
   return randomCharacter 
}

function addCharacter() {
    if (passwordList.length < 15) {
        passwordList.push( characters[generateCharacter()] )
        passwordListTwo.push( characters[generateCharacter()] )
        addCharacter()
    } else {
        return passwordList
    }  
}

function password() {
    addCharacter()
    for(let i = 0; i < passwordList.length; i ++ ) {
        firstBtn.textContent += passwordList[i]
        secondBtn.textContent += passwordListTwo[i]
    }
}

function generatePassword() {
    firstBtn.textContent = ""
    secondBtn.textContent = ""
    passwordList = []
    passwordListTwo = []
    password()
}

function copy() {
    let text = firstBtn.textContent;
    navigator.clipboard.writeText(text)
}

function copyTwo() {
    let text = secondBtn.textContent;
    navigator.clipboard.writeText(text)
}