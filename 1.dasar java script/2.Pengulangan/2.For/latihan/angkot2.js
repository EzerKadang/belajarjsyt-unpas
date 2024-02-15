let jmlAngkot = 10;
let angkotBeroprasi = 8;
let noAngkot = 1;

while (noAngkot <= angkotBeroprasi) {
  console.log(`Angkot NO. ${noAngkot} beroprasi dengan baik`);
  noAngkot++;
}

for (
  angkotBeroprasi = angkotBeroprasi + 1;
  angkotBeroprasi <= jmlAngkot;
  angkotBeroprasi++
) {
  console.log(`Angkot NO. ${angkotBeroprasi} Sedang tidak beroprasi`);
}
