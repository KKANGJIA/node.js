const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep); //경로 구분자, 윈도우는 \
console.log('path.delimiter:', path.delimiter); //환결변수 구분자 윈도우는 ;이고 맥이나 리눅스는 ,
console.log('------------------------------');
console.log('path.dirname():', path.dirname(string)); // 폴더명 알려줌
console.log('path.extname():', path.extname(string)); // 확장명 알려줌
console.log('path.basename():', path.basename(string)); // 파일명알려줌(확장명 포함)
console.log('path.basename - extname:', path.basename(string, path.extname(string))); //파일명 알려줌(확장명 제외)
console.log('------------------------------');
console.log('path.parse()', path.parse(string)); // 경로를 객체로 변환
console.log('path.format():', path.format({ //객체로 변환한 것을 문자열로 변환
  dir: 'C:\\users\\zerocho',
  name: 'path',
  ext: '.js',
}));
console.log('path.normalize():', path.normalize('C://users\\\\zerocho\\\path.js')); //구분자를 막 섞어 사용해도 환경에 맞는 구분자로 자동 변환해줌
console.log('------------------------------');
console.log('path.isAbsolute(C:\\):', path.isAbsolute('C:\\')); // 절대경로인지 알려줌(true , false)
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));
console.log('------------------------------');
console.log('path.relative():', path.relative('C:\\users\\zerocho\\path.js', 'C:\\')); // 첫번째 경로에서 두번째 경로 가는 방법 알려줌
console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/zerocho')); // 절대경로를 무시하기 때문에 상대경로로 경로 묶어주는 역할을 함 __dirname과 뒤에 표시함 경로를 합쳐줌
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/zerocho')); // 절대경로를 존중하기 때문에 /로 절대경로를 표시하면 앞의 __dirname을 무시하고 절대경로로 연결함