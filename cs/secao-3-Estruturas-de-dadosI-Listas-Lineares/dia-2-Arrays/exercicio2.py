def shuffle(items):
    answer = []
    div_cards_by_two = len(items) // 2
    for index in range(div_cards_by_two):
        answer.extend(items[index::div_cards_by_two])
    return answer


print(shuffle([11, 12, 21, 22, 31, 32]))