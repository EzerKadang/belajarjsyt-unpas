//! Execution Context, Hoisting & Scope
// var nama = `eser`;
// console.log(nama);

//? creation phase pada global context
//* mencari keyword var let atau const
//* kemudian setelah ketemu akan di naikkan keatas
// dan kemudian var let atau const diisi dengan undifined (ex : let nama = undifined)
// kalau ada function() jika tidak dijalankan makan akan memunculkan tulisan function itu sendiri
//? ciri konsep diatas disebut hoisting
// window  = gobal object
// console.log(window);
// this = window
// console.log(this);

//? execution phase
// coding akan di execution dari atas kebawah

//! example

// let nama = `eser`;
// let umur = 25;

// function sayHello() {
//   return `hallo saya ${nama}, saya ${umur} tahun `;
// }

// console.log(sayHello());

// function membuat local execution context yang didalamnya terdapat creation dan execution phase
// function atau local execution bisa mengakses window juga bisa mengakses arguments
// dan ada hoisting phase secara lokal

//! example 2
// let nama = `eser`;
// let username = `@eser_kadang`;

// function cetakURL(username) {
//   var instagramURL = `http://instagram.com/`;
//   return instagramURL + username;
// }

// console.log(cetakURL(username));

//! example 3
function satu() {
  var nama = `eser`;
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = `kadang`;
satu();
dua(`ellys`);
console.log(nama);
