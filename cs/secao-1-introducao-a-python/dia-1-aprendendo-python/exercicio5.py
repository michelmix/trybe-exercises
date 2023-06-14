import math


def pintar_parede(tamanho):
    total_tinta_necessário = tamanho / 3
    quantidade_latas_necessárias = math.ceil(total_tinta_necessário / 18)
    return quantidade_latas_necessárias, quantidade_latas_necessárias * 80


# def paint_costs(area):
#     can_price = 80
#     required_liters = area / 3
#     required_cans = math.ceil(required_liters / 18)
#     return required_cans, required_cans * can_price


print(pintar_parede(300))