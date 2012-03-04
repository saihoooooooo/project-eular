/**
 * Problem16
 *
 * 2の15乗 = 32768 であり、これの各数字の合計は 3 + 2 + 7 + 6 + 8 = 26 となる。
 * 同様にして、2の1000乗 の各数字の合計を求めよ。
 */

console.time('execution');

var pow = [2];
for (var i = 2; i <= 1000; ++i) {
    if (pow.reduce(function(prev, cur, i, arr) {
        cur = cur * 2 + prev;
        arr[i] = (cur >= 10) ? cur - 10 : cur;
        return (cur >= 10) ? 1 : 0;
    }, 0)) {
        pow.push(1);
    }
};

console.log(pow.reduce(function(x, y) { return x + y }));
console.timeEnd('execution');
