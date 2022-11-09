const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let firstPasswordEl = document.getElementById("firstpassword")
let secondPasswordEl = document.getElementById("secondpassword")
let randomizer = Math.floor(Math.random() * characters.length)



function generatePw() {
    
    let lengthValue = ""
    // console.log(lengthValue)
    if (document.getElementById("input-el").value >= 5 && document.getElementById("input-el").value <= 30 ) {
          lengthValue = document.getElementById("input-el").value
        // console.log(lengthValue)
    }
    
    else {
        lengthValue = 15
    }
    
        
    firstPasswordEl.textContent = ""
    secondPasswordEl.textContent = ""
    // console.log("click")
    
     for (let i=0; i<lengthValue; i+=1) {
        randomizer = Math.floor(Math.random() * characters.length)
        firstPasswordEl.textContent += characters[randomizer]
        randomizer = Math.floor(Math.random() * characters.length)
        secondPasswordEl.textContent += characters[randomizer]
    }

           
}



