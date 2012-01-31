/**
 * Problem 9
 *
 * 10以下の素数の和は2 + 3 + 5 + 7 = 17である。
 * 200万以下の全ての素数の和を計算しなさい。
 */

console.time('execution');

function getPrimes(n) {
    var result = [2];
    for (var i = 3; i <= n; i += 2) {
        if (isPrime(i)) {
            result.push(i);
        }
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

var primes = getPrimes(2000000);
var total = 0;
for (var i = 0, len = primes.length; i < len; i++) {
    total += primes[i];
}

console.log(total);
console.timeEnd('execution');
