// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePossibleCharsOptions(userAnswer) {
  var possibleCharsOptions = [];
  var dictionary = {
    lowercase: ["a","b","c"],
    uppercase: ["A","B","C"],
    numeric: ["0","1","2"],
    specialCharacters: ["!","@","#","$"]
  }
var userAnswerArr = userAnswer.split("+");
for (var i = 0; i < userAnswerArr.length; i++) {
  var charsType = userAnswerArr[i];
  possibleCharsOptions.push(dictionary[charsType]);
  }
  return possibleCharsOptions.flat();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
  return "generate password";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
