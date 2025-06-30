
// My Original Answer
// const reverseString = function(string) {
//     let newString = '';
//     for (let i = string.length; i > 0; i--) {
//         newString = newString + string[string.length - 1];
//         string = string.slice(0, -1);
//     }
//     string = newString
//     return string;
// };

//Official Answer
const reverseString = function (string) {
  return string.split("").reverse().join("");
};


// Do not edit below this line
module.exports = reverseString;
