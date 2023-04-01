function LuasPersegi(sisiSatu,sisiDua){
    const luas = sisiSatu * sisiDua;
    return luas;
    //setelah return code tidak bisa dijalankan
}

const luas = LuasPersegi(5,5);
console.log(luas);


//Scope function pada Javascript

//VARIBALE yang diluar function nilainya tidak akan berubah
let programing = "Javascript";

function typeSafe(){
    let programing = "TypeScript";
    console.log(programing);
}

console.log(programing);
typeSafe();

let tinggi = 8;
if (tinggi < 5){
    let lebar = 10;
}
// console.log(lebar)

function lamarKerja(){
    const jabatan = "Programmer";

    function orangDalam(){
        let kenalan = `orang dalam bisa masukan ${jabatan}`;
        console.log(kenalan);
    }
    orangDalam();
}
lamarKerja();

//Function Expression

const pangkat = function(nilai){
    return nilai * nilai;
}

pangkat(5);


//Function Argument

function duaKali(func){
    func();
    func();
}

function lemparDadu(){
    let hasil = Math.floor(Math.random() * 10) + 1;
    console.log(hasil);
}

duaKali(lemparDadu);

function hasilnyaAdalahFunction(){
    const rand = Math.random();
    if(rand > 0.10){
        return function(){
            console.log("Selamat angkanya Lebih BESAR");
        }
    }else{
        return function(){
            console.log("Maaf, mungkin bisa coba lagi");
        }
    }
}
//harus dibungkul varibale lagi
const hasil = hasilnyaAdalahFunction();
hasil();

//Function pada object (Method)

const myMath = { // object
    perkalian: function(x,y){ // method
        return x * y;
    },
}

let perkalian = myMath.perkalian(4,8);
console.log(perkalian);


//this function
const Mahasiswa ={
    nama : 'Rangga Lesmana',
    nim  : '1301204232',
    data : function(){
        return `Data Mahasiswa dengan Nama : ${this.nama} dan Nimnya : ${this.nim} dinyatakan lulus`
    }
}

Mahasiswa.nama = 'sobat';
const namaMhs = Mahasiswa.data();
console.log(namaMhs);

//try and catch
function teriak(msg){
    try{
        console.log(msg.toUpperCase());
    } catch(e){
        console.log(e);
        console.log('Silahakan masukan data string')
    }
}
teriak(1);