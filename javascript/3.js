/**
 * Problem 3
 *
 * 13195 の素因数は 5、7、13、29 である。
 * 600851475143 の素因数のうち最大のものを求めよ。
 */

var start = new Date();

var n = 600851475143;
var division = 2;

while (division * division <= n) {
    if (n % division == 0) {
        n /= division;
    } else {
        division++;
    }
}

var maxPrime = n;
console.log(maxPrime);

var end = new Date();
console.log('execution time ' + (end - start) / 1000 + ' sec');
