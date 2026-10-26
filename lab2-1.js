// Лабораторна робота №1. Завдання 1
// Варіант 6

// Перевірка, чи є число цілим
function isInteger(num) {
    return typeof num === 'number' && isFinite(num) && num % 1 === 0;
}

// Пошук простих чисел на інтервалі [a, b]
function findPrimes(a, b) {
    let start = Math.min(a, b);
    let end = Math.max(a, b);
    let primes = [];

    for (let i = start; i <= end; i++) {
        if (i < 2) continue;
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(i);
    }

    console.log(`Прості числа на інтервалі [${start}, ${end}]:`, primes.join(', '));
}