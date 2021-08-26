const { odd,even } = require('./var');

function checkNumber(number) {
  if (number % 2){
    return odd;
  } else {
    return even;
  }
}

// console.log(odd, even); //홀수입니다. 짝수입니다.

module.exports = {checkNumber, odd , even};