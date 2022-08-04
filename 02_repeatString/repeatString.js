const repeatString = function repeat(string,num) {
  if ((string && num) && (num >0)){  
    return string.repeat(num);
  }
  else if (num < 0){
    return "ERROR";
  }
  else {
    return '';
  }
};

// Do not edit below this line
module.exports = repeatString;
