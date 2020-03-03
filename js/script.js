

function generatePassword() {
    //Getting the number of characters the password will have via the DOM
    var numCharacter = parseInt(document.getElementById("numCharacterValue").value,10);

    //Getting the checkbox's values via the DOM
    var lowerCase = document.getElementById("LowerCase").checked;
    var upperCase = document.getElementById("UpperCase").checked;
    var number = document.getElementById("Number").checked;
    var special = document.getElementById("Special").checked;

    //Out of bound cases starts here:
    if(numCharacter === ""){
        alert("Please enter password length");
        return;
    }

    if(numCharacter < 8 || numCharacter > 128) {
        alert("Incorrect password length. Password length needs to be in range from 8 to 128");
        return;
    }

    if(Number.isInteger(numCharacter) === false){
        alert("Incorrect password length syntax. Needs to be an integer");
        return;
    }

    if(lowerCase === false && upperCase === false && number === false && special === false){
        alert("Need to tick one of the boxes");
        return;
    }
    //Out of bound cases ends here:

    var resultPassword = "";
    for (i = 0; i < numCharacter; i++){
        resultPassword += randomCharacter(lowerCase, upperCase, number, special);
    }
    console.log(resultPassword);
    document.getElementById("passwordResultForm").innerHTML = resultPassword;
}




//Functions that generate a single letter
function lowercaseLetter() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var randomLowercaseLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

    return randomLowercaseLetter;
}

function uppercaseLetter() {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var randomUppercaseLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

    return randomUppercaseLetter; 
}

function numericCharacter() {
    return Math.floor(Math.random() * 10);
}

function specialCharacter() {
    var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";
    var randomSpecialCharacter = specialChars[Math.floor(Math.random() * specialChars.length)];

    return randomSpecialCharacter;
}
//End of functions that generate a single letter




//randomCharacter takes in 4 parameters relating to the kind of character you want to generate. If the parameter is 'true' the function will consider the kind of character to be randomly generated
function randomCharacter(lowercase, uppercase, numeric, special) {
    randArray = [lowercase, uppercase, numeric, special];
    var emergencyCounter = 0;
    while (emergencyCounter <= 1000){
        randNum = Math.floor(Math.random() * 4);
        if (randArray[randNum] === true){
            switch(randNum) {
                case 0: return lowercaseLetter();
                case 1: return uppercaseLetter();
                case 2: return numericCharacter();
                case 3: return specialCharacter();
            }
            break;
        }
        emergencyCounter++;
    }
}


/*
We need the password generator to consists of these requirements:
* User can select between 8 characters and 128 characters
* User can choose to include lowercase, uppercase, numeric and special characters
*/