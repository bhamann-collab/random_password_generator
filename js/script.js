function generatePassword() {
    var finalGeneratedPassword = "test";
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

    

}

test = generatePassword();


/*
We need the password generator to consists of these requirements:
* User can select between 8 characters and 128 characters
* User can choose to include lowercase, uppercase, numeric and special characters
*/