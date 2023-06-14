def define_triangle(a, b, c):
    if a + b < c:
        return "não é triângulo"
    elif a == b == c:
        return "Equilátero: três lados iguais"
    elif a != b != c:
        return "Escaleno: três lados diferentes"
    else:
        return "Isósceles: quaisqer dois lados iguais"
    

print(define_triangle(7, 7, 7))