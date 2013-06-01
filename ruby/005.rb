=begin
Problem 5

2520 は 1 から 10 の数字の全ての整数で割り切れる数字であり、そのような数字の中では最小の値である。
では、1 から 20 までの整数全てで割り切れる数字の中で最小の値はいくらになるか。
=end

psStart = Time.now

def gcd(x, y)
    return x if y == 0
    gcd y, x % y
end

def lcm(x, y)
    return x * y / gcd(x, y)
end

def getLcmTo(n)
    result = 1
    for i in 2..n
        result = lcm result, i
    end
    result
end

puts getLcmTo 20
puts ((Time.now - psStart) * 1000).round(1).to_s + 'ms'
