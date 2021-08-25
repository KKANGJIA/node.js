const { odd, even } = require('./var');
const checkNumber = require('./func');

function checkStringOddEven(string) {
  if(string.length % 2){
    return odd;
  } else {
    return even
  }
}

console.log(checkStringOddEven('hello'));

// module.exports = checkStringOddEven;

// 터미널에서 파일 실행 명령어: node 파일명(확장자 생략 가능)