// Tagged template
const nama = `elieser`;
const umur = 33;

// function coba(strings, ...values) {
//   //   let result = ``;
//   //   strings.forEach((str, i) => {
//   //     result += `${str}${values[i] || ``}`;
//   //   });
//   //   return result;

//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ``}`,
//     ``
//   );
// }

// const str = coba`hallo nama saya ${nama}, saya umur ${umur} tahun`;
// console.log(str);

// highlight
function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class = "hl">${values[i] || ``}</span>`,
    ``
  );
}

const str = highlight`hallo nama saya ${nama}, saya umur ${umur} tahun`;

document.body.innerHTML = str;
