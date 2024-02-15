//! filter, map, and reduce
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//? filter
//* Mencari angka >= 3
//* example using for
// const newAngka = [];

// for (i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }

// console.log(newAngka);

//? high order function using filter & arrow function
// const newAngka = angka.filter((a) => a >= 3);

// console.log(newAngka);

//? high order function using Map & arrow function
// const newAngka = angka.map((a) => a * 2);

// console.log(newAngka);

//? hig order function using reduce & arrow function
//* add up all number in array
// const newAngka = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );

// console.log(newAngka);

//? using method chaining (berantai)
//* angka > 5
//* kalikan 3
//* jumlahkan
const hasil = angka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((accu, curr) => accu + curr);

console.log(hasil);
