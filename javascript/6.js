/**
 * Problem 6
 *
 * 最初の10個の自然数について、その和の二乗と、二乗数の和は以下の通り。
 * (1 + 2 + ... + 10)² = 3025
 * 1² + 2² + ... + 10² = 385
 * これらの数の差は 3025 - 385 = 2640 となる。
 * 同様にして、最初の100個の自然数について和の二乗と二乗の和の差を求めよ。
 */

console.time('execution');

function afterPow(n) {
    var result = 0;
    for (var i = 1; i <= n; i++) {
        result += i;
    }
    result = Math.pow(result, 2);
    return result;
}

function beforePow(n) {
    var result = 0;
    for (var i = 1; i <= n; i++) {
        result += Math.pow(i, 2);
    }
    return result;
}

console.log(afterPow(100) - beforePow(100));
console.timeEnd('execution');
