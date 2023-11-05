// var jumlahAngkot = 10;
// var angkotBeroprasi = 6;

// for (var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroprasi) {
//     console.log(`angkot NO.${noAngkot} beroprasi dengan baik`);
//   } else {
//     console.log(`angkot NO.${noAngkot} tidak beroprasi`);
//   }
// }

//else if____________________________________________________________
// var angka = prompt(`masukan angka`);

// if (angka % 2 == 0) {
//   alert(`${angka} adalah genap`);
// } else if (angka % 2 == 1) {
//   alert(`${angka} adalah ganjil`);
// } else {
//   alert(`bukan bilangan angka`);
// }

//Tugas_____________________________________________________________
// var jumlahAngkot = 10;
// var angkotBeroprasi = 6;
// var angkotLembur = 8;

// for (var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroprasi) {
//     console.log(`angkot NO.${noAngkot} beroprasi dengan baik`);
//   } else if (noAngkot === angkotLembur) {
//     console.log(`angkot NO.${noAngkot} Lembur`);
//   } else {
//     console.log(`angkot NO.${noAngkot} tidak beroprasi`);
//   }
// }

//Tugas 2_____________________________________________________________
// var jumlahAngkot = 10;
// var angkotBeroprasi = 6;
// var angkotLembur = 8;
// var angkotLembur2 = 10;

// for (var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroprasi) {
//     console.log(`angkot NO.${noAngkot} beroprasi dengan baik`);
//   } else if (noAngkot === angkotLembur || noAngkot === angkotLembur2) {
//     console.log(`angkot NO.${noAngkot} Lembur`);
//   } else {
//     console.log(`angkot NO.${noAngkot} tidak beroprasi`);
//   }
// }

//Tugas 3_____________________________________________________________
var jumlahAngkot = 10;
var angkotBeroprasi = 6;
var angkotLembur = 8;
var angkotLembur2 = 10;
var angkotLembur3 = 4;

for (var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroprasi && noAngkot !== angkotLembur3) {
    console.log(`angkot NO.${noAngkot} beroprasi dengan baik`);
  } else if (
    noAngkot === angkotLembur ||
    noAngkot === angkotLembur2 ||
    noAngkot === angkotLembur3
  ) {
    console.log(`angkot NO.${noAngkot} Lembur`);
  } else {
    console.log(`angkot NO.${noAngkot} tidak beroprasi`);
  }
}
