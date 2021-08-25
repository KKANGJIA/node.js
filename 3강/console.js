const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: 'value',
    },
  },
};
console.log('전체시간'); //전체시간
console.log('평범한 로그입니다. 쉼표로 구분해 여러값을 찍을 수 있습니다.'); //평범한 로그입니다. 쉼표로 구분해 여러값을 찍을 수 있습니다.
console.log(string, number, boolean); //abc 1 true
console.error('에러메세지는 console.log에 담아주세요.'); // 에러메세지는 console.log에 담아주세요.

console.table([{name:'제로', birth:1994}, {name:'hero', birth:1988}]);
// ┌─────────┬────────┬───────┐
// │ (index) │  name  │ birth │
// ├─────────┼────────┼───────┤
// │    0    │ '제로' │ 1994  │
// │    1    │ 'hero' │ 1988  │
// └─────────┴────────┴───────┘


console.log(obj, {colors: false, depth: 2}); //{ outside: { inside: { key: 'value' } } } { colors: false, depth: 2 }
console.log(obj, {colors: true, depth: 1}); //{ outside: { inside: { key: 'value' } } } { colors: true, depth: 1 }    

console.time('시간 측정'); //코드의 실행 시간을 측정해줘서 성능을 측정할 수 있음
for(let i=0; i<100000; i++){}
console.timeEnd('시간측정'); // time으로 시작한 후에 timeEnd로 끝나는 시간까지를 측정해줌

function b() {
  console.trace('에러위치추적');
}

function a() {
  b();
}
a();

console.timeEnd('전체 시간');

// Trace: 에러위치추적
//     at b (C:\Users\강지아\OneDrive\바탕 화면\개발 공부\node.js\module\console.js:26:11)
//     at a (C:\Users\강지아\OneDrive\바탕 화면\개발 공부\node.js\module\console.js:30:3)
//     at Object.<anonymous> (C:\Users\강지아\OneDrive\바탕 화면\개발 공부\node.js\module\console.js:32:1)
//     at Module._compile (node:internal/modules/cjs/loader:1102:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1131:10)
//     at Module.load (node:internal/modules/cjs/loader:967:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:807:14)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
//     at node:internal/main/run_main_module:17:47
// (node:6424) Warning: No such label '시간측정' for console.timeEnd()
// (Use `node --trace-warnings ...` to show where the warning was created)
// (node:6424) Warning: No such label '전체 시간' for console.timeEnd()