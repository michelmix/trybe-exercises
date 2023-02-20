"use strict";
const unitsMass = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function convertMass(valor, uniBase, uniConversion) {
    const fromIndexMass = unitsMass.indexOf(uniBase);
    const toIndexMass = unitsMass.indexOf(uniConversion);
    const expoent = toIndexMass - fromIndexMass;
    return valor * Math.pow(10, expoent);
}
