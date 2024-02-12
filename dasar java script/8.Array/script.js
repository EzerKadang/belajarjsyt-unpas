//! manipulasi array

//? 1.Menambah isi array

// let arr = [];
// arr[0] = `eser`;
// arr[1] = `kadang`;
// arr[2] = `ellyz`;
// arr[4] = `test`;

// console.log(arr);

//? 2.Menghapus isi array
// let arr = [`eser`, `kadang`, `ellyz`, `test`];
// arr[1] = undefined;
// arr[2] = undefined;

// console.log(arr);

//? 3.Menampilkan isi array
// let arr = [`eser`, `kadang`, `ellyz`, `test`, `test2`];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//! method array
//? 1. joint (menggabungkan)
// let arr = [`eser`, `kadang`, `ell`, `test`, `test2`];

// console.log(arr.join(` `));

//? 2. push menambah & pop menghapus (akhir baris)
// let arr = [`eser`, `kadang`, `test`, `test2`];
// arr.push(`test3`);
// arr.pop();
// arr.pop();
// console.log(arr.join(` `));

//? 3.unshift menambah & shift menghapus (awal baris)
// let arr = [`eser`, `kadang`, `ellyz`, `test`, `test2`];
// arr.unshift(`test1`, `test1.1`);
// arr.shift();
// console.log(arr.join(` `));

//? 4.splice (menambal)
// * EXAM : splace(indexawal, mau dihapus berapa, elembaru1, elembaru2, ...)
// let arr = [`eser`, `kadang`, `ellyz`, `test`, `test2`];
// arr.splice(0, 0, `testbaru1`);
// console.log(arr.join(` `));

//? 5.slice (memotong)
// * EXAM : slice(indexawal, indexakhir)
// let arr = [`eser`, `kadang`, `ellyz`, `test`, `test2`];
// let slice = arr.slice(1, 3);
// console.log(slice.join(` `));

//? 6.forEach (tidak mengembalikan nilai)
// let arr = [`eser`, `kadang`, `ellyz`, `test`, `test2`];

// arr.forEach(function (elm, ind) {
//   console.log(`mahasiswa ke - ${ind + 1} adalah ${elm}`);
// });

//? 7.map (mengembalikan nilai)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let arr2 = arr.map(function (e) {
//   return e * 2;
// });

// console.log(arr2.join(" "));

//? 7.sort
// let arr1 = [1, 3, 4, 10, 20, 2, 5, 6, 7, 8];
// console.log(arr1.join(" "));
// arr1.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr1.join(" "));

//? 7.filter (mengembalikan banyak nilai)
// let arr1 = [1, 3, 4, 10, 20, 2, 5, 6, 7, 8];
// var arr2 = arr1.filter(function (e) {
//   return e < 5;
// });
// console.log(arr2.join(" "));

//? 8.find (mengembalikan satu nilai)
// let arr1 = [1, 3, 4, 10, 20, 2, 5, 6, 7, 8];
// var arr2 = arr1.find(function (e) {
//   return e > 10;
// });
// console.log(arr2);
