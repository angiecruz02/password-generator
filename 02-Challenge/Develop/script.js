// Assignment Code
var generateBtn = document.querySelector("#generate");

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
  possibleCharsOptions.push(dictionary[charsType]);
  }
  return possibleCharsOptions.flat();
}


//function to prompt for password criteria
function promptForPasswordCriteria() {
  var passwordLength = prompt("Choose a password length between 8 and 128 characters:");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("password length must be between 8 and 120 characters.");
    return null;
  }
}
