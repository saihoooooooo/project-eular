=begin
Problem 2

フィボナッチ数列の項は前の2つの項の和である。最初の2項を 1, 2 とすれば、最初の10項は以下の通りである。
 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
数列の項の値が400万を超えない範囲で、偶数値の項の総和を求めよ。
=end

psStart = Time.now

def mkfib(limit)
    x = 0
    y = 1
    result = [x, y]
    while x + y < limit
        sum = x + y
        x = y
        y = sum
        result << sum
    end
    return result
end

evenfib = mkfib(4000000).find_all { |n| n % 2 == 0 }
total = evenfib.inject { |sum, n| sum + n }

puts total;
puts ((Time.now - psStart) * 1000).round(1).to_s + 'ms'
