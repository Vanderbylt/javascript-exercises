const reverseString = function(str) {
    
 
        // Check input
        if(str.length < 2 ) {
            return '';
        }
         
        // Take empty array revArray
        const revArray = [];
        const length = str.length - 1;
         
        // Looping from the end
        for(let i = length; i >= 0; i--) {
            revArray.push(str[i]);
        }
         
        // Joining the array elements
        return revArray.join('');
    
};

// Do not edit below this line
module.exports = reverseString;
