// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordlength = prompt("How many characters");
  var passwordcharacters = "";
  
  if (passwordlength < 8 || passwordlength > 128 || isNaN(passwordlength)) {
    alert("Password length does not meet requirements. Password must be at least eight characters. Please try again.");
    return "";
  }

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!@#$%^&*()<>";

  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
    alert("You must include at least one character set.");
    return "";
  }

  if (includeLowercase) {
    passwordcharacters += lowercase;
  }
  if (includeUppercase) {
    passwordcharacters += uppercase;
  }
  if (includeNumbers) {
    passwordcharacters += numbers;
  }
  if (includeSpecial) {
    passwordcharacters += special;
  }

  var password = "";
  for (var i = 0; i < passwordlength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordcharacters.length);
    password += passwordcharacters.charAt(randomIndex);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Clear the old password if any
  passwordText.select();
  document.execCommand("copy"); // Optionally copy to the generated password to the clipboard
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
