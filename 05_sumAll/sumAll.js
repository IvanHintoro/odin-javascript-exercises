const sumAll = function(numA, numB) {
    sum = 0;
    
    if(numA < 0 || numB < 0 || !Number.isInteger(numA) || !Number.isInteger(numB)){
        return 'ERROR'
    }

    if(numA > numB){
        let temp = numA
        numA = numB;
        numB = temp;
    }

    for (let i = numA; i <= numB; i++){
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
