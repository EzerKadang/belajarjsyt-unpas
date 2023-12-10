var penumpang = [`eser`, `kadang`];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // Jika kursi angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang diawal array
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    // telusuri seluruh kursi penumpang dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // tambah penumpang dikursi tersebut
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
        // jika nama penumpang sama
      } else if (penumpang[i] == namaPenumpang) {
        console.log(`${namaPenumpang} sudah ada dalam angkot`);
        return penumpang;
        // jika kursi penumpang full
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang == 0) {
    console.log(`penumpang tidak ada`);
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(`nama penumpang tidak ada`);
        return penumpang;
      }
    }
  }
};
