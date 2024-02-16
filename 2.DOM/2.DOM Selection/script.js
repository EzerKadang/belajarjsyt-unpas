//! DOM Selection

//? document.getElementById; -> Element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#c1c1";
judul.innerHTML = "eser kadang";

//? document.getElementsByTagName; -> HTMLCollections
const p = document.getElementsByTagName("p");
// p[0].style.backgroundColor = "lightblue";
// p[1].style.backgroundColor = "lightblue";
// p[2].style.backgroundColor = "lightblue";
// p[3].style.backgroundColor = "lightblue";

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

//? HTMLCollections yang berisi satu element tetap harus dideklarasikan indexnya karena dalam bentuk array
const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "70px";

// document.getElementsByClassName(); -> HTMLCollections
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "ini diubah dari JS";
