// for (let nilaiAwal = 1; nilaiAwal <= 5; nilaiAwal++) {
//   console.log("hello world " + nilaiAwal + "x");
// }

// Tugas_______________________________________
var noAngkot = 1;
var jumlahAngkot = 10;
var angkotBeroprasi = 6;

while (noAngkot <= angkotBeroprasi) {
  console.log(`angkot NO.${noAngkot} beroprasi dengan baik`);
  noAngkot++;
}

for (var noAngkot = angkotBeroprasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
  console.log(`angkot NO.${noAngkot} tidak beroprasi`);
}
