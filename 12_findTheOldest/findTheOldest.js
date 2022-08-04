const findTheOldest = function(input) {
    var output = [];
    let index;
    let largest = 0;
    for (var i=0; i < input.length ; ++i){
        if (!input[i]['yearOfDeath']){
            input[i]['yearOfDeath'] = 2022;
        }
      output.push(input[i]['yearOfDeath'] - input[i]['yearOfBirth']); 
    }
    for (var i = 0; i < output.length; i++) {
        if (largest < output[i] ) {
            largest = output[i];
        }
    }
    index = output.indexOf(largest);
    return input[index]; 
    
}

// Do not edit below this line
module.exports = findTheOldest;
