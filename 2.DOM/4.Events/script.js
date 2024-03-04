//! add event handler
//? inline HTML attribute
// const p3 = document.querySelector(".p3");

// function ubahWarnaP3() {
//   p3.style.backgroundColor = "lightblue";
// }

//? elemet method
// const p2 = document.querySelector(".p2");

// function ubahWarnaP2() {
//   p2.style.backgroundColor = "lightblue";
// }
// p2.onclick = ubahWarnaP2;

//! addEventListener();
// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", function () {
//   const libaru = document.createElement("li");
//   const teksLi = document.createTextNode("item 4");

//   libaru.appendChild(teksLi);

//   const ul = document.querySelector("ul");
//   ul.appendChild(libaru);
// });

//! perbedaan event hanler dan eventlistener
const p3 = document.querySelector(".p3");

//? event handler akan menimpa fungsi sebelumnya
// p3.onclick = function () {
//   p3.style.backgroundColor = "lightblue";
// };
// p3.onclick = function () {
//   p3.style.color = "red";
// };

//? eventListener akan dijalankan keduanya
p3.addEventListener("click", function () {
  p3.style.backgroundColor = "lightblue";
});

p3.addEventListener("click", function () {
  p3.style.color = "red";
});
