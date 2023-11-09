//latihan part 1

// var penumpang = ["ezer", undefined, "erin"];

// function tambahPenumpang(namaPenumpang, penumpang) {
//   if (penumpang.length == 0) {
//     penumpang.push(namaPenumpang);
//     return penumpang;
//   } else {
//     for (var i = 0; i < penumpang.length; i++) {
//       if (penumpang[i] == undefined) {
//         penumpang[i] = namaPenumpang;
//         return penumpang;
//       } else if (penumpang[i] == namaPenumpang) {
//         console.log(`nama ${namaPenumpang} sudah ada`);
//         return penumpang;
//       } else if (i == penumpang.length - 1) {
//         penumpang.push(namaPenumpang);
//         return penumpang;
//       }
//     }
//   }
// }

//latihan part 2
var Penumpang = ["ezer", "kida", "ellys"];

function hapusPenumpang(namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log(`angkot kosong`);
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length) {
        console.log(`nama ${namaPenumpang} penumpang tidak ada`);
        return penumpang;
      }
    }
  }
}
