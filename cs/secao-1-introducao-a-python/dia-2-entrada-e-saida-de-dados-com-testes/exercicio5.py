def fizz_buzz(number):
    list = []
    for n in range(1, number + 1):
        if n % 15 == 0:
            list.append("FizzBuzz")
        elif n % 3 == 0:
            list.append("Fizz")
        elif n % 5 == 0:
            list.append("Buzz")
        else:
            list.append(n)
    return list


print(fizz_buzz(15))
