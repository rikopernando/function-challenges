// tugas 1
console.log(`Tugas 1`)

var shoutOut = () => "Halo Function!"
console.log(shoutOut()) // Menampilkan "Halo Function!" di console
console.log()


// Tugas 2
console.log(`Tugas 2`)

var calculateMultiply = (num1, num2) => parseInt(num1) * parseInt(num2)
var hasilPerkalian = calculateMultiply(5,6)
console.log(hasilPerkalian)
console.log()

// Tugas 3
console.log(`Tugas 3`)

var processSentence = (name, age, addres, hobby) => "Nama saya " +name+ ", umur saya " +age+ " tahun, alamat saya di " +addres+ ", dan saya punya hobby yaitu " +hobby 

var name = 'Agus'
var age = 30
var addres = 'Jln. Malioboro, Yogjakarta'
var hobby = 'Gaming'

var fullSentence = processSentence(name, age, addres, hobby)
console.log(fullSentence)
