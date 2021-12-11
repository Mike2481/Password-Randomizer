// Assignment code here



// Global variables (arrays)
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "?", "<", ">", ":", "{", "}", "[", "]"];
// Global variables used in local functions below
var passLength;
var characters;
var selected;
var password;
var upperCase;
var lowerCase;
var numbers;
var specialCharacters;
var selectUpperCase;
var selectLowerCase;
var selectNumbers;
var selectSpecialCharacters;

/* WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria */

// this function links to the button click created in HTML page so that the function will not start until the generate password button is clicked
function generatePassword () {
// Here is where I ask the user how many characters their password needs to be
  passLength = prompt("How many characters will your password be?  Select between 8-128");
    // if they do not key anything an alert will be sent telling them the criteria again
    if (passLength == false) {
      alert("Please enter between 8-128");
      return generatePassword(); // this takes them back to the start of the function, otherwise a second mistake will still progress through the code
    // if they do not select a number between 8-128 this will alert and outline the criteria again
    } else if (passLength < 8 || passLength > 128) {
      alert("Choose a valid option. Password must be between 8-128 characters");
      return generatePassword(); // same as previously, this starts the function over
    // I need an else if statement here so that if non-numerical value is added, it will start them over
    
    // if the entry satisfies the parameters, this will send them to the next function
    } else {
      characters();
    }
    

    

function characters() {
// user will select if they want to use the specific types.  If else statements were used to provide confirmation of their choice
      selectUpperCase = confirm("Would you like to use uppercase letters?");
      if (selectUpperCase) {
        result = alert("You will be using uppercase letters");

      } else {
        result = alert("No uppercase letters for you!")
      }
      selectLowerCase = confirm("Would you like to use lowercase letters?");
      if (selectLowerCase) {
        result = alert("You will be using lowercase letters");
      } 
      else {
        result = alert("No lowercase letters for you!")
      }
      selectNumbers = confirm("Would you like to use numbers?");
      if (selectNumbers) {
        result = alert("You will be using numbers");
      } 
      else {
        result = alert("No numbers for you!")
      }
      selectSpecialCharacters = confirm("Would you like to use special characters?");
      if (selectSpecialCharacters) {
        result = alert("You will be using special characters");
      } 
      else {
        result = alert("No special characters for you!")
      };
    // If there are no selections a return to the beginning of the function is called and the user is alerted to select at least one type
    if (selectUpperCase == false && selectLowerCase == false && selectNumbers == false && selectSpecialCharacters == false) {
      alert("You must select at least one character type");
      return characters();
    }
    // If all 4 types are selected, the arrays for the selected types are concatenated
    else if (selectUpperCase && selectLowerCase && selectNumbers && selectSpecialCharacters) {
      selected = upperCase.concat(lowerCase, numbers, specialCharacters);
    }
    // If only 3 types are selected, the arrays for the selected types are concatenated
    else if (selectUpperCase && selectLowerCase && selectNumbers) {
      selected = upperCase.concat(lowerCase, numbers);
    }
    else if (selectUpperCase && selectLowerCase && selectSpecialCharacters) {
      selected = upperCase.concat(lowerCase, specialCharacters);
    }
    else if (selectUpperCase && selectNumbers && selectSpecialCharacters) {
      selected = upperCase.concat(numbers, specialCharacters);
    }
    else if (selectLowerCase && selectNumbers && selectSpecialCharacters) {
      selected = lowerCase.concat(numbers, specialCharacters);
    }
    // If only 2 types are selected, the arrays for the selected types are concatenated
    else if (selectUpperCase && selectLowerCase) {
      selected = upperCase.concat(lowerCase);
    }
    else if (selectUpperCase && selectNumbers) {
      selected = upperCase.concat(numbers);
    }
    else if (selectUpperCase && selectSpecialCharacters) {
      selected = upperCase.concat(specialCharacters);
    }
    else if (selectLowerCase && selectNumbers) {
      selected = lowerCase.concat(numbers);
    }
    else if (selectLowerCase && selectSpecialCharacters) {
      selected = lowerCase.concat(specialCharacters);
    }
    else if (selectNumbers && selectSpecialCharacters) {
      selected = numbers.concat(specialCharacters);
    }
    // If only one type is selected, the individual array is assigned
    else if (selectUpperCase) {
      selected = upperCase;
    }
    else if (selectLowerCase) {
      selected = lowerCase;
    }
    else if (selectNumbers) {
      selected = numbers;
    }
    else if (selectSpecialCharacters) {
      selected = specialCharacters;
    }
    


    

  }

}

/* WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */

  //random();


// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
/*function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);*/

