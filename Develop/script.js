// Arrays for input options
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacters = ["!", "@", "#", "$", "%", "?", "&", "*", "-", "~"];

var lowerCaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

//Collect user input
function setPasswordOptions() {
  // Prompt user for password length
  var length = parseInt(
    prompt("How many characters would you like in your password?")
  );

  // Confirm use of character types
  var useNumericCharacters = confirm("Click OK to use numeric characters.");
  var useSpecialCharacters = confirm("Click OK to use special characters.");
  var useLowerCasedCharacters = confirm(
    "Click OK to use lowercase characters."
  );
  var useUpperCasedCharacters = confirm(
    "Click OK to use uppercase characters."
  );

  // Store user input
  var passwordOptions = {
    length: length,
    useSpecialCharacters: useSpecialCharacters,
    useNumericCharacters: useNumericCharacters,
    useLowerCasedCharacters: useLowerCasedCharacters,
    useUpperCasedCharacters: useUpperCasedCharacters
  };
  return passwordOptions;
}

//Function to generate random password
function random(passwordOptions) {
  return passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
}

// console.log(random(((passwordOptions = length), any)));

function generatePassword() {
  var options = getPasswordOptions();
  // Variable to store password as it's being concatenated
  var result = [];
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", setPasswordOptions, writePassword);
