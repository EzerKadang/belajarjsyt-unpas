var tanya = true;

while (tanya) {
  //menangkap pilihan user
  var u = prompt(`masukan pilhan kamu \n (gajah, semut, orang)`);

  //membangkitkan pilihan random
  var comp = Math.random();

  //menentukan pilihan computer
  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  //menentukan rules
  var hasil = "";
  if (u == comp) {
    hasil = "seri";
  } else if (u == "gajah") {
    //   if (comp == 'orang') {
    //     hasil = "menang";
    //   } else {
    //     hasil = "kalah";
    //   }
    hasil = comp == "orang" ? "menang" : "kalah"; //metode ternary
  } else if (u == "orang") {
    hasil = comp == "gajah" ? "kalah" : "menang"; //metode ternary
  } else if (u == "semut") {
    hasil = comp == "orang" ? "kalah" : "menang";
  } else {
    hasil = "memasukan pilihan yang salah";
  }

  // menampikan hasil

  alert(
    `kamu memilih : ${u} dan komputer memilih ${comp} \n maka hasilnya : kamu ${hasil}`
  );

  tanya = confirm(`apakah mau dicoba lagi`);
}

alert(`terima gaji`);
