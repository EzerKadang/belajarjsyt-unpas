// !example 1
// 5 *

// for (let i = 1; i <= 5; i++) {
//   console.log(`*`);
// }

// !Example 2
// ******

// let s = ``;
// for (let i = 0; i <= 5; i++) {
//   s += `*`;
// }

// console.log(s);

// !example 3
// ******
// ******
// ******
// ******
// ******
// ******

// let s = ``;
// for (let i = 0; i <= 5; i++) {
//   for (let o = 0; o <= 5; o++) {
//     s += `*`;
//   }
//   s += `\n`;
// }

// console.log(s);

// !example 4
// *
// **
// ***
// ****

// let s = ``;
// for (let i = 0; i < 4; i++) {
//   for (let o = 0; o <= i; o++) {
//     s += `*`;
//   }
//   s += `\n`;
// }

// console.log(s);

// !example 5
// ****
// ***
// **
// *

// let s = ``;
// for (let i = 4; i > 0; i--) {
//   for (let o = 0; o < i; o++) {
//     s += `*`;
//   }
//   s += `\n`;
// }

// console.log(s);

// !example 5
// ********
//  ******
//   ****
//    **
//    *

// let n = 2; // you can take input from prompt or change the value
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = n; j > i; j--) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }

// console.log(string);

// review materi

let s = ``;

for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    s += `*`;
  }
  s += `\n`;
}

console.log(s);
