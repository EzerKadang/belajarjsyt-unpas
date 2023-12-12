function Mhs(nama, energy) {
  this.nama = nama;
  this.energy = energy;
}

Mhs.prototype.makan = function (porsi) {
  this.energy += porsi;
  return `hallo, ${this.nama} selamat makan`;
};

Mhs.prototype.main = function (jam) {
  this.energy -= jam;
  return `hallo, ${this.nama} selamat makan`;
};

Mhs.prototype.tidur = function (jam) {
  this.energy += jam * 2;
  return `hallo, ${this.nama} selamat makan`;
};

let eser = new Mhs(`eser`, 20);

//! ver class
// class Mhs {
//   constructor(nama, energy) {
//     this.nama = nama;
//     this.energy = energy;
//   }

//   makan(porsi) {
//     this.energy += porsi;
//     return `hallo, ${this.nama} selamat makan`;
//   }

//   main(jam) {
//     this.energy -= jam;
//     return `hallo, ${this.nama} selamat makan`;
//   }

//   tidur(jam) {
//     this.energy += jam * 2;
//     return `hallo, ${this.nama} selamat makan`;
//   }
// }

// let eser = new Mhs(`eser`, 20);
