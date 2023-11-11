//execute context, hoisting & scope

// creation phase pada global context

// kemudian js akan mengecheck isi js yang memiliki var, let dll

// akan membuat nama var = undefined
// var nama = "eser";

// sama dengan nama function = fn ()

// yang diatas dinamakan hoisting

//execution phase
// console.log(nama);

// js mendefinisikan window sebagai global object
// js mendefinisikan this sebagai window/global object

// var nama2 = "eser";
// var umur = 22;

// function hello() {
//   return `nama saya adalah ${nama2} saya ${umur} tahun`;
// }

// console.log(hello());

// function membuat local execution context
// yang didalam terdapa creating phase & execution phase

// function dapat acces window juga dapat acces arguments
// didalam function terdapat hoisting

var nama = "eser";
var userIg = "@eserkadang";

function cetakURL(userIg) {
  var instagramURL = "http://instagram.com/";
  return instagramURL + userIg;
}

console.log(cetakURL(userIg));
