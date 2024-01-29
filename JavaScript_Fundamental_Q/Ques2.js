
function isMatch(pattern, inputString) {
    
    var regex = new RegExp(pattern);
  
    
    return regex.test(inputString);
  }
  
  // Test cases
  console.log(isMatch('abc', 'abc'));         
  console.log(isMatch('abc', 'def'));        
  console.log(isMatch('\\d{3}', '123'));      
  console.log(isMatch('\\d{3}', '12a'));     
  console.log(isMatch('[aeiou]', 'hello'));   
  console.log(isMatch('[aeiou]', 'xyz'));     
  