// function init() {
//   let nama = "eser";
//   let umur = 25;
//   function tampilNama() {
//     console.log(nama); // thats cloosure ⬆️
//     console.log(umur);
//   }
//   console.dir(tampilNama);
// }
// init();

// function init() {
//   let nama = "eser";
//   function tampilNama() {
//     console.log(nama);
//   }
//   return tampilNama;
// }
// let panggilNama = init();
// panggilNama();

// factory

// contoh 1
// function init() {
//   //   let nama = "eser";
//   return function (nama) {
//     console.log(nama);
//   };
// }
// let panggilNama = init();
// panggilNama("eser");
// panggilNama("kadang");

// contoh 2
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`helo ${nama} selamat ${waktu} semoga hari mu menyenangkan`);
//   };
// }

// let selamatPagi = ucapkanSalam("pagi");
// selamatPagi();

// contoh 3
// let add = function () {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// };

// let a = add();
// console.log(a());
// console.log(a());
// console.log(a());

// or using IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();
console.log(add());
console.log(add());
console.log(add());
