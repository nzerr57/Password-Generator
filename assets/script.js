
//Possible Password Characters
var lowercaseLetters : "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters: lowercaseLetters.toUpperCase();
var numbers: "0123456789";
var specialCharacters : " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

var generateBtn = document.querySelector("#generate");


//Function will take user choices and generate password based on choices

function generatePassword() {
    //Take user input to get character amount
    var charAmount = prompt("Select how many character you want your password to contain (8-128 characters)")

    if (charAmount < 8 || charAmount > 128){
    alert("Please choose a number between 8 and 128")
    } else if ()
    

    //Determine if user wants to use lowercase letters
    var lowerCheck = confirm("Do you want to include lowercase letters in your password?")

    //Determine if user wants to use uppercase letters
    var upperCheck = confirm("Do you want to inclue uppercase letters in your password?")

    //Determin if user wants to use numbers
    var numberCheck = confirm("Do you want to include numbers in your password?")

    //Determine if user wants to use special characters
    var specialCheck = confirm("Do you want to include special characters in your password?")

    //Combine user inputs to create a password
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);