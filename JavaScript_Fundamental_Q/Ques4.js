function extractWithGroups(pattern, inputString) {
    
    var regex = new RegExp(pattern);
  
    
    var match = regex.exec(inputString);
  
    
    if (match) {
      
      var groups = match.slice(1); 
      
      return {
        fullMatch: match[0],
        groups: groups
      };
    } else {
      
      return null;
    }
  }
  
  
  var datePattern = /(\d{2})\/(\d{2})\/(\d{4})/;
  var dateString = 'Today is 01/29/2024';
  
  var result = extractWithGroups(datePattern, dateString);
  
  if (result) {
    console.log('Original String:', dateString);
    console.log('Full Match:', result.fullMatch);
    console.log('Day:', result.groups[0]);
    console.log('Month:', result.groups[1]);
    console.log('Year:', result.groups[2]);
  } else {
    console.log('No match found.');
  }
  