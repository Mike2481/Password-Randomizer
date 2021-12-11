// Assignment code here


/* WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria */

// this function links to the button click created in HTML page
function generatePassword () {


  var passLength = prompt("How many characters will your password be?  Select between 8-128");
  
    if(passLength < 8 || passLength > 128) {

      alert("Choose a valid option. Password must be between 8-128 characters");
      return generatePassword();
    }
  
pickChars ();
      /*WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters */
function pickChars () {
  // Here is where character types are selected through a series of if/else statements

        let upperCase = confirm("Would you like to use uppercase letters?");
        if (upperCase == true) {
          result = alert("You will be using uppercase letters");
        } 
        else {
          result = alert("No uppercase letters for you!")
        }

        let lowerCase = confirm("Would you like to use lowercase letters?");
        if (lowerCase == true) {
          result = alert("You will be using lowercase letters");
        } 
        else {
          result = alert("No lowercase letters for you!")
        }

        let numbers = confirm("Would you like to use numbers?");
          if (numbers == true) {
            result = alert("You will be using numbers");
          } 
          else {
            result = alert("No numbers for you!")
          }

        let specialCharacters = confirm("Would you like to use special characters?");
          if (specialCharacters == true) {
            result = alert("You will be using special characters");
          } 
          else {
            result = alert("No special characters for you!")
          }

/* WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected */

          // this alert will prompt when all character types are "false" but I need it to return to beginning of character selection
          while(upperCase == false && lowerCase == false && numbers == false && specialCharacters == false) {
            alert("You must select at least one character type");
            return pickChars();

          }
        }       



}




    






/* WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page */

  generatePassword();
  pickChars();



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
