#!/bin/sh

# Problem 1
#
# 10未満の自然数のうち、3 もしくは 5 の倍数になっているものは 3, 5, 6, 9 の4つがあり、これらの合計は 23 になる。
# 同じようにして、1,000 未満の 3 か 5 の倍数になっている数字の合計を求めよ。

sum=0
i=1
max=1000

while [ "$i" -lt "$max" ]
do
    if [ `expr "$i" % 3` -eq 0 ] || [ `expr "$i" % 5` -eq 0 ]; then
        sum=`expr "$sum" + "$i"`
    fi
    i=`expr $i + 1`
done

echo "$sum"
exit 0
