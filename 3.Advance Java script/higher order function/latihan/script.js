// ambil semua elemen video
const elmVideo = Array.from(document.querySelectorAll(`[data-duration]`));
// pilih yang hanya JS lanjutan
let jsLanjutan = elmVideo
  .filter((video) => video.textContent.includes(`JAVASCRIPT LANJUTAN`))

  // ambil dirasi masing-masing video
  .map((item) => item.dataset.duration)

  // ubah durasi menjadi float & ubah menjadi menit jadi detik
  .map((waktu) => {
    // change from 10:30 -> array [10, 30]
    const parts = waktu.split(`:`).map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  // jumlah kan semua detik
  .reduce((total, detik) => total + detik);
// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjutan / 3600);
jsLanjutan = jsLanjutan - jam * 3600;
const menit = Math.floor(jsLanjutan / 60);
const detik = jsLanjutan - menit * 60;

// simpan di dom html
//* total video
const jumlahVideo = elmVideo.filter((video) =>
  video.textContent.includes(`JAVASCRIPT LANJUTAN`)
).length;

const pjumlahVideo = document.querySelector(`.jumlah-video`);
pjumlahVideo.textContent = `${jumlahVideo} videos`;

//* jam
const pDurasi = document.querySelector(`.total-durasi`);
pDurasi.textContent = `${jam}:${menit}:${detik}`;

console.log(detik);
