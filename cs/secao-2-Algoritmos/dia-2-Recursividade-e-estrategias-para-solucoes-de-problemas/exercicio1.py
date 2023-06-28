# Crie um algoritmo não recursivo para contar quantos números pares existem
#  em uma sequência numérica (1 a n).

def count_evens(n):
    counter = 0
    for number in range(1, n + 1):
        if number % 2 == 0:
            counter += 1
    return counter


print(count_evens(10))

