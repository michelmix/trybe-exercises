import random


def random_averages(n):
    list_of_averages = []

    for _ in range(100):
        average = 0
        sum = 0
        for _ in range(n):
            sum += random.randrange(1, n)
        average = sum/n
        list_of_averages.append(average)

    return list_of_averages


print(random_averages(10))