"use strict";
const unitsCapacity = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convertCapacity(value, fromUnit, toUnit) {
    const fromIndex = unitsCapacity.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = unitsCapacity.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = toIndex - fromIndex; // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
console.log(convertCapacity(255, 'l', 'dl'));
