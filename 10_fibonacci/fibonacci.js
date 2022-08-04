const fibonacci = function(n) {
    let num = parseInt(n);
    const fser = [];
    let num1 = 0,
        num2 = 1, 
        next ;
    
    if (n<0){
        return "OOPS"
    }
    if (num === 1){
        return 1;
    }
    for (let i = 1; i <= num; i++) {
        
        next = num1 + num2;
        fser.push(next)
        num1 = num2;
        num2 = next;
    }
    return fser[fser.length-2]
};

// Do not edit below this line
module.exports = fibonacci;
