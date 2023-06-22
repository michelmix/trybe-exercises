def duplicate_number(numbers):
    numbers.sort()
    previous_number = 'not a number'
    for number in numbers:
        if number == previous_number:
            return True
        previous_number = number
    return False


print(duplicate_number([3, 4, 2, 2, 1]))