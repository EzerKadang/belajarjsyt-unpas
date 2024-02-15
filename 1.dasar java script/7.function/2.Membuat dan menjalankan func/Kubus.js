function luasKubus(a, b) {
  let sisi1, sisi2, total;

  sisi1 = a ** 3;
  sisi2 = b ** 3;
  total = sisi1 + sisi2;

  return total;
}

console.log(`luas nya adalah ${luasKubus(8, 3)}`);
