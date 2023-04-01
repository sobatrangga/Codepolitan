//Default value pada function
function lemparDadu(sisi = 6){
    return Math.floor(Math.random()* sisi) + 1;
}

//Spread mengubah array / object menjadi deret
const angka = [1,2,3,4,5,6,7,8,9,10,11,12,13]
let nilaiMaximum = Math.max(...angka); // (....)
console.log(nilaiMaximum)

// Merge Array menggunakan Spread Operator
const title = ['attack on titan', 'naruton', 'boruto', 'one piece','one putch man']
const years = [2007,2008,2009,2010,2011,2012]

const campuran = [...title, 0, 'rangga'];
const gabungArray = [...title,...years]  //penempatan data sangat berpengaruh

console.log(campuran);
console.log(gabungArray);

// Merge Object menggunakan Spread Operator
const user = {
    nama : 'rangga',
    id : 1234,
};

const credentials = {
    token : 'dwkmqkdmwqkmkd2341',
    email : 'user@example.com'
}

const userBaru = {...user, password : 'password'};
const gabungObject = {...user,...credentials};

console.log(userBaru);
console.log(gabungObject);

// Rest param menggunakan spread Operator

const sumAll = (...num)=>{
    return num.reduce((total, el) => total + el);
}

console.log(sumAll(1,2,3,4,5,6));

const pemenang = (gold,silver,bronze, ...sisa) =>{
    console.log(`Mendali emas diraih ${gold}`)
    console.log(`Mendali silver diraih ${silver}`)
    console.log(`Mendali bronze diraih ${bronze}`)
    console.log(`Peserta lainnya : ${sisa}`)
};

console.log(pemenang(...title));

// Destructing menggunakan spread Operator
const [gold, silver,brozen, ...perseta] = title;
console.log(gold);
console.log(silver);
console.log(brozen);
console.log(perseta);

const {nama : username ,id , phone = '087826357781'} = user;

console.log(username);
console.log(phone);

const Mahasiswa = {
    name : 'Rangga',
    email : 'rangga@gmail.com',
    role : 'admin'
}

const userRole = ({name,role}) =>{
    return `${name} - ${role}`;
}

console.log(userRole(Mahasiswa))

const animes = [
    {
    title: 'Naruto',
    rating: 80,
    year: 2008
    },
    {
    title: 'Baruto',
    rating: 72,
    year: 2014
    },
    {
    title: 'Attack On Titan',
    rating: 85,
    year: 2011
    },
]

const anime = animes.map(({title,year,rating}) =>{
    return `${title} - (${year}) ratings: ${rating}`;
});

for(let anime in animes){
        console.log(`Judul Film ${animes[anime].title} dengan Tahun Tayang (${animes[anime].year}) Mendapatkan ${animes[anime].rating}/100`)
}