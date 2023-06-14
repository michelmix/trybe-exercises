# def smallest_number(numbers):
#     smallest_number = numbers[0]
#     for number in numbers:
#         if number < smallest_number:
#             smallest_number = number
#     return smallest_number

# def minimum(numbers):
#     return min(numbers)


# print(minimum([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))


# def retangulo(number):
#     for n in range(1, number + 1):
#         print(n * "*")


# retangulo(5)

# def somatorio(n):
#     soma = 0
#     for number in range(n + 1):
#         soma += number
#     return soma


# print(somatorio(6))


def fuel_price(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total


# print(fuel_price(G, 50))