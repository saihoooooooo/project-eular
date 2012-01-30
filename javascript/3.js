/**
 * Problem 3
 *
 * 13195 の素因数は 5、7、13、29 である。
 * 600851475143 の素因数のうち最大のものを求めよ。
 */

console.time('execution');

function getMaxPrime(n, division) {
    while (division * division <= n) {
        if (n % division == 0) {
            n /= division;
        } else {
            division++;
        }
    }
    return n;
}

console.log(getMaxPrime(600851475143, 2));
console.timeEnd('execution');
