//! Contoh pembuatan kubus
// function luasKubus(a, b) {
//   let sisi1, sisi2, total;

//   sisi1 = a ** 3;
//   sisi2 = b ** 3;
//   total = sisi1 + sisi2;

//   return total;
// }

// console.log(`luas nya adalah ${luasKubus(4, 3)}`);

//! Contoh penggunaan refactoring/ penyederhanaan programing
function luasKubus(a, b) {
  return a ** 3 + b ** 3;
}

console.log(`luas nya adalah ${luasKubus(4, 3)}`);
