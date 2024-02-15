//! template literals
// const nama = "eser";
// const umur = 25;
// const email = "eserk@gmail.com";

// console.log(`hallo, nama ${nama}, saya ${umur}.
// email saya ${email}`);

//! embedded expression
// console.log(`${2 - 1}`);
// console.log(`${alert(`hallo`)}`);
// const x = 41;
// console.log(`${x % 2 == 0 ? `genap` : `ganjil`}`);

//! HTML fragment
// const mhs = {
//   Nama: `eser`,
//   umur: 25,
//   nrp: `123123123`,
//   email: `eser@gmail.com`,
// };

// const el = `<div class="mhs">
// <h2> ${mhs.Nama}</h2>
// <span class="nrp"> ${mhs.nrp}</span>
// </div>`;

//! Looping
// const mhs = [
//   {
//     nama: `eser`,
//     email: `eser@gmail.com`,
//   },
//   {
//     nama: `ellys`,
//     email: `ellys@gmail.com`,
//   },
//   {
//     nama: `nusyi`,
//     email: `nusyi@gmail.com`,
//   },
// ];

// const el = `<div class="mhs">
// ${mhs
//   .map(
//     (m) =>
//       `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//   </ul>`
//   )
//   .join("")}
// </div>`;

//! conditional
// ternary
// const lagu = {
//   judul: `tetap dalam jiwa`,
//   penyanyi: `isyana sarasvati`,
//   feat: `test`,
// };

// const el = `<div class="lagu">
// <ul>
// <li>${lagu.penyanyi}</li>
// <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ``}</li>
// </ul>
// </div>`;

//! Nested
// html fragmen bersarang
const mhs = {
  nama: `eser`,
  semester: 5,
  mataKuliah: [
    "jaringan",
    "statistik",
    "analisis dan rancangan sistem informasi",
    "pemrograman sistem informasi",
  ],
};

function cetakMatakuliah(mataKuliah) {
  return `
    <ol>
    ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>
    `;
}

const el = `<div class = 'mhs'>
<h2>${mhs.nama}</h2>
<span class = 'semester'>${mhs.semester}</span>
<h4>semester:</h4>
${cetakMatakuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;
