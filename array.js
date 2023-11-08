// 1.menambahkan isi array

//cara 1
// var arr = ["a", 1, true];
// console.log(arr[2]);

// cara 2
// var arr2 = [];
// arr2[0] = 1;
// arr2[1] = "a";
// arr2[2] = true;

// console.log(arr2);

// 2. menghapus isi array
// var arr = ["a", 1, true];

// arr[1] = undefined;

// console.log(arr);

// 3.Menampilkan isi array
// var arr = ["a", 1, true];

// for (var i = 0; i < arr.length; i++) {
//   console.log(`object ke - ${i + 1} : ${arr[i]}`);
// }

// 4.method pada array

//joint
// var arr = ["eliezer", "dan", "ellys"];
// console.log(arr.join(" "));

// push & pop
// var arr = ["eliezer", "dan", "ellys"];
// arr.push("cinta", "abadi"); //menambahkan array terakhir
// arr.pop(); //menghapus array terakhir
// arr.pop();

// console.log(arr.join(" "));

// unshift & shift
// var arr = ["eliezer", "dan", "ellys"];
// arr.unshift("pernikahan", "mempelai"); //menambahkan array awal
// arr.shift(); //menghapus array awal

// console.log(arr.join(" "));

//splice & slice
// var arr = ["eliezer", "dan", "ellys", "bersama", "selamanya"];
// Contoh : splice (index yang mau ditambal, index yang mau dihapus, elemen baru) menambahkan elemen baru
// arr.splice(1, 0, "Butu", "KS");
// arr.splice(5, 0, "manurung");

// contoh : slice (nilaiawal, nilaiakhir) menampilkan elemen yang dipilih
// var arr2 = arr.slice(3, 5);
// console.log(arr2.join(" "));

// 5.forEach

// tidak dapat mengembalikan array
// contoh : forEach(function(memanggil array, memanggil index, memanggil string array))
// var angka = [1, 2, 3, 4];
// var nama = ["sandi", "galih", "siska"];

// angka.forEach(function (e) {
//   console.log(e);
// });

// nama.forEach(function (m, n, e) {
//   console.log(`mahasiswa ke - ${n} adalah ${m} & ${e}`);
// });

// 6.map

// dapat mengembalikan array
// var angka = [1, 2, 3, 4, 5, 6, 7];

// var angka2 = angka.map(function (e) {
//   console.log(e * 2);
// });

// console.log(angka2);

// 7.sort

//mengurutkan angka
// var angka = [1, 3, 2, 4, 6, 5, 7, 10, 20];
// angka.sort(function (a, b) {
//   return a - b;
// });

// console.log(angka.join(" "));

// 8.filter
// var angka = [1, 3, 2, 4, 6, 5, 7, 10, 20];
// var angka2 = angka.filter(function (x) {
//   return x < 5;
// });

// console.log(angka2);

// 9.find
// var angka = [1, 3, 2, 4, 6, 5, 7, 10, 20];
// var angka2 = angka.find(function (x) {
//   return x < 5;
// });

// console.log(angka2);
