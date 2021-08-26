const os = require('os');

console.log('운영체제 정보---------------------------------');
console.log('os.arch():', os.arch());
console.log('os.platform():', os.platform());
console.log('os.type():', os.type());
console.log('os.uptime():', os.uptime()); //실행 시간
console.log('os.hostname():', os.hostname()); //컴퓨터 정보
console.log('os.release():', os.release()); //노드 버전 정보
console.log('경로------------------------------------------');
console.log('os.homedir():', os.homedir()); 
console.log('os.tmpdir():', os.tmpdir());// 임시파일 저장하는 곳

console.log('cpu 정보--------------------------------------');
console.log('os.cpus():', os.cpus()); 
// 몇개의 코어를 가지고 있는지를 보여줌으로써 서버를 몇개나 설정할 수 있을지 알게해준다
// 노드는 싱글스레드 언어인 js의 실행기이고 싱글스레드로 돌아간다
// 그래서 코어가 많으면 한개만 동작하고 나머지는 놀고있다
//이 서버를 놀지 않고 동작하기 위해서 코어의 개수를 알아보는 것이다
console.log('os.cpus().length:', os.cpus().length);

console.log('메모리 정보-----------------------------------');
console.log('os.freemem():', os.freemem()); 
console.log('os.totalmem():', os.totalmem());