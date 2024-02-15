// alert(`tebak angka dari 1-10\nkmu punya kesempatan 3`);
// let comp = Math.floor(Math.random() * 10 + 1);

// let hasil = ``;

// for (let i = 3; i > 1; i--) {
//   let p = prompt(`masukan angka!`);
//   i - 1;
//   if (p == comp) {
//     hasil = `benar angka yang dicari : ${comp}`;
//     j = i - 1;
//   } else if (p < comp) {
//     if (j == 0) {
//       alert(`anda gagal angka terlalu rendah`);
//     } else {
//       alert(`ayo coba lagi masih ada kesempatan : ${i}`);
//     }
//   } else if (p > comp) {
//     if (j == 0) {
//       alert(`anda gagal angka terlalu tinggi`);
//     } else {
//       alert(`ayo coba lagi masih ada kesempatan : ${i}`);
//     }
//   } else {
//     hasil = `angka yang kmu masukkan salah`;
//   }
// }

// alert(hasil);

//! Punya orang

// menagkap pilihan player
var p = prompt("Pilih : 1 - 10 ");

//menangkap pilihan komputer
//membangkitkan bilangan random
var comp = Math.floor(Math.random() * 10) + 1;

var hasil = " ";
//menentukan rules

for (i = 3; i >= 1; i--) {
  if (p == comp) {
    hasil = "BENAR";
  } else if (p > comp) {
    hasil = "TERLALU BESAR";
  } else if (p < comp) {
    hasil = "TERLALU RENDAH";
  } else {
    hasil = "anda salah memasukkan angka";
  }
  alert("jawaban : " + hasil);

  for (j = 1; j >= 1; j--) {
    p = Number(prompt("kamu punya " + i + " lagi"));
  }
}
//tampilkan hasil

alert(
  "Kamu memilih : " +
    p +
    " dan komputer memilih : " +
    comp +
    "\n maka hasilnya : " +
    hasil
);
