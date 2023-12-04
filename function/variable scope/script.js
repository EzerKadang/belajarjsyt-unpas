//? global/window scope
let a = 1;

function test() {
  let a = 2;
}

test();
console.log(a);
