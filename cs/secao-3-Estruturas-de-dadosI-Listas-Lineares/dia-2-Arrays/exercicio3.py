def combination(values):
    result = 0
    size = len(values)
    for i in range(size):
        for j in range(i + 1, size):
            if values[i] == values[j]:
                result += 1
    return result
       

print(combination([1, 3, 1, 1, 2, 3]))