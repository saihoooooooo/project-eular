=begin
Problem 4

左右どちらから読んでも同じ値になる数を回文数という。 2桁の数の積で表される回文数のうち、最大のものは 9009 = 91 × 99 である。
では、3桁の数の積で表される回文数のうち最大のものはいくらになるか。
=end

psStart = Time.now

def isPalindromic(n)
    ns = n.to_s
    if ns == ns.reverse
        return true
    end
end

def maxPalindromic(n)
    return 9 if n <= 1

    max = 10 ** n - 1
    min = 10 ** n - 10 ** (n - 1)
    palindromic = []
    while palindromic.length == 0
        for i in min..max
            for j in min..max
                palindromic << i * j if isPalindromic i * j
            end
        end
        max = min - 1
        min = min - 10 ** (n - 1)
        return false if max < 10 ** (n - 1)
    end
    palindromic.max
end

puts maxPalindromic(3)
puts ((Time.now - psStart) * 1000).round(1).to_s + 'ms'
