const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedUrl.query); 
console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));

// 서버로 보낼 때 문자열로 보내면 서버가 이해하지 못해서 객체로 변환해주는 parse를 사용
// 서버에서 다시 돌아올 때 문자열로 변환해서 보내주기 위해서 stringify
// 기본 노드에서 사용, 특히나 전체 주소 다 안오고 주소가 생략되서 오는 경우에 기본노드만을 사용해야하기 때문임