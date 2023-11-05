
// function cetakAngka(n){
//     if(n === 0) return
//     console.log(n)
//     cetakAngka(n-1)
// }

// cetakAngka (5)

//___________________________________________________

Looping
function faktorial(n) {
    var hasil = 1
    for (var i = n; i > 0; i--){
        hasil *= i
    }
    return hasil
}

console.log(faktorial(5))

// rekursif
function faktorial (n){
    if(n === 0) return 1
    return n * faktorial(n-1)
}

console.log(faktorial(3))