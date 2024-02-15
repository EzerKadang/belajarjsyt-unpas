// ! callback
// * synchronus callback
// function hallo(nama) {
//   alert(`hallo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt(`masukan nama anda`);
//   callback(nama);
// }

// tampilkanPesan(hallo);

// ? or using arrow function
// function tampilkanPesan(callback) {
//   const nama = prompt(`masukan nama anda`);
//   callback(nama);
// }

// tampilkanPesan((nama) => alert(`hallo, ${nama}`));

// * assynchronus callback
// const mhs = [
//   {
//     nama: "eser",
//     nrp: "080022333",
//     email: "eser@gmail.com",
//     jurusan: "informatika",
//     idDosenwali: 1,
//   },
//   {
//     nama: "isnyu",
//     nrp: "080022334",
//     email: "isnyu@gmail.com",
//     jurusan: "theology",
//     idDosenwali: 2,
//   },
//   {
//     nama: "lleys",
//     nrp: "080022334",
//     email: "isnyu@gmail.com",
//     jurusan: "bussines",
//     idDosenwali: 3,
//   },
// ];

// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };
//   xhr.open("get", url);
//   xhr.send();
// }

// console.log("mulai");
// getDataMahasiswa(
//   "mahasiswa.json",
//   (results) => {
//     const mhs = JSON.parse(results);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   () => {}
// );
// console.log("selesai");

//* using JQuery
// $.ajax({
//   URL: "mahasiswa.json",
//   success: (mhs) => {
//     console.log(mhs);
//   },
//   error: () => {},
// });

//! Review materi
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("get", url);
//   xhr.send();
// }

// getDataMahasiswa(
//   "mahasiswa.json",
//   (results) => {
//     const mhs = JSON.parse(results);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   () => {}
// );

// Jquery

// console.log(`mulai`);
// $.ajax({
//   url: `mahasiswa.json`,
//   success: (results) => {
//     results.forEach((m) => console.log(m.nama));
//   },
//   error: (e) => {
//     console.log(e.responseText);
//   },
// });
// console.log(`selesai`);
