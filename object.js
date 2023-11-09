// var mhs = {
//   nama: "eliezer",
//   umur: 25,
//   ips: [2.0, 3.0, 3.05, 2.8],
//   alamat: {
//     jalan: "Jl.Poros Kabo Gg.Sekawan NO.55",
//     Kota: "sangatta",
//     Provinsi: "Kalimantan timur",
//   },
// };

// membuat object

// object literal
// var mhs = {
//   nama: "ezer",
//   nrp: "04002202020",
//   email: "ezer@gmail.com",
//   jurusan: "tkj",
// };

// var mhs2 = {
//   nama: "ellys",
//   nrp: "04002202021",
//   email: "ellys@gmail.com",
//   jurusan: "tkj",
// };

// function declaration
// function buatObjectMahasiswa(nama, nrp, email, jurusan) {
//   var mhs = {};
//   mhs.nama = nama;
//   mhs.nrp = nrp;
//   mhs.email = email;
//   mhs.jurusan = jurusan;
//   return mhs;
// }

// var mhs2 = buatObjectMahasiswa(
//   "eliezer",
//   "102020101202",
//   "ezer@gmail.com",
//   "Tehnik Informatika"
// );

// // construcor

// function Mahasiswa(nama, nrp, email, jurusan) {
//   this.nama = nama;
//   this.nrp = nrp;
//   this.email = email;
//   this.jurusan = jurusan;
// }

// var mhs3 = new Mahasiswa(
//   "eliezer",
//   "123213092",
//   "ezer@gmail.com",
//   "tehnik informatika"
// );

// materi tentang this

// cara 1 - membuat object function declaration

// function halo() {
//   console.log(this);
//   console.log("halo");
// }

// this.halo();
// fungsi this di function declaration menembalikan nilai global

// cara 2 - membuat object literal

// var obj = { nama: "eliezer", umur: 21 };
// obj.halo = function () {
//   console.log(this);
//   console.log("halo");
// };

// obj.halo();
// fungsi this di object literal mengambalikan nilai yang bersangkutan

// cara 3 - object constructor

function Halo() {
  console.log(this);
  console.log("halo");
}

new Halo();

// fungsi this di object constructor mengembalikan nilai object yang baru dibuat
