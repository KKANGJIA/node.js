const odd = '홀수입니다.';
const even = '짝수입니다.';

module.exports = { odd, even };

// module.exports === exports === {}

// module.exports의 원칙 
// 한개일 때, module.exports = odd;
// 여러개일 때, module.exports = { odd, even }; 또는 exports.odd =odd; experts.even = even;
//주의할 점 여러 개일때 표기법이 두개가 있는데 사용할거면 하나로 통일해야 무시되지 않음