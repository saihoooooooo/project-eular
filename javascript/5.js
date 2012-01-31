/**
 * Problem 5
 *
 * 2520 は 1 から 10 の数字の全ての整数で割り切れる数字であり、そのような数字の中では最小の値である。
 * では、1 から 20 までの整数全てで割り切れる数字の中で最小の値はいくらになるか。
 */

console.time('execution');

function gcd(x, y) {
    if (y == 0) {
        return x;
    }
    return gcd(y, x % y);
}

function lcm(x, y) {
    return x * y / gcd(x, y);
}

function getLcmTo(n) {
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result = lcm(result, i);
    }
    return result;
}

console.log(getLcmTo(20));
console.timeEnd('execution');
