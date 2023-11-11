//cara untuk membuat object

//1. object literal
let mahasiswa = {
  nama: "ezer",
  energi: 10,
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`halo ${this.nama} selamat makan`);
  },
};

//2. object function declaration

function mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
}
