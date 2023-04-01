//ForEach Methods (Array)
const angka = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

const animes = [
    {
        title: 'Naruto',
        rating: 84,
        year: 2009
    },
    {
        title: 'One Piece',
        rating: 90,
        year: 2010
    },
    {
        title: 'Attack On Titan',
        rating: 95,
        year : 2011
    },
]

angka.forEach(function(n){
    if(n % 2 === 0){
        console.log(n)
    }
});


animes.forEach(function(anime){
    console.log(`${anime.title} - ${anime.rating}/100`);
});

//Map Methods (Array)
const angkaDouble = angka.map(function(double){
    return double * 2;
});

console.log(angkaDouble);

const animeList = animes.map(function(anime){
    return anime.title.toUpperCase();
});

console.log(animeList);

//Arrow Functions
const perpangkatan = (x) =>{
    return x * x;
}

// const random = () =>{
//     return Math.floor(Math.random() * 15) + 1;
// }

console.log(perpangkatan(5));

// Implisit Return 
const random = () => (
    Math.floor(Math.random() * 15) + 1 // hanya bisa mengeksekusi 1 perintah saja
);

const add = (a,b) => a+b;

console.log(random());
console.log(add(5,4));

//setTimeout & setInterval

setTimeout(() =>{
    console.log('Halo...'); // Memberikan jeda
},5000);

// const interval = setInterval(()=>{
//     console.log(Math.random()); // Melakukan proses secara berulang selama waktu yang ditentukan
// },2000)


//Filter (membuat array baru dari angka yg sudah ditentukan)
const angkaBaru = angka.filter((n)=>{
    return n < 5; 
});

console.log(angkaBaru);

const animeBagus = animes.filter((anime)=> anime.rating >= 80);

const animeCukupBagus = animes.filter((anime)=> anime.rating >= 85);

const judulAnimeBagus = animeBagus.map((anime)=> anime.title);

console.log(animeBagus);
console.log(animeCukupBagus);
console.log(judulAnimeBagus);

// Every (untuk mengecek kriteria semuanya harus sama)
// Some (untuk mengecek kriteria yang penting ada salah satu yang sama)
const examScore = [80,90,75,76,77,85,100]
const isGradute = examScore.every((score) => score >= 75); 
const isAnimeListNew = animes.some((anime) => anime.year > 2010)

console.log(isGradute)
console.log(isAnimeListNew)

//Reduce membandingkan dengan nilai awalnya (nilai baliknya berupa single value)
const totalNilai = examScore.reduce((total,score)=>{
    return total + score;
});

const bestAnime = animes.reduce((bestAnime,anime)=>{
    if(anime.rating > bestAnime.rating){
        return anime;
    }
    return bestAnime;
});

console.log(totalNilai);
console.log(bestAnime);

//This tidak bisa digunakan dalam arrow function 

// const person= {
//     namaDepan : 'Rangga',
//     namaBelakang : 'Lesmana'
//     fullName : ()=>{
        
//     }
// }