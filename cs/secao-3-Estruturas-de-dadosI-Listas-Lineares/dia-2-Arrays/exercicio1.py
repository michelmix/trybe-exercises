def verify_max_time(array_times):
    current_time = 0
    max_time = 0
    for time in array_times:
        if time == 1:
            current_time += 1
        else:
            current_time = 0
        if current_time > max_time:
            max_time = current_time
    return max_time