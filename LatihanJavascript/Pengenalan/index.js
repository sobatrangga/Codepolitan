let age = 21;
let angka = Math.random();

if(angka >= 0.5){
    console.log(angka);
    console.log("Angka lebih dari 0.5");
}else{
    console.log("Angka Kurang dari 0.5");
}

const iniHari = prompt('isikan Hari ').toLowerCase();
if (iniHari === "senin"){
    console.log('Selamat bekerja kawan!');
}else if (iniHari === "sabtu"){
    console.log('Selamat jalan jalan');
}else{
    console.log('biasa saja');
}

const password = prompt('Masukan Password');
// if (password.length >= 6){
//     if(password.indexOf(' ') === -1){
//         conslog.log('Password Valid')
//     }else{
//         console.log('Password tidak boleh ada spasi');
//     }
// }else{
//     console.log('Password Invalid');
// }

if( password.length >= 6 && password.indexOf(' ') === -1){
    console.log('Password Valid');
}else{
    console.log('Password Invalid');
}

const role = prompt("Buat Password");
if(role === 'admin' || role === 'spv'){
    console.log("Sistem Biasa Diakses")
}else{
    console.log("Sistem Tidak Bisa Diakses")
}

const balonKu = 'merah';
    switch (balonKu){

        case 'merah':
            console.log("Balon Saya");
            break;
        case 'hijau':
            console.log('Duar');
            break;
        default :
            console.log('Tidak Punya Balon');
    }