//! latihan while
// let angkot = 1;

// while (angkot <= 10) {
//   console.log(`angkot No. ${angkot} beroprasi dengan baik`);
//   angkot++;
// }

// ? versi lain
// let jumlahAngkot = 10;
// let noAngkot = 1;

// while (noAngkot <= jumlahAngkot) {
//   console.log(`angkot No. ${noAngkot} beroprasi dengan baik`);
//   noAngkot++;
// }

//! latihan for & while

// ?Versi sendiri

// let jmlAngkot = 10;
// let angkotBeroprasi = 6;
// let noAngkot = 1;

// while (noAngkot <= angkotBeroprasi) {
//   console.log(`angkot No. ${noAngkot} beroprasi dengan baik`);
//   noAngkot++;
// }

// for (let angkotBeroprasi = 7; angkotBeroprasi <= jmlAngkot; angkotBeroprasi++) {
//   console.log(`angkot No. ${angkotBeroprasi} tidak`);
// }

// ?versi inpas
// let jmlAngkot = 10;
// let angkotBeroprasi = 6;
// let noAngkot = 1;

// while (noAngkot <= angkotBeroprasi) {
//   console.log(`angkot No. ${noAngkot} beroprasi dengan baik`);
//   noAngkot++;
// }

// for (noAngkot = 7; noAngkot <= jmlAngkot; noAngkot++) {
//   console.log(`angkot No. ${noAngkot} tidak`);
// }

// ?Versi yang lebih baik
let jmlAngkot = 10;
let angkotBeroprasi = 8;
let noAngkot = 1;

while (noAngkot <= angkotBeroprasi) {
  console.log(`angkot No. ${noAngkot} beroprasi dengan baik`);
  noAngkot++;
}

for (noAngkot = angkotBeroprasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log(`angkot No. ${noAngkot} tidak`);
}
