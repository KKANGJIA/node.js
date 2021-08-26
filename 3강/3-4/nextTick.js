setImmediate(() => {
  console.log('immediate');
});
process.nextTick(() => {
  console.log('nextTick');
});
setTimeout(() => {
  console.log('timeout');
}, 0);
Promise.resolve().then(() => console.log('promise'));

// 결과
// nextTick
// promise
// immediate
// timeout
// timeout과 immediate는 환경에 따라서 결과가 바뀔 수도 있음
// nextTick과 promise는 가장빨리 실행됨(다른 타이머들 보다)
// 남용에 주의하자!