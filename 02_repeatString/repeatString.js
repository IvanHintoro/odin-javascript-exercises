const repeatString = function(texts, number) {
    result = "";
    if (number < 0){
        return "ERROR";
    }
    
    for (let i = 0; i < number; i++){
        result = result + texts;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
