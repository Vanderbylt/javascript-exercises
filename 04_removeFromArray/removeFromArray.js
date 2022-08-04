const removeFromArray = function(array, ...args) {
   for (let arg of args){
    if (array.indexOf(arg)=== -1){
        continue;
    }
    else if (typeof arg !== typeof array[array.indexOf(arg)]){
        continue;
    }
    else{
     array.splice(array.indexOf(arg),1);
    }
    }
            
   return array;
}

// Do not edit below this line
module.exports = removeFromArray;
