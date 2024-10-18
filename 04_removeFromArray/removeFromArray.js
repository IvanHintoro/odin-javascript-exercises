const removeFromArray = function(myArr, ...args) {
    for (let i=0; i<args.length; i++){
        for (let j=0; j<myArr.length; j++){
            if (myArr[j]===args[i]){
                myArr.splice(j,1);
                j--;
            }
        }
    }
    return myArr;
};

// Do not edit below this line
module.exports = removeFromArray;
