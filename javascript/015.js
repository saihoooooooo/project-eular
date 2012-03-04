/**
 * Problem
 *
 * 2 × 2 のマス目の左上からスタートした場合、引き返しなしで右下にいくルートは 6 つある。
 * では、20 × 20 のマス目ではいくつのルートがあるか。
 */

console.time('execution');

var comb = function(n, r) {
    var fact = function(n) {
        var result = 1;
        for (var i = 1; i <= n; ++i) result *= i;
        return result;
    };
    return fact(n) / (fact(r) * fact(n - r));
}

console.log(comb(40, 20));
console.timeEnd('execution');
