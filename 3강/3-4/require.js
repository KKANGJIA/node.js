console.log('require가 가장 위에 오지 않아도 됩니다.');

module.exports = '저를 찾아보세요.';

require('./var');

console.log('require.cache입니다.');
console.log(require.cache);
console.log('require.main입니다.');
console.log(require.main === module);
console.log(require.main.filename);

// import는 가장 최상단에 위치해야 함
// require안에 main과 cache가 존재함
// main은 현재 실행되고 있는 프로세스를 가리키고
// chche는 한번 읽힌 파일이 저장되는 메모리임
// 효율적인 역할을 하는데 한번 저장한 파일은 다음에 읽을 일이 생길때
// 파일을 읽느라 느린 작업을 메모리에서 빠르게 가져옴으로써 
// 성능을 효율적으로 만들어준다