//! rest parameter
// function myFunc(a, ...myarg) {
//   return a;
// }

// console.log(myFunc(1, 2, 3, 4, 5));

//? menjumlahkan
// function jumlah(...angka) {
//   let total = 0;
//   for (i of angka) {
//     total += i;
//   }
//   return total;
// }

// console.log(jumlah(1, 2, 3, 4, 5));

//? array distructering
// const kelompok1 = [`eser`, `nusyi`, `llyse`, `joko`, `sandika`];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

//? object dustructering
// const team = {
//   pm: `nusyi`,
//   frontend1: `eser`,
//   frontend2: `kadang`,
//   backend: `riki`,
//   uiux: `kevin`,
//   devops: `ricad`,
// };

// const { pm, ...myteam } = team;

function filterby(type, ...values) {
  return values.filter((v) => typeof v === type);
}

console.log(filterby(`boolean`, 1, 2, `eser`, false, 10, true, `doddy`));
