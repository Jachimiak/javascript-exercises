const convertToCelsius = function(tempF) {
    let convert = (tempF - 32) * 5 / 9;
    convert = parseFloat(convert.toFixed(1));
    return convert;
};

const convertToFahrenheit = function(tempC) {
    let convert = (tempC * 9 / 5) + 32;
    convert = parseFloat(convert.toFixed(1));
    return convert;
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
