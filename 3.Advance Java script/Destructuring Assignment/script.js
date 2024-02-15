//! destucting array
// const perkenalan = ["hallo", "saya", "eliezer"];

// const [salam, satu, nama] = perkenalan;

//* skiping items
// const [salam, , nama] = perkenalan;
// console.log(salam);
// console.log(nama);

//* swaping items
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//* return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(b);

//* rest parameter
// const [...values] = [1, 2, 3, 4, 5];
// console.log(values);

//! Distructering Object

// ({ nama, umur } = { nama: "eser", umur: 25 });
// console.log(nama, umur);

//* Assign ke varible baru
// const mhs = { nama: "eser", umur: 25 };
// const { nama: n, umur: u } = mhs;
// console.log(n, u);

//* memberikan nilai default
// const mhs = {
//   nama: "eser",
//   umur: 25,
// };

// const { nama: n, umur: u, email = `eserkadang@gmail.com` } = mhs;
// console.log(email);

//* mengambil field pada object, setelah dikirim sabagai parameter untuk function
// const mhs = {
//   id: 1111,
//   nama: "eser",
//   umur: 25,
//   email: "eserkadang@mail.com",
// };

// function getIdMhs({ id }) {
//   return id;
// }

// console.log(getIdMhs(mhs));

// ________________________________________________________________________________________________________________

//! distructering pada function

//* using array
// function penjumlahanPerkalian(a, b) {
//   return [a + b, a * b];
// }

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

//* using object
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { bagi, tambah, kurang, kali } = kalkulasi(2, 3);
// console.log(bagi);
// console.log(kurang);
// console.log(kali);

//! distructering useng function argument
const mhs = {
  nama: `eser`,
  umur: 25,
  email: `eserkadang@gmail.com`,
};

// function cetakMhs(mhs1) {
//   return `hallo nama saya ${mhs1.nama}, saya berumur ${mhs1.umur} tahun.`;
// }

// console.log(cetakMhs(mhs));

function cetakMhs(mhs1) {
  return `hallo nama saya ${nama}, saya berumur ${umur} tahun.`;
}
