
1
function calculateScore(name, age) {
    let totalScore = 0;
    let nameLength = name.length;

    let sum = nameLength + age;

    if (sum >= 10 && sum <= 25) {
        totalScore += 30;
        console.log("Tebrikler! Adınızın uzunluğu ve yaşınızın toplamı 10 ile 25 arasında.");
    } else {
        console.log("Üzgünüm, adınızın uzunluğu ve yaşınızın toplamı 10 ile 25 arasında değil.");
    }

    return totalScore;
}

// Adınızı ve yaşınızı belirtin
let name = prompt("Adınız nedir?");
let age = parseInt(prompt("Yaşınız kaç?"));

// Puanı hesaplayın ve ekrana yazdırın
let score = calculateScore(name, age);
console.log("Puanınız:", score);

2
function calculateScore(name, age) {
    let totalScore = 0;
    let nameLength = name.length;

    let sum = nameLength + age;

    if (sum >= 5 && sum <= 10) {
        totalScore += 10;
        console.log("Tebrikler! Adınızın uzunluğu ve yaşınızın toplamı 5 ile 10 arasında.");
    } else {
        console.log("Üzgünüm, adınızın uzunluğu ve yaşınızın toplamı 5 ile 10 arasında değil.");
    }

    return totalScore;
}

// Adınızı ve yaşınızı belirtin
let name = prompt("Adınız nedir?");
let age = parseInt(prompt("Yaşınız kaç?"));

// Puanı hesaplayın ve ekrana yazdırın
let score = calculateScore(name, age);
console.log("Puanınız:", score);
3
function calculateScore(name, age) {
    let totalScore = 0;
    let nameLength = name.length;

    let sum = nameLength + age;

    if (sum >= 1 && sum <= 5) {
        console.log("Üzgünüm, adınızın uzunluğu ve yaşınızın toplamı 1 ile 5 arasında.");
    } else {
        totalScore += 0;
        console.log("Tebrikler! Adınızın uzunluğu ve yaşınızın toplamı 1 ile 5 arasında değil.");
    }

    return totalScore;
}

// Adınızı ve yaşınızı belirtin
let name = prompt("Adınız nedir?");
let age = parseInt(prompt("Yaşınız kaç?"));

// Puanı hesaplayın ve ekrana yazdırın
let score = calculateScore(name, age);
console.log("Puanınız:", score);
