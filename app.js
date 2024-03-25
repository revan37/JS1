
// 1
// function calculateScore(name, age) {
//     let totalScore = 0;
//     let nameLength = name.length;

//     let sum = nameLength + age;

//     if (sum >= 10 && sum <= 25) {
//         totalScore += 30;
//         console.log("Tebrikler! Adınızın uzunluğu ve yaşınızın toplamı 10 ile 25 arasında.");
//     } else {
//         console.log("Üzgünüm, adınızın uzunluğu ve yaşınızın toplamı 10 ile 25 arasında değil.");
//     }

//     return totalScore;
// }

// // Adınızı ve yaşınızı belirtin
// let name1 = prompt("Adınız nedir?");
// let age1 = parseInt(prompt("Yaşınız kaç?"));

// // Puanı hesaplayın ve ekrana yazdırın
// let score1 = calculateScore(name, age);
// console.log("Puanınız:", score);

// 2
// function calculateScore(name, age) {
//     let totalScore = 0;
//     let nameLength = name.length;

//     let sum = nameLength + age;

//     if (sum >= 5 && sum <= 10) {
//         totalScore += 10;
//         console.log("Tebrikler! Adınızın uzunluğu ve yaşınızın toplamı 5 ile 10 arasında.");
//     } else {
//         console.log("Üzgünüm, adınızın uzunluğu ve yaşınızın toplamı 5 ile 10 arasında değil.");
//     }

//     return totalScore;
// }

// // Adınızı ve yaşınızı belirtin
// let name2 = prompt("Adınız nedir?");
// let age2 = parseInt(prompt("Yaşınız kaç?"));

// // Puanı hesaplayın ve ekrana yazdırın
// let score2 = calculateScore(name, age);
// console.log("Puanınız:", score);
// 3
// function calculateScore(name, age) {
//     let totalScore = 0;
//     let nameLength = name.length;

//     let sum = nameLength + age;

//     if (sum >= 1 && sum <= 5) {
//         console.log("Üzgünüm, adınızın uzunluğu ve yaşınızın toplamı 1 ile 5 arasında.");
//     } else {
//         totalScore += 0;
//         console.log("Tebrikler! Adınızın uzunluğu ve yaşınızın toplamı 1 ile 5 arasında değil.");
//     }

//     return totalScore;
// }

// // Adınızı ve yaşınızı belirtin
// let name = prompt("Adınız nedir?");
// let age = parseInt(prompt("Yaşınız kaç?"));

// // Puanı hesaplayın ve ekrana yazdırın
// let score = calculateScore(name, age);
// console.log("Puanınız:", score);
// promptda daxil edecem nece adam oldugunu 
// sonra o mennen her birinin yasin sorusacaq ve arraye yazacaq
// array daxilindeki yaslari gore yol pulu meselesin yoxla
// 6 yasindan balacadisa 0
// 6-18 30 qepik
// 18 boyukduses 50qepik
// cemi ne qeder pul odenecek o cixsin
// console.log("Amir");

// Funksiya yaşa görə ödəniləcək haqqı hesablayır

function calculatePayment(age) {
    if (age < 6) {
        return 0;
    } else if (age >= 6 && age <= 18) {
        return 0.3; // 30 qepik
    } else {
        return 0.5; // 50 qepik
    }
}

// Funksiya insanın yaşını soruşur və ödəniləcək haqqı hesablayır
function askAgeAndCalculatePayment(name) {
    const age = parseInt(prompt("zehmet olmasa " + name + "'yaşını yaz:"));
    const payment = calculatePayment(age);
    return payment;
}
// Funksiya ümumi ödənilməli məbləği hesablayır
function calculateTotalPayment(names) {
    let totalPayment = 0;
    for (let i = 0; i < names.length; i++) {
        const payment = askAgeAndCalculatePayment(names[i]);
        totalPayment += payment;
    }
    return totalPayment;
}
// Ad siyahısı
const names = ["revan"]; // Bura başqa adlar da əlavə edə bilərsiniz

// Ümumi ödənilməli məbləği hesablayır
const totalPayment = calculateTotalPayment(names);

// Nəticəni konsola çap edir  
console.log("Ödəniləcək ümumi məbləğ: " + totalPayment.toFixed(2) + " qepik."); // Əgər varsa, başqa valyutadan istifadə edə bilərsiniz
