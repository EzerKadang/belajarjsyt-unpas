//! Example 1
// let mahasiswa = {
//   nama: `eser`,
//   lulus: true,
//   ipSemester: [2.9, 3.1, 3.25, 4.0, 3.2],
//   ipKomulatif: function () {
//     let total = 0;
//     let ips = this.ipSemester;
//     for (let i = 0; i < ips.length; i++) {
//       total += ips[i];
//     }
//     return total / ips.length;
//   },
// };

// console.log(mahasiswa.ipKomulatif());

// //! membuat object
// var mhs = {
//   nama: `eser`,
//   lulus: true,
//   ipSemester: [2.9, 3.1, 3.25, 4.0, 3.2],
//   alamat: {
//     jalan: `poros kabo`,
//     gang: `sekawan`,
//     no: 55,
//   },
// };

// //! membuat object secara litaral
// var mahasiswa = {
//   nama: "eser",
//   nrp: "1234555",
//   email: "ezer@gmail.com",
//   jurusan: "informatika",
// };

// //! object declaration
// function functionmhs(nama, nrp, email, jurusan) {
//   var mhs = {};
//   mhs.nama = nama;
//   mhs.nrp = nrp;
//   mhs.email = email;
//   mhs.jurusan = jurusan;
//   return mhs;
// }

// var mhs2 = functionmhs("ellys", "1234555", "ellys@gmail.com", "bisnis");
// var mhs3 = functionmhs("eser", "123123123", "eser@gmail.com", "informatika");

// //! constructor
// function Mhs(nama, nrp, email, jurusan) {
//   this.nama = nama;
//   this.nrp = nrp;
//   this.email = email;
//   this.jurusan = jurusan;
// }

// var mhs4 = new Mhs("tison", "123123", "tison@gmail.com", "industri");

//! object this
// ? object function declaration
function halo() {
  console.log(this);
  console.log("halo");
}

halo();
//* mengembalikan object global

// ? object literal
var obj = {};
obj.halo = function () {
  console.log(this);
  console.log("halo");
};
//* mengembalikan object yang bersangkutan

obj.halo();

function Halo() {
  console.log(this);
  console.log("halo");
}

new Halo();
//* Mengembalikan object yang baru dibuat
