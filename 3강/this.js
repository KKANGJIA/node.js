console.log(this); // {}
console.log(module.exports === this); //true

function a() {
  console.log(this === global); //true
}
a();