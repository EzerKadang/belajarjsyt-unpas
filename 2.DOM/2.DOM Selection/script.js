//! DOM Selection

//? document.getElementById; -> Element
// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "#c1c1";
// judul.innerHTML = "eser kadang";

//? document.getElementsByTagName; -> HTMLCollections
// const p = document.getElementsByTagName("p");
// p[0].style.backgroundColor = "lightblue";
// p[1].style.backgroundColor = "lightblue";
// p[2].style.backgroundColor = "lightblue";
// p[3].style.backgroundColor = "lightblue";

// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }

//? HTMLCollections yang berisi satu element tetap harus dideklarasikan indexnya karena dalam bentuk array
// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "70px";

// document.getElementsByClassName(); -> HTMLCollections
// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = "ini diubah dari JS";

//? document.querySelector(); -> element
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "40px";

// const li2 = document.querySelector("#b ul li:nth-child(2)");
// li2.style.backgroundColor = "orange";
// li2.style.color = "white";

//? document.querySelectorAll(); -> nodelist
// const p1 = document.querySelectorAll("p");

// for (let i = 0; i < p1.length; i++) {
//   p1[i].innerHTML = "diubah dari Java";
// }

// const sectionB = document.getElementById("b");
// const p4 = sectionB.querySelector("p");
// p4.style.backgroundColor = "orange";
