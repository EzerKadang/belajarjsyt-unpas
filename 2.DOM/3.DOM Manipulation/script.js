//! Manipulation Element
//? element.innerHTML
// const judul = document.getElementById("judul");
// judul.innerHTML = "diubah";

// const sectionA = document.querySelector("#a");
// sectionA.innerHTML = "test";

//? element.style.<propertyCSS>
// const judul = document.querySelector("#judul");
// judul.style.color = "orange";

//? element.setAttribute()
// const judul = document.querySelector("#judul");
// judul.setAttribute("name", "eser");

//? element.classList
// const p2 = document.querySelector(".p2");
// p2.classList.add("label");
// p2.classList.remove("p2");
// p2.classList.toggle("p2");
// p2.classList.contains("p2");
// p2.classList.replace("p2", "eser");

//! Manipulation Node
//? Buat Element baru
//* document.createElement();
const pBaru = document.createElement("p");
//* document.createTextNode();
const teksPBaru = document.createTextNode("paragraf baru");
//? simpan tulisan ke elemen P
pBaru.appendChild(teksPBaru);
//* node.appendChild()
//? simpan PBaru di akhir section #a
const sectionA = document.querySelector("#a");
sectionA.appendChild(pBaru);

const li = document.createElement("li");
const teksLi = document.createTextNode("item 2.1");
li.appendChild(teksLi);

//* node.insertBefore
const ul = document.querySelector("#b ul");
const li2 = ul.querySelector("#b ul li:nth-child(2)");

ul.insertBefore(li, li2);

//* parentnode.removeChild();
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

//* parentnode.replaceChild();
const sectionB = document.getElementById("b");
const pReplace = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksH2 = document.createTextNode("Heading 2");
h2Baru.appendChild(teksH2);

sectionB.replaceChild(h2Baru, pReplace);

// yang diganti
pBaru.style.color = "orange";
li.style.color = "orange";
h2Baru.style.color = "orange";
