// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function of possible character options
function generatePossibleCharsOptions(userAnswer) {
  var possibleCharsOptions = [];
  var dictionary = {
    lowercase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    uppercase: ["A","B","C","D","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    numeric: ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],
    specialCharacters: ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","{","}","[","]","?","/","<",">"]
  };
var userAnswerArr = userAnswer.split("+");
for (var i = 0; i < userAnswerArr.length; i++) {
  var charsType = userAnswerArr[i];
  var dictionaryValue = dictionary[charsType];
  if (!dictionaryValue) {
    continue 
  }
  possibleCharsOptions.push(dictionaryValue);
  }

  return possibleCharsOptions.flat();
}

// Function to prompt for password criteria
function generatePassword() {
  var passwordLength = prompt("Enter the length of your password (between 8 and 128 characters):");

  // Validate password length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return "";
  }
  
  var password = "";
  var userAnswer = prompt("Enter the character types you want in your password (lowercase, uppercase, numeric, specialCharacters), separated by a '+':");
  var possibleChars = generatePossibleCharsOptions(userAnswer);

  // Validate character type selection
  if (possibleChars.length === 0) {
    alert("No character types selected. Please try again.");
    return password;
  }
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleChars.length);
    password += possibleChars[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password !== "") {
    passwordText.value = password;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);