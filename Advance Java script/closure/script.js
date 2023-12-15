//! lexical scope
function init() {
  let nama = `eser`; //lokal variable
  function tampilNama() {
    // inner function (closure)
    console.log(nama); // akses ke parent variable
  }
  tampilNama();
}
init();
