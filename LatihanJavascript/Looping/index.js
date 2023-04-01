for(let i = 0; i < 20; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

let angka = 0;
while(angka < 10){
    console.log(angka);
    angka++;
}

const dataMahasiswa = ['jono','joni','jeni','joko','joki']

for(let i = 1; i < dataMahasiswa.length; i++){
    console.log(i, dataMahasiswa[i]);
}

const abjad = ['a','b','c','d','e','f','g','h'];

for(let k = 1; k < 5; k++){
    console.log(' ');
    console.log(`Bagian data ke-${k}`);
    console.log(' ');

    for(let j = 1; j < abjad.length; j++){
        console.log(`Isi datanya : ${abjad[j]}`);
    }
}
const students = [
    ['adi','ima','ating','atung'],
    ['dika','diki','cika','ciki'],
    ['jiki','joki','cupa','cupi'],
];

for(let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(`Kelas Pertama ${i + 1}`);
        for(let j = 0; j < student.length; j++){
            console.log(`Di isi Oleh : ${student[j]}`);
        }
}


// Looping menggunakan for Of (Buat Array)
const fruits = ['apple','jeruk','banana']

for(let fruit of fruits){
    console.log(fruit);
}

for(let student of students){
    for(let mahasiswa of student){
        console.log(mahasiswa);
    }
}

// Looping menggunakan for In (Object)

const Mahasiswa = {
    Rangga : 20,
    Dewi : 23,
    Liyana : 25,
    Salsa : 29,
    Salma : 30
}
for(let dataMhs in Mahasiswa) {
    console.log(`${dataMhs} dengan nilai ${Mahasiswa[dataMhs]}`);
}

let total = 0;
let scores = Object.values(Mahasiswa);
for(let score in scores ){
    total += score;
}
console.log(Math.floor(total / scores.length));


// const pass = '123456';

// let guess = prompt('Masukan Password');
// while (guess !== pass){
//     guess = prompt('Masukan Password');
// }while(!maximum){}

// alert('Anda Berhasil Masuk')


let maximum = parseInt(prompt('Masukan nilai maksimal'));
while(!maximum){
    maximum = parseInt(prompt('Masukan nilai maksimal'));
}

let guess = parseInt(prompt('Isi tebakan pertama kamu'));
let attempt = 1;


const targeNum = Math.floor(Math.random() * maximum) + 1;
console.log(targeNum);

while(parseInt(guess) !== targeNum){
    attempt++;
    if(guess > targeNum){
        guess = prompt('Terlalu tinggi coba tebak lagi');
    }else{
        guess = prompt('Terlalu rendah tebak lagi');
    }
}

alert(`Selamat kamu menebak dengan benar dengan melakukan ${attempt} percobaan`);