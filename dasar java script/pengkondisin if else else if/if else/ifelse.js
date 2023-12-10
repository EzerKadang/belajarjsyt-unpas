// !DOM IF
// if(konsdisi (jika kondsi bernlai true makan aksi akan dijalankan)) {
//     aksi
// }

// ? Example
// let angka = 1;

// if (angka === 1) {
//   alert("anda memasukan angka 1");
// }

// !DOM IF Else
// if(konsdisi (jika kondsi bernlai true makan aksi akan dijalankan)) {
//     aksi
// }else {
//  Aksi (Jika kondisi if tidak terpenuhi maka else akan dijalankan)
// }

// ? example 2 menjari bilangan genap dan ganjil
let angka = prompt(`masukan angka`);

if (angka % 2 == 0) {
  alert(`${angka} adalah bilangan genap`);
} else {
  alert(`${angka} adalah bilangan ganjil`);
}
