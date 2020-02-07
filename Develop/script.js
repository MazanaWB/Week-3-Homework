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

// Prompt user for password length
var length = prompt("Please choose password length. From 8 to 128 characerts.");

// Confirm inclusion of character types
var hasNumericCharacters = confirm(
  "Click OK to confirm including numeric characters."
);
var hasSpecialCharacters = confirm(
  "Click OK to confirm including special characters."
);
var hasLowerCasedCharacters = confirm(
  "Click OK to confirm including lowercase characters."
);
var hasUpperCasedCharacters = confirm(
  "Click OK to confirm including uppercase characters."
);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
