// Assignment Code

// All strings with password components
const types = {
  numbers : "0123456789",
  upperCase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase : "abcdefghijklmnopqrstuvwxyz",
  symbols : "!@#$%^&*(){}[]></_+=-?.,~"

};

let generatePassword = function() {

  // password information start
  let passInfo = "";

  // list chosen types
  const passTypes = [];

  // ask user for desired password length
  let passLength = window.prompt("Enter password lenghth (between 8-128)");

  // if user selects a password between 8 and 128 characters
  if (passLength >= 8 && passLength <= 128) {

    // ask user if they want a password with numbers
    const getNumber = window.confirm("include numbers?");

  // if using numbers
    if (getNumber) {
      // add numbers to include to password
      passInfo += types.numbers;
      // push numbers into password array
      passTypes.push(getRandomChar(types.numbers));
    };

    // ask user if they want a password with lowercase
    const getLowerCase = window.confirm("include lower case letters?");
    
    // if using lowercase 
    if (getLowerCase) {
      // add lower case to include in password
      passInfo += types.lowerCase;
      // push lower case letters into password array
      passTypes.push(getRandomChar(types.lowerCase));
    };

    // ask user if they want a password with uppercase letters
    const getUpperCase = window.confirm("include upper case letters?");

    // if using uppercase
    if (getUpperCase) {
      // add upper case to include in password
      passInfo += types.upperCase;
      // push upper case letters into password array
      passTypes.push(getRandomChar(types.upperCase));
    };

    // ask user if they want a password with symbols
    const getSymbols = window.confirm("include upper Symbols?");

    if (getSymbols) {
      // add symbols to include in password
      passInfo += types.symbols;
      // push uppercase letters into password array
      passTypes.push(getRandomChar(types.symbols));
    };

    // if nothing is added to passInfo
    if (!passInfo) {
      // tell user to select at least one option
      window.alert("Password must contain at least one character type")
      // run it back from the start
      return generatePassword();
    };

    // add characters to equal desired password length?
    while (passTypes.length < passLength) {
      // add a random character from pass info
      passTypes.push(getRandomChar(passInfo));
    };

    // shuffle the character list in the array
    for (let i = passTypes.length - 1; i > 0; i--) {
      const swampIndex = Math.floor(Math.random() * (i+1));
      const temp = passTypes[i];
      passTypes[i] = passTypes[swampIndex];
      passTypes[swampIndex] = temp;
      
    };

    // return the shuffled array as a srting
    return passTypes.join("");
  }
  // if password is not 8-128 characters
  else{
    // tell user to use 8-128 characters
    window.alert("Select a password length between 8 - 128 characters");
    // run it back
    return initalState;
  }
};
// getRandomChar uses the passTypes array, fromString determins the length?
let getRandomChar = function(fromString){
  return fromString[Math.floor(Math.random() * fromString.length)];
}

// Write password to the #password input
let generateBtn = document.querySelector("#generate");

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
