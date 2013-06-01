=begin
最初の10個の自然数について、その和の二乗と、二乗数の和は以下の通り。
(1 + 2 + ... + 10)² = 3025
1² + 2² + ... + 10² = 385
これらの数の差は 3025 - 385 = 2640 となる。
同様にして、最初の100個の自然数について和の二乗と二乗の和の差を求めよ。
=end

psStart = Time.now

def sumpow(max)
    result = 0
    for n in 1..max
        result += n
    end
    result ** 2
end

def powsum(max)
    result = 0
    for n in 1..max
        result += n ** 2
    end
    result
end

puts sumpow(100) - powsum(100)
puts ((Time.now - psStart) * 1000).round(1).to_s + 'ms'
