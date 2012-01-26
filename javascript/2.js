/**
 * Problem 2
 *
 * フィボナッチ数列の項は前の2つの項の和である。最初の2項を 1, 2 とすれば、最初の10項は以下の通りである。
 *  1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * 数列の項の値が400万を超えない範囲で、偶数値の項の総和を求めよ。
 */

var start = new Date();

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
var evenfib = mkfib(4000000).filter(function(n) { return n % 2 == 0 } );

for (var i = 0; i < evenfib.length; i++) {
    total += evenfib[i];
}

console.log(total);

var end = new Date();
console.log('execution time ' + (end - start) / 1000 + ' sec');
