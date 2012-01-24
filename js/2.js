/**
 * Problem 2
 *
 * フィボナッチ数列の項は前の2つの項の和である。最初の2項を 1, 2 とすれば、最初の10項は以下の通りである。
 *  1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * 数列の項の値が400万を超えない範囲で、偶数値の項の総和を求めよ。
 */

function mkfib (limit) {
    var x = 0;
    var y = 1;
    var sum;
    var result = [x, y];
    while (x + y < limit) {
        sum = x + y;
        x = y;
        y = sum;
        result.push(sum);
    }
    return result;
}

var total = 0;
var fibonacci = mkfib(4000000);

for (var i = 0; i < fibonacci.length; i++) {
    if (fibonacci[i] % 2 == 0) {
        total += fibonacci[i];
    }
}

console.log(total);
