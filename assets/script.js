

//Possible Password Characters
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Function will take user choices and generate password based on choices

function generatePassword() {
  //Takes user input to get character amount
  var charAmount = parseInt(prompt("Enter how many characters you want your password to contain (8-128 characters)"));

  var passwordString = "";
  var possibleCharacters = "";
  var requiredCharacters = "";


  if (charAmount < 8 || charAmount > 128) {
    alert("Please choose a number between 8 and 128")
  } else {
    //Determine if user wants to use lowercase letters
    var lowerConfirm = confirm("Do you want to include lowercase letters in your password?");

    //Determine if user wants to use uppercase letters
    var upperConfirm = confirm("Do you want to inclue uppercase letters in your password?");

    //Determine if user wants to use numbers
    var numberConfirm = confirm("Do you want to include numbers in your password?");

    //Determine if user wants to use special characters
    var specialConfirm = confirm("Do you want to include special characters in your password?");
    
    //Use user inputs to determine which character types are in password
    if (lowerConfirm) {
      possibleCharacters += lowercaseLetters;
      requiredCharacters += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    }

    if (upperConfirm) {
      possibleCharacters += uppercaseLetters;
      requiredCharacters += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    }

    if (numberConfirm) {
      possibleCharacters += numbers;
      requiredCharacters += numbers[Math.floor(Math.random() * numbers.length)];
    }

    if (specialConfirm) {
      possibleCharacters += specialCharacters;
      requiredCharacters += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }

    //Loop to grab random characters from chosen character types and will stop at chosen password lenth
    for (var i = 0; i < charAmount; i++) {
      var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
      possibleCharacters[randomIndex];
      passwordString += possibleCharacters[randomIndex];
    }
  }

  return passwordString.substr(requiredCharacters.length) + requiredCharacters;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



