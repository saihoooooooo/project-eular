/**
 * Problem 14
 *
 * 正の整数に以下の式で繰り返し生成する数列を定義する。
 * n → n/2 (n が偶数)
 * n → 3n + 1 (n が奇数)
 * 13からはじめるとこの数列は以下のようになる。
 * 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 * 13から1まで10個の項になる。この数列はどのような数字からはじめても最終的には 1 になると考えられているが、まだそのことは証明されていない(コラッツ問題)
 * さて、100万未満の数字の中でどの数字からはじめれば一番長い数列を生成するか。
 * 注意: 数列の途中で100万以上になってもよい
 */

console.time('execution');

memo = {};
function collatz(n) {
    if (memo[n]) {
        return memo[n];
    }
    var result = 1;
    if (n != 1) {
        if (n % 2 == 0) {
            result += collatz(n / 2);
        } else {
            result += collatz(n * 3 + 1);
        }
    }
    return memo[n] = result;
}

var maxLength = 0;
var maxNum;
var length;
for (var i = 1; i < 1000000; i += 2) {
    length = collatz(i);
    if (length > maxLength) {
        maxLength = length;
        maxNum = i;
    }
}

console.log(maxNum);
console.timeEnd('execution');
