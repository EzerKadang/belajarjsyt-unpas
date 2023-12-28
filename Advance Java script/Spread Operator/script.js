//! spread operator
//* memecah iterables menjadi single element

// const mhs = [`sandhika`, `eser`, `kadang`];
// console.log(...mhs[0]);

//* menggabungkan 2 array
// const mhs = [`sandhika`, `eser`, `kadang`];
// const dosen = [`ria`, `joko`, `risa`];
// const orang = [...mhs, ...dosen];
// console.log(orang);

//* mencopy array
// const mhs = [`sandhika`, `eser`, `kadang`];
// console.log(mhs);
// const mhs1 = [...mhs];
// mhs1.push(`eeer`);
// console.log(mhs1);

// const liNama = document.querySelectorAll(`li`);
// const mhs = [];
// for (let i = 0; i < liNama.length; i++) {
//   mhs.push(liNama[i].textContent);
// }

// console.log(mhs);

// const mhs = [...liNama].map((m) => m.textContent);
// console.log(mhs);

//* memisahkan setiap huruf
const nama = document.querySelector(`.nama`);

const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join(``);
console.log(huruf);
nama.innerHTML = huruf;
