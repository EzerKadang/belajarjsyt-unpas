//! for of
//? array type
// const mhs = [`eser`, `nisyu`, `llyse`, `test`];

//* pengulangan biasa
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

//* menggunakan forEach
// mhs.forEach((m) => console.log(m));

// for (const [i, m] of mhs.entries()) {
//   console.log(`nama ${m} index ke - ${i}`);
// }

//? string type
// const nama = `eser`;

// for (const n of nama) {
//   console.log(n);
// }

//? node list
// const liNama = document.querySelectorAll(`.nama`);

// liNama.forEach((n) => console.log(n.textContent));
// for (n of liNama) {
//   console.log(n.innerHTML);
// }

//? arguments
function jumlahAngka() {
  //   return arguments.reduce((a, i) => a + i);
  //   arguments.forEach((a) => (jumlah += a));
  let jumlah = 0;
  for (j of arguments) {
    jumlah += j;
  }
  return jumlah;
}

console.log(jumlahAngka(1, 2, 3, 4, 5));

//! for in
const mhs = {
  nama: `eser`,
  umur: 25,
  email: `eser@gmail.com`,
};

for (m in mhs) {
  console.log(mhs[m]);
}
