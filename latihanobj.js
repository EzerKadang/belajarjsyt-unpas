//membuat obj angkot
function DataAngkot(NamaSopir, Trayek, Penumpang, Kas) {
  this.NamaSopir = NamaSopir;
  this.Trayek = Trayek;
  this.Penumpang = Penumpang;
  this.Kas = Kas;

  this.PenumpangNaik = function (namapenumpang) {
    this.Penumpang.push(namapenumpang);
    return this.Penumpang;
  };

  this.PenumpangTurun = function (namapenumpang, bayar) {
    if (this.Penumpang.length == 0) {
      alert(`angkot masih kosong bang`);
      return false;
    }

    for (var i = 0; i < this.Penumpang.length; i++) {
      if (this.Penumpang[i] == namapenumpang) {
        this.Penumpang[i] = undefined;
        this.Kas += bayar;
        return this.Penumpang;
      }
    }
  };
}

var Akt1 = new DataAngkot("ezerkadang", ["poroskabo", "teluklingga"], [], 0);
