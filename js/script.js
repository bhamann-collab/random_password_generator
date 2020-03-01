function generatePassword() {
    while(true){
        var passwordLength = parseInt(prompt("Length of password (Please select from 8-128)"));
        if (passwordLength <= 128 && passwordLength >= 8 && Number.isInteger(passwordLength)){
            break;
        } else if (isNaN(passwordLength)) {
            break;
        }
    }

    if (confirm("Would you like lower-case letters in your password?")) {
        var lowerCaseLetters = true;
    } else {
        var lowerCaseLetters = false;
    }

    if (confirm("Would you like Upper-case letters in your password?")) {
        var upperCaseLetters = true;
    } else {
        var upperCaseLetters = false;
    }
    
    if (confirm("Would you like numerical characters in your password?")) {
        var numericalCharacters = true;
    } else {
        var numericalCharacters = false;
    }

    if (confirm("Would you like special characters in your password?")) {
        var specialCharacters = true;
    } else {
        var specialCharacters = false;
    }
    var finalGeneratedPassword = []
    for(var i = 0; i < passwordLength; i++){
    
    }

}

//test = generatePassword();


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



/*
We need the password generator to consists of these requirements:
* User can select between 8 characters and 128 characters
* User can choose to include lowercase, uppercase, numeric and special characters
*/