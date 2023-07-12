def library_entrance(entradas, saidas, instante_buscado):
    result = 0
    size = len(entradas)
    for i in range(size):
        if entradas[i] <= instante_buscado <= saidas[i]:
            result += 1
    return result