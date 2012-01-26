/**
 * Problem 1
 *
 * 10未満の自然数のうち、3 もしくは 5 の倍数になっているものは 3, 5, 6, 9 の4つがあり、これらの合計は 23 になる。
 * 同じようにして、1,000 未満の 3 か 5 の倍数になっている数字の合計を求めよ。
 */

var start = new Date();

var total = 0;

for (var i = 0; i < 1000; i++ ) {
    if (i % 3 == 0 || i % 5 == 0) {
        total += i;
    }
}

console.log(total);

var end = new Date();
console.log('execution time ' + (end - start) / 1000 + ' sec');
