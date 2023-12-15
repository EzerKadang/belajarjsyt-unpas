//! function expression
// const tampilNama = function (nama) {
//   return `halo ${nama}`;
// };

// console.log(tampilNama(`eser`));

//! Arrow Function
// const tampilNama = (nama) => {
//   return `halo ${nama}`;
// };

// console.log(tampilNama(`eser`));

//? Mempersingkat arrow satu atribut atau implisit return
// const tampilNama = (nama) => `halo ${nama}`;

// console.log(tampilNama(`eser`));

//?or
// const tampilNama = () => `hallo world!`;

// console.log(tampilNama());

//? Arrow Function parameter lebih dari satu
// const tampilNama = (nama, waktu) => {
//   return `selamat ${waktu}, ${nama}`;
// };

// console.log(tampilNama(`eser`, `siang`));

//! Example 1
//? Function Expression
// let namaMahasiswa = [`eser kadang`, `ellys manurung`, `isnuy`];

// let jumlahHuruf = namaMahasiswa.map(function (nama) {
//   return nama.length;
// });

// console.log(jumlahHuruf);

//? function arrow
// let namaMahasiswa = [`eser kadang`, `ellys manurug`, `isnuy`];

// let jumlahHuruf = namaMahasiswa.map((nama) => nama.length);

// console.log(jumlahHuruf);

//? Mengembalikan nilai dalam bentuk object
// let namaMahasiswa = [`eser kadang`, `ellys manurug`, `isnuy`];

// let jumlahHuruf = namaMahasiswa.map((nama) => ({
//   nama,
//   jumlahHuruf: nama.length,
// }));

// console.table(jumlahHuruf);

//! Example 2
//? Constructor function
// const Mahasiswa = function () {
//   this.nama = `eser`;
//   this.umur = 23;
//   this.sayhallo = function () {
//     console.log(`hallo nama saya ${this.nama}, saya ${this.umur} tahun`);
//   };
// };

// const eser = new Mahasiswa();

//? Arrow function
// const Mahasiswa = function () {
//   this.nama = `eser`;
//   this.umur = 23;
//   this.sayhallo = () => {
//
//   };
// };

// const eser = new Mahasiswa();

//! Example 3
//? object literal
// const Mahasiswa = {
//   nama: `eser`,
//   umur: 23,
//   sayHello: function () {
//     console.log(`hallo nama saya ${this.nama}, saya ${this.umur} tahun`);
//   },
// };

//? Function arrow
// const Mahasiswa = {
//   nama: `eser`,
//   umur: 23,
//   sayHello: () => {
//     console.log(`hallo nama saya ${this.nama}, saya ${this.umur} tahun`);
//   },
// };

//! Example 4
// const Mahasiswa = function () {
//   this.nama = `eser`;
//   this.umur = 23;
//   this.sayhallo = function () {
//     console.log(`hallo nama saya ${this.nama}, saya ${this.umur} tahun`);
//   };

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };

// const eser = new Mahasiswa();

//! example 5
const box = document.querySelector(`.box`);
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
