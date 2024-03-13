//var name = prompt("Adin nedi?"); //string
//var surname = prompt("soyadin nedi?");//string
//var age = prompt("yasin necedi?");
//console.log(typeof age);
//console.log(surname,name,age);
//console.log(18-age);
//var galib = 18- age;
//console.log("salam" + surname + " " +name +" , senin 18 yasina " + qalib +" il qalib ");
// var age = prompt("nece il?")
// age = 2024 - age;
// console.log(age * 365);
// console.log(age * 365 * 24);
// console.log(age * 365 * 24 * 60);
// console.log(age * 365 * 24 * 60 * 60);
// console.log(age * 365 * 24 * 60 * 60 * 1000);




// var name = prompt("Adin nedi?");
// var age = prompt("yasin necedi?");
// var length = name.length;
// var qalib = (25 - age);
// console.log(qalib + age);
// console.log(name);

// function calculateScore(nameLength, age) {
    // let totalScore = 0;

//     var name = prompt("Adin nedi?");
//     var age = prompt("yasin necedi?");
//     // Adın uzunluğu ve yaşın toplamının 25 olduğu durumu kontrol et
//     if (nameLength + age == 25) {
//         totalScore += 50;
//     } 
//     // Adın uzunluğu ve yaşın toplamının 25-10 aralığında olduğu durumu kontrol et
//     else if (nameLength + age >= 15 && nameLength + age <= 25) {
//         totalScore += 30;
//     } 
//     // Adın uzunluğu ve yaşın toplamının 10-5 aralığında olduğu durumu kontrol et
//     else if (nameLength + age >= 5 && nameLength + age < 15) {
//         totalScore += 10;
//     } 
//     // Adın uzunluğu ve yaşın toplamının 5-1 aralığında olduğu durumu kontrol et
//     else if (nameLength + age >= 1 && nameLength + age < 5) {
//         totalScore += 0;
//     } 
//     // Adın uzunluğu 3 karakterden kısa veya yaş bir harfse hata mesajı göster
//     else if (nameLength < 3 || isNaN(age)) {
//         console.log("Hata: Geçersiz ad veya yaş!");
//     }

//     return totalScore;
// }

// // Adınızı ve yaşınızı belirtin
// let name = "Ali"; // Adınızı buraya girin
// let age = 20; // Yaşınızı buraya girin

// // Adın uzunluğunu ve yaşınızı kontrol ederek puanı hesaplayın
// let score = calculateScore(name.length, age);
// console.log("Puanınız:", score);
























// var name = prompt("Adin nedi?");
// var age = prompt("yasin necedi?");
// function findNameAndAgeSum() {
//     for (let nameLength = 1; nameLength < 25; nameLength++) {
//         let age = 25 - nameLength;
//         console.log("Adın Uzunluğu:", nameLength, "Yaşın:", age);
//     }
// }







// findNameAndAgeSum();
function calculateScore(name, age) {
    let totalScore = 0;
    let nameLength = name.length;

    if (nameLength + age === 25) {
        totalScore += 50;
        console.log("Tebrikler! Adınızın uzunluğu ve yaşınızın toplamı 25'e eynidi.");
    } else {
        console.log("üzr istəyirəm adının uzunluğu ilə yaşının cəmi 25-ə bərabər deyil..");
    }

    return totalScore;
}

// Adınızı ve yaşınızı belirtin

let name = prompt("Adın nedir?");
let age = parseInt(prompt("Yaşın necedi?"));

// Puanı hesaplayın ve ekrana yazdırın
{let score = calculateScore(name, age);
console.log("bal:", score);}
function calculateScore(name, age) {
    let totalScore = 0;
    let nameLength = name.length;

    let sum = nameLength + age;

    if (sum >= 10 && sum <= 25) {
        totalScore += 30;
        console.log("Tebrikler! Adınızın uzunluğu ve yaşınızın toplamı 25'e eynidi");
    } else {
        console.log("üzr istəyirəm adının uzunluğu ilə yaşının cəmi 25-ə bərabər deyil..");
    }

    return totalScore;
}

// Adınızı ve yaşınızı belirtin
let name1 = prompt("Adınız nedir?");
let age1 = parseInt(prompt("Yaşınız kaç?"));

// Puanı hesaplayın ve ekrana yazdırın
{let score = calculateScore(name, age);
console.log("Puanınız:", score);}

function calculateScore(name, age) {
    let totalScore = 0;
    let nameLength = name.length;

    let sum = nameLength + age;

    if (sum >= 5 && sum <= 10) {
        totalScore += 10;
        console.log("Tebrikler! Adınızın uzunluğu ve yaşınızın toplamı 25'e eynidi");
    } else {
        console.log("üzr istəyirəm adının uzunluğu ilə yaşının cəmi 25-ə bərabər deyil.");
    }

    return totalScore;
}

// Adınızı ve yaşınızı belirtin
let name2 = prompt("Adınız nedir?");
let age2 = parseInt(prompt("Yaşınız kaç?"));

// Puanı hesaplayın ve ekrana yazdırın
let score = calculateScore(name, age);
console.log("Puanınız:", score);

function calculateScore(name, age) {
    let totalScore = 0;
    let nameLength = name.length;

    let sum = nameLength + age;

    if (sum >= 1 && sum <= 5) {
        console.log("üzr istəyirəm adının uzunluğu ilə yaşının cəmi 25-ə bərabər deyil.");
    } else {
        totalScore += 0;
        console.log("Tebrikler! Adınızın uzunluğu ve yaşınızın toplamı 25'e eynidi.");
    }

    return totalScore;
}

// // Adınızı ve yaşınızı belirtin
// let name = prompt("Adınız nedir?");
// let age = parseInt(prompt("Yaşınız kaç?"));

// // Puanı hesaplayın ve ekrana yazdırın
// let score = calculateScore(name, age);
// console.log("Puanınız:", score);

