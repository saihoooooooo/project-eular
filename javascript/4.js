/**
 * Problem 4
 *
 * 左右どちらから読んでも同じ値になる数を回文数という。 2桁の数の積で表される回文数のうち、最大のものは 9009 = 91 × 99 である。
 * では、3桁の数の積で表される回文数のうち最大のものはいくらになるか。
 */

console.time('execution');

function maxPalindromic(n) {
    var result = 0;
    var min = 1;
    var max = 9;
    for (var i = 0; i < n - 1; i++) {
        min *= 10;
        max = max * 10 + 9;
    }
    var palindromic = [];
    for (var i = max; i > min; i--) {
        for (var j = max; j > min; j--) {
            if (isPalindromic(String(i * j))) {
                palindromic.push(i * j);
                break;
            }
        }
    }
    return palindromic.sort(function(a, b) { return a - b; }).pop();
}

function isPalindromic(n) {
    var cnt = 0;
    while (cnt <= Math.round(n.length / 2)) {
        if (n.charAt(cnt) != n.charAt(n.length - 1 - cnt)) {
            return false;
        }
        cnt++;
    }
    return true;
}

console.log(maxPalindromic(3));
console.timeEnd('execution');
