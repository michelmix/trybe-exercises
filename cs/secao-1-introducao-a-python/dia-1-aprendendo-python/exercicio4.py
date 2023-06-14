def names(list_names):
    bigger_name = list_names[0]
    for name in list_names:
        if len(name) > len(bigger_name):
            bigger_name = name
    return print(bigger_name)
        

names(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])