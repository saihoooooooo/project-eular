/**
 * Problem 7
 *
 * 素数を小さい方から6つ並べると 2, 3, 5, 7, 11, 13 であり、6番目の素数は 13 である。
 * 10001 番目の素数を求めよ。
 */

console.time('execution');

function getPrimeOfNumber(n) {
    var result = 2;
    var cnt = 1;
    var current = 3;
    while (cnt < n) {
        if (isPrime(current)) {
            result = current;
            cnt++;
        }
        current += 2;
    }
    return result;
}

function isPrime(n) {
    if (n < 2) {
        return false;
    } else if (n == 2) {
        return true;
    } else if (n % 2 == 0) {
        return false;
    }
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(getPrimeOfNumber(10001));
console.timeEnd('execution');
