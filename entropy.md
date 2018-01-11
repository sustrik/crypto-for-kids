**Explain what entropy is.**

Here's an idea of how to explain logarithms.

Imagine an opsec scenario. You are participating a discussion anonymously. You don't want others to know who you are.

Now imagine you say something like: "It's sunny outside."

How hurtful is that? Can't be that hurtfull, can it?

Well, it means you are at the half of the globe where there's day at the moment. Which means that you can't be anyone from roughly the half of world's population living in areas that have night at the moment.

The attacker will have to find you among 3.5B people instead of among 7B.

That doesn't sound so good suddenly.

What if you then give a hint about your sex?

Given that there's roughly half of men and half of women, the attacker will be able to rule out half of suspects. Now they have to find you among 1.75B people instead of 3.5B.

The question is how many hints you can give before they can pinpoint you.

Assuming that each hint cuts the number of suspects by half here's what's going to happen:

```
No. of hints       No. of suspects
----------------------------------
1                       7000000000
2                       3500000000
3                       1750000000
4                        875000000
5                        437500000
6                        218750000
7                        109375000
8                         54687500
9                         27343750
10                        13671875
11                         6835938
12                         3417969
13                         1708985
14                          854493
15                          427247
16                          213624
17                          106812
18                           53406
19                           26703
20                           13352
21                            6676
22                            3338
23                            1669
24                             835
25                             418
26                             209
27                             105
28                              53
29                              27
30                              14
31                               7
32                               4
33                               2
34                               1
```

After approximately 34 hints, the attacker is going to know who exactly you are.

This operation is called logarithm. log2 7000000000 is approximately 34 (precisely, it's 32.70470777). The 2 stands for dividing the number of suspects by 2 in each step. It's called binary logarithm. If we were able to cut the number of suspects 10 times in each step we would use decimal logarithm (log10) and we would need only 10 hints to pinpoint the person.

Of course, it's not that easy. Some hints reveal more information about you, some reveal less.

If, for example, you said that you are from Liechtenstein that would immediate reduce the number of suspects from 7 billions to some 38 thousand.

If, on the other hand, you said that you owned a mobile phone, that would be much less damaging. In 2018, approximately 5 billion people are estimated to own a mobile phone, so the attacker would be able to eliminate just 2 billions of suspects.

Continue reading at section log10 1000000.
