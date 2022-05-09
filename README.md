# [CollatzConjecture-UVa100](https://michelemarrandino.github.io/CollatzConjecture-UVa100/)
#### Simple, cute and animated webapp that solves the 3n + 1 problem: UVa 100.
### [Try it out!](https://michelemarrandino.github.io/CollatzConjecture-UVa100/)
![image](https://user-images.githubusercontent.com/102958232/167347338-770c0f3c-3579-4c72-9f34-9451088bfcc3.png)

> Consider the following algorithm:
```sh
1. input n
2. print n
3. if n = 1 then STOP
4. if n is odd then n ←− 3n + 1
5. else n ←− n/2
6. GOTO 2 
```

> Given the input 22, the following sequence of numbers will be printed
```sh
22 11 34 17 52 26 13 40 20 10 5 16 8 4 2 1
```
> It is conjectured that the algorithm above will terminate (when a 1 is printed) for any integral input
>value. 
>For any two numbers i and j you are to determine the maximum cycle length over all numbers
> between and including both i and j.
