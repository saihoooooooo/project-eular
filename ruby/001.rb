=begin
Problem 1

10未満の自然数のうち、3 もしくは 5 の倍数になっているものは 3, 5, 6, 9 の4つがあり、これらの合計は 23 になる。
同じようにして、1,000 未満の 3 か 5 の倍数になっている数字の合計を求めよ。
=end

psStart = Time.now

total = 0
1000.times do |i|
    if i % 3 == 0 or i % 5 == 0
        total += i
    end
end

puts total
puts ((Time.now - psStart) * 1000).round(1).to_s + 'ms'
