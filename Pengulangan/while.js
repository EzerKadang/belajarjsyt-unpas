//! manual pengulangan
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");

//! DOM While
// while(kondisi (jika kondisi bernilai true makan aksi dijalankan jika flase kebalikannya)){
//     aksi
// }

// ? contoh
// while (true) {
//   console.log("test");
// }
// *Note : akan mengakibatkan infinite loop.

// ! looping dihentikan oleh user
// let ulang = true;
// while (ulang) {
//   console.log("hello world");
//   ulang = confirm("lagi?");
// }

// ! looping dihentikan oleh program
let ulang = 1;
while (ulang <= 5) {
  console.log("hello world " + ulang + "x");
  ulang++;
}
