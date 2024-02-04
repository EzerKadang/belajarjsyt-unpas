// let tanya = true;

// while (tanya) {
//   //! 1.menangkap pilihan player
//   let p1 = prompt(`pilih : gajah, semut, orang`);

//   //! 2.menangkap pilihan dari computer
//   //   dengan membangkitkan bilangan random
//   let comp = Math.floor(Math.random() * 3 + 1);

//   if (comp == 1) {
//     comp = "gajah";
//   } else if (comp == 2) {
//     comp = "semut";
//   } else {
//     comp = "orang";
//   }

//   console.log(comp);
//   //! 3.menentukan rules
//   let hasil = "";

//? its my coding
// if (p1 == comp) {
//   hasil = "seri bang!";
// } else if (p1 == "gajah") {
//   if (comp == "orang") {
//     hasil = "kamu menang bang";
//   } else if (comp == "semut") {
//     hasil = "kamu kalah bang";
//   }
// } else if (p1 == "orang") {
//   if (comp == "gajah") {
//     hasil = "kamu kalah bang";
//   } else if (comp == "semut") {
//     hasil = "kamu menang";
//   }
// } else if (p1 == "semut") {
//   if (comp == "gajah") {
//     hasil = "kamu kalah bang";
//   } else if (comp == "orang") {
//     hasil = "kamu kalah";
//   }
// } else {
//   hasil = "hasil yang dimasukan salah";
// }

//? sandhika conding
// if (p1 == comp) {
//   hasil = "seri bang!";
// } else if (p1 == "gajah") {
//   if (comp == "orang") {
//     hasil = "Menang";
//   } else {
//     hasil = "kalah";
//   }
// } else if (p1 == "orang") {
//   if (comp == "gajah") {
//     hasil = "Kalah";
//   } else {
//     hasil = "Menang";
//   }
// } else if ((p1 = "semut")) {
//   if (comp == "gajah") {
//     hasil = "Menang";
//   } else {
//     hasil = "Kalah";
//   }
// } else {
//   hasil = "pilihan yang di masukan salah";
// }

//? using ternary
//   if (p1 == comp) {
//     hasil = "seri bang";
//   } else if (p1 == "gajah") {
//     hasil = comp == "orang" ? "Menang" : "Kalah";
//   } else if (p1 == "orang") {
//     hasil = comp == "gajah" ? "kalah" : "Menang";
//   } else if (p1 == "semut") {
//     hasil = comp == "gaja" ? "Menang" : "Kalah";
//   } else {
//     hasil = "yang kamu masukan salah";
//   }
//   //! 4.menampilkan hasilnya
//   alert(hasil);

//   tanya = confirm("lagi");
// }

// alert("terima kasih sudah bermain");

//! Review

let tanya = true;

while (tanya) {
  // pilihan user
  let p = prompt(`silahkan pilih : Gunting, Batu, Kertas`);

  // pilihan comp
  let comp = Math.floor(Math.random() * 3 + 1);

  if (comp == 3) {
    comp = `Gunting`;
  } else if (comp == 2) {
    comp = `Batu`;
  } else {
    comp = `kertas`;
  }

  // rules
  let hasil = ``;

  if (p == comp) {
    hasil = `hasilnya seri bang!`;
  } else if (p == `Gunting`) {
    if (comp == `Batu`) {
      hasil = `Yah Kmu Payah`;
    } else {
      hasil = `yee kmu menang`;
    }
  } else if (p == `Batu`) {
    if (comp == `Gunting`) {
      hasil = `yee kmu menang`;
    } else {
      hasil = `Yah Kmu Payah`;
    }
  } else if (p == `kertas`) {
    if (comp == `Gunting`) {
      hasil = `Yah Kmu Payah`;
    } else {
      hasil = `yee kmu menang`;
    }
  } else {
    hasil = `hasil yang kmu masukan salah`;
  }

  alert(`kamu pilih ${p} dan computer pilih ${comp}\n${hasil}`);

  tanya = confirm(`mau main lagi!`);
}

alert(`terimakasih sudah bermain`);
