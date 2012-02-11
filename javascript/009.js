/**
 * Problem 9
 *
 * ピタゴラスの三つ組(ピタゴラスの定理を満たす自然数)とはa<b<cで
 * a² + b² = c²
 * を満たす数の組である.
 * 例えば, 3² + 4² = 9 + 16 = 25 = 5²である.
 * a + b + c = 1000となるピタゴラスの三つ組が一つだけ存在する. このa,b,cの積を計算しなさい。
 */

console.time('execution');

function get1000Pythagorean() {
    var result;
    var x, y, z;
    xloop:
    for (x = 1; x <= 332; x++) {
        for (y = x + 1; y < (z = 1000 - x - y); y++) {
            if (Math.pow(x, 2) + Math.pow(y, 2) == Math.pow(z, 2)
                && x + y + z == 1000
            ) {
                result = x * y * z;
                break xloop;
            }
        }
    }
    return result;
}

console.log(get1000Pythagorean());
console.timeEnd('execution');
