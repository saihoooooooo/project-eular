/**
 * Problem 3
 *
 * 13195 の素因数は 5、7、13、29 である。
 * 600851475143 の素因数のうち最大のものを求めよ。
 */

var maxPrime = 0;
var num = 600851475143;
var division = 2;

while (division <= num) {
    if (num % division == 0) {
        maxPrime = division;
        num /= division;
    }
    division++;
}

console.log(maxPrime);
