const palindromes = function (string) {
    let newstring = string.toLowerCase();
    let newstr = newstring.replace(/ /g,'');
    
    
    const array = [];
    for (let i of newstr){
        array.push(i);
        if (i===',' || i==='.' || i==='!'){
            array.splice(array.indexOf(i),1);
        }
        
    }
    let arr = array.join('');
    const revarray = array.reverse().join('');
    
    if (arr === revarray){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
