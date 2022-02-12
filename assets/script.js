// Global variables (arrays)
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];

var numbers = [0123456789];

var specialCharacters = ["!@#$%^&*()_+?<>:{}[]"];
// Global variables used in local functions below
var passLength;
var characters;
var selected;
var upperCase;
var lowerCase;
var numbers;
var specialCharacters;
var selectUpperCase;
var selectLowerCase;
var selectNumbers;
var selectSpecialCharacters;

/* First Acceptance Criteria: WHEN I click the button to generate a password
                            THEN I am presented with a series of prompts for password criteria */

// this function links to the button click created in HTML page so that the function will not start until the generate password button is clicked
function generatePassword () {
// User selects length but return sends them back if criteria is not met
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
// user will select if they want to use the specific types.  If/else statements were used to provide confirmation of their choice
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
    };

  }
  // added the join after noticing toString was leaving commas in the password
  let noComma = selected.join("");
  // changes the noComma from a concatenated array to a string
  let values = noComma.toString();
  // ensures no previous data makes it into the password (I think this is how to do it)
  let password = ""

 for (var i = 0; i <= passLength; i++) {
   // password gets the string from selected values but it gets randomized with the Math.random - charAt was chosen after researching math.random with a string
   password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
 }

 // link to HTML id password make the password generate in the page field rather than a window prompt
 document.getElementById("password").innerHTML = password;
}
