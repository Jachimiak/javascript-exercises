const sumAll = function(start, end) {
    if (isNaN(start) || isNaN(end) || start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)){
        return "ERROR"
    } 
        let total = 0;    
        if (start > end) {
            let x = end;
            let y = start;
            while (x <= y) {
            total += x;
            x++;
        }
        return total;
        } else {    
            let x = start;
            let y = end;
            while (x <= y) {
            total += x;
            x++;
        }
        }
        
        return total;

};

console.log(sumAll(123, 1));

// Do not edit below this line
module.exports = sumAll;
