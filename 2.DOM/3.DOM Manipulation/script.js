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
const p2 = document.querySelector(".p2");
p2.classList.add("label");
// p2.classList.remove("p2");
// p2.classList.toggle("p2");
// p2.classList.contains("p2");
p2.classList.replace("p2", "eser");
