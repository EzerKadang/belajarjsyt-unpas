// membuat object angkot
// function Angkot(sopir, trayek, penumpang, kas) {
//   this.sopir = sopir;
//   this.trayek = trayek;
//   this.penumpang = penumpang;
//   this.kas = kas;

//   this.penumpangNaik = function (namaPenumpang) {
//     this.penumpang.push(namaPenumpang);
//     return this.penumpang;
//   };

//   this.penumpangTurun = function (namaPenumpang, bayar) {
//     if (this.penumpang.length == 0) {
//       console.log("penumpang masih kosong");
//       return false;
//     }
//     for (var i = 0; i < this.penumpang.length; i++) {
//       if (this.penumpang[i] == namaPenumpang) {
//         this.penumpang[i] = undefined;
//         this.kas += bayar;
//         return this.penumpang;
//       }
//     }
//   };
// }

// var angkot1 = new Angkot("eser", ["townhall", "sangattalama"], [], 0);

//! Rev latihan obj
function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length == 0) {
      console.log("penumpang masih kosong");
      return this.penumpang;
    }
    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

let angkot1 = new Angkot("eser", ["townhall", "sangattalama"], [], 0);

let angkot2 = new Angkot("toni", ["teluklingga", "sangattabaru"], [], 0);
