const repeatString = function(string, num) {
    let repeated = '';
    if (num >= 0) {
    for (let i = 0; i < num; i++) {
        repeated += string; 
    }
    return repeated;
    } else {
        return "ERROR";
    }
};



// Do not edit below this line
module.exports = repeatString;
