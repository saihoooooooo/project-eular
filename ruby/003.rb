=begin
Problem 3

13195 の素因数は 5、7、13、29 である。
600851475143 の素因数のうち最大のものを求めよ。
=end

psStart = Time.now

n = 600851475143
prime = 2
while prime * prime <= n
    if n % prime == 0
        n /= prime
    else
        prime += 1
    end
end

puts n
puts ((Time.now - psStart) * 1000).round(1).to_s + 'ms'
