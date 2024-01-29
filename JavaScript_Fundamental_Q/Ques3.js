function findCharacterClasses(inputString) {
    
    var digitRegex = /\d/g;
    var uppercaseRegex = /[A-Z]/g;
    var lowercaseRegex = /[a-z]/g;
    var specialCharRegex = /[^a-zA-Z0-9]/g;
  
    
    var digits = inputString.match(digitRegex) || [];
    var uppercaseLetters = inputString.match(uppercaseRegex) || [];
    var lowercaseLetters = inputString.match(lowercaseRegex) || [];
    var specialCharacters = inputString.match(specialCharRegex) || [];
  
    
    return {
      digits: digits,
      uppercaseLetters: uppercaseLetters,
      lowercaseLetters: lowercaseLetters,
      specialCharacters: specialCharacters
    };
  }
  
  
  var testString = 'Hello123! World';
  var result = findCharacterClasses(testString);
  
  console.log('Original String:', testString);
  console.log('Digits:', result.digits);
  console.log('Uppercase Letters:', result.uppercaseLetters);
  console.log('Lowercase Letters:', result.lowercaseLetters);
  console.log('Special Characters:', result.specialCharacters);
  