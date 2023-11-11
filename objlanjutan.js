//cara untuk membuat object

//1. object literal
// var mahasiswa = {
//   nama: "riko",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`halo ${this.nama} selamat makan`);
//   },
// };

//2. object function declaration

// function mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama} selamat makan`);
//   };

//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`helo ${this.nama} selamat main`);
//   };
//   return mahasiswa;
// }

// let mhs = mahasiswa("eser", 10);

//3. object constructor
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`helo ${this.nama} selamat makan`);
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`helo ${this.nama} selamat makan`);
  };
}

let mhs = new Mahasiswa("eser", 10);
