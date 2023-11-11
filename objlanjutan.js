//cara untuk membuat object

//1. object literal
// let mahasiswa = {
//   nama: "ezer",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`halo ${this.nama} selamat makan`);
//   },
// };

//2. object function declaration

// const func = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`hale ${this.nama} selamat makan`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`halo ${this.nama} selamat main`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(func);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let eser = mahasiswa("eser", 10);

//3. object constructor
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama} selamat makan`);
//   };
//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`halo ${this.nama} selamat main`);
//   };
// }

// let eser = new Mahasiswa("eser", 10);

//______________________________________________________________________

// 4. object prototype
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   console.log(`halo ${this.nama} selamat makan`);
// };

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `halo ${this.nama} selamat main`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `helo ${this.nama} selamat istirahat`;
// };

// let eser = new Mahasiswa(`eser`, 10);

// 5. object class constructor

class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `halo ${this.nama} selamat makan`;
  }

  main(jam) {
    this.energi -= jam;
    return `halo ${this.nama} selamat main`;
  }

  tidur(jam) {
    this.energi += jam * 2;
    return `helo ${this.nama} selamat istirahat`;
  }
}

let eser = new Mahasiswa(`eser`, 10);

// aaaa;
