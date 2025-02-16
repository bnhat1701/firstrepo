// app.js - Tạo số ngẫu nhiên và kiểm tra chẵn lẻ

function randomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Số từ 1 đến 100
}

function checkEvenOdd(num) {
    return num % 2 === 0 ? 'Chẵn' : 'Lẻ';
}

// Chạy chương trình
const number = randomNumber();
console.log(`Số ngẫu nhiên: ${number} - ${checkEvenOdd(number)}`);
