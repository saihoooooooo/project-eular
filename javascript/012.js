/**
 * Problem 12
 *
 * 三角数の数列は自然数の和で表わされ、7番目の三角数は 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28 である。三角数の最初の10項は
 * 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
 * となる。
 * 最初の7項について、その約数を列挙すると、以下のとおり。
 *      1: 1
 *      3: 1,3
 *      6: 1,2,3,6
 *     10: 1,2,5,10
 *     15: 1,3,5,15
 *     21: 1,3,7,21
 *     28: 1,2,4,7,14,28
 * これから、7番目の三角数である28は、6個以上の約数をもつ最初の三角数であることが分る。
 * では、501 個以上の約数をもつ最初の三角数はいくらか。
 */

console.time('execution');

var getDivisorNum = function(n) {
    var result = 1;
    var divisor = 2;
    var exponent = {};
    while (divisor * divisor <= n) {
        if (n % divisor == 0) {
            n /= divisor;
            if (typeof exponent[divisor] === 'undefined') {
                exponent[divisor] = 1;
            } else {
                exponent[divisor]++;
            }
        } else {
            divisor++;
        }
    }
    exponent[n] = 1;
    for (var key in exponent) {
        result *= exponent[key] + 1;
    }
    return result;
};

var triangle = 1;
var next = 1;
while(getDivisorNum(triangle) < 501) {
    triangle += ++next;
}

console.log(triangle);
console.timeEnd('execution');
