// !using while for
// let jmlAngkot = 10;
// let angkotBeroprasi = 8;
// let noAngkot = 1;

// while (noAngkot <= angkotBeroprasi) {
//   console.log(`angkot No. ${noAngkot} beroprasi dengan baik`);
//   noAngkot++;
// }

// for (noAngkot = angkotBeroprasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
//   console.log(`angkot No. ${noAngkot} tidak`);
// }

// !using penulangan for & pengkondisian IF Else

// let jmlAngkot = 10;
// let angkotBeroprasi = 6;

// for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroprasi) {
//     console.log(`angkot NO ${noAngkot} beroprasi dengan baik`);
//   } else {
//     console.log(`angkot No. ${noAngkot} tidak beroprasi`);
//   }
// }

// !using if else
// let jmlAngkot = 10;
// let angkotBeroprasi = 6;

// for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroprasi) {
//     console.log(`angkot NO ${noAngkot} beroprasi dengan baik`);
//   } else if (noAngkot === 8) {
//     console.log(`angkot No. ${noAngkot} lembur`);
//   } else {
//     console.log(`angkot No. ${noAngkot} tidak beroprasi`);
//   }
// }

// !using if else ver 2
// let jmlAngkot = 10;
// let angkotBeroprasi = 6;

// for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroprasi) {
//     console.log(`angkot NO ${noAngkot} beroprasi dengan baik`);
//   } else if (noAngkot === 8) {
//     console.log(`angkot No. ${noAngkot} lembur`);
//   } else if (noAngkot === 10) {
//     console.log(`angkot No. ${noAngkot} lembur`);
//   } else {
//     console.log(`angkot No. ${noAngkot} tidak beroprasi`);
//   }
// }

// !using if else & operator logic
// let jmlAngkot = 10;
// let angkotBeroprasi = 6;

// for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= angkotBeroprasi) {
//     console.log(`angkot NO ${noAngkot} beroprasi dengan baik`);
//   } else if (noAngkot === 8 || noAngkot === 10) {
//     console.log(`angkot No. ${noAngkot} lembur`);
//   } else {
//     console.log(`angkot No. ${noAngkot} tidak beroprasi`);
//   }
// }

// !using if else & operator logic ver 2
let jmlAngkot = 10;
let angkotBeroprasi = 6;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroprasi && noAngkot !== 5) {
    console.log(`angkot NO ${noAngkot} beroprasi dengan baik`);
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log(`angkot No. ${noAngkot} lembur`);
  } else {
    console.log(`angkot No. ${noAngkot} tidak beroprasi`);
  }
}
