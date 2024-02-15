//! object literal
//* tidak efektif jika membuat object yang banyak

// let mhs = {
//   nama: "eser",
//   energy: 10,
//   makan: function (porsi) {
//     this.energy += porsi;
//     console.log(`halo ${this.nama} selamat makan`);
//   },
// };

//! object function declaration
// function Mhs(nama, energy) {
//   let mhs = {};
//   mhs.nama = nama;
//   mhs.energy = energy;
//   mhs.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`halo ${this.nama} selamat makan`);
//   };
//   mhs.main = function (jam) {
//     this.energy -= jam;
//     console.log(`halo ${this.nama} selamat bermain`);
//   };
//   return mhs;
// }

// let mhs1 = Mhs("eser", 10);
// let mhs2 = Mhs("ellys", 10);

// *cara membuat agar method dijalankan terpisah
// const mhsMethod = {
//   makan: function (porsi) {
//     this.energy += porsi;
//     console.log(`halo ${this.nama} selamat makan`);
//   },
//   main: function (jam) {
//     this.energy -= jam;
//     console.log(`halo ${this.nama} selamat bermain`);
//   },
//   tidur: function (jam) {
//     this.energy += jam * 2;
//     console.log(`halo ${this.nama} selamat bermain`);
//   },
// };

// function Mhs(nama, energy) {
//   let mhs = {};
//   mhs.nama = nama;
//   mhs.energy = energy;
//   mhs.makan = mhsMethod.makan;
//   mhs.main = mhsMethod.main;
//   mhs.tidur = mhsMethod.tidur;

//   return mhs;
// }

// let mhs1 = Mhs("eser", 10);
// let mhs2 = Mhs("ellys", 10);

//! Object.create()
const mhsMethod = {
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`halo ${this.nama} selamat makan`);
  },
  main: function (jam) {
    this.energy -= jam;
    console.log(`halo ${this.nama} selamat bermain`);
  },
  tidur: function (jam) {
    this.energy += jam * 2;
    console.log(`halo ${this.nama} selamat bermain`);
  },
};

function Mhs(nama, energy) {
  let mhs = Object.create(mhsMethod);
  mhs.nama = nama;
  mhs.energy = energy;

  return mhs;
}

let mhs1 = Mhs("eser", 10);
let mhs2 = Mhs("ellys", 10);

//! object constractor
// function Mahasiswa(nama, energy) {
//   this.nama = nama;
//   this.energy = energy;

//   this.makan = function (porsi) {
//     this.energy += porsi;
//     console.log(`halo ${this.nama} selamat makan`);
//   };
//   this.main = function (jam) {
//     this.energy -= jam;
//     console.log(`halo ${this.nama} selamat bermain`);
//   };
// }

// let mhs1 = new Mahasiswa("eser", 10);
