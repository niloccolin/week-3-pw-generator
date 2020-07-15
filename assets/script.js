// array of special characters to be included in password
var specialChars = [
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$'
]

// array of numeric characters to be included in password
var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

// array of lowercase characters to be included in password
var lowerCaseChars = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// array of uppercase characters to be included in password
var upperCaseChars = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

// function to prompt user for password options
function getPasswordChoices() {

    var passwordLength = parseInt(
        prompt('What will be the LENGTH of your password? Choose a NUMBER between 8 and 128.')
    );

    if (isNaN(passwordLength) == true) {
        alert('You must decide on a length for your password. Please choose a NUMBER between 8 and 128.');
        return;
    }

    if (passwordLength < 8) {
        alert('Please choose a password length of at least 8 characters.');
        return;
    }

    if (passwordLength > 128) {
        alert('Please choose a password length of no more than 128 characters.');
        return;
    }

    var hasLowerCaseChars = confirm(
        'Include lowercase characters in your password? Click OK to confirm.'
    );

    var hasUpperCaseChars = confirm(
        'Include uppercase characters in your password? Click OK to confirm.'
    );

    var hasNumericChars = confirm(
        'Include numbers in your password? Click OK to confirm.'
    );

    var hasSpecialChars = confirm(
        'Include special characers in your password? Click OK to confirm.'
    );

    if (
        hasLowerCaseChars == false &&
        hasUpperCaseChars == false &&
        hasNumericChars == false &&
        hasSpecialChars == false
    ) {
       alert('You must choose at least one (1) character type.');
       return;
    }

    var passwordChoices = {
        passwordLength: passwordLength,
        hasLowerCaseChars: lowerCaseChars,
        hasUpperCaseChars: upperCaseChars,
        hasNumericChars: numericChars,
        hasSpecialChars: specialChars
    };

    return passwordChoices;
}


function getRandom(arr) { // arbitrarily chosen parameter name for referencing array
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomElement = arr[randomIndex];

    return randomElement;
}

// function to generate password with user input
function generatePassword() {
    var choices = getPasswordChoices();

    // variable to store password as it's being concatenated
    var result = [];

    // array to store types of characters to include in password
    var possibleChars = [];

    // array to contain one of each type of chosen character to ensure each will be used
    var guaranteedChars = [];

    // conditional statements that add array of characters into array of possible characters based on user input
    if (choices.hasLowerChars) {
        possibleChars = possibleChars.concat(lowerCaseChars);
        guaranteedChars.push(getRandom(lowerCaseChars));
    }

    if (choices.hasUpperCaseChars) {
        possibleChars = possibleChars.concat(upperCaseChars);
        guaranteedChars.push(getRandom(upperCaseChars));
    }

    if (choices.hasNumericChars) {
        possibleChars = possibleChars.concat(numericChars);
        guaranteedChars.push(getRandom(numericChars));
    }

    if (choices.hasSpecialChars) {
        possibleChars = possibleChars.concat(specialChars);
        guaranteedChars.push(getRandom(specialChars));
    }

    for (var i=0; i < choices.length; i++) {
        var possibleChar = getRandom(possibleChars);

        result.push(possibleChar);
    }

    for (var i = 0; i < guaranteedChars.length; i++) {
        result[i] = guaranteedChars[i];
    }

    return result.join('');
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

  return password;
}

// variable that selects the button on the HTML page via querySelector method
var generateBtn = document.querySelector('#generate');

// button click event listener
generateBtn.addEventListener('click', writePassword);