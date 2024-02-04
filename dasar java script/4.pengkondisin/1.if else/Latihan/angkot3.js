let jmlAngkot = 10;
let angkotBeroprasi = 6;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroprasi) {
    console.log(`Angkot NO. ${noAngkot} beroprasi dengan baik.`);
  } else {
    console.log(`Angkot NO.${noAngkot} tidak beroprasi dengan baik.`);
  }
}
