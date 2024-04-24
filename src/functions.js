// Requisito 1 - Crie a função verifyPalindrome
function verifyPalindrome(word) {
  const reverseWord = word.split('').reverse('').join('');
  return word === reverseWord;
}
// console.log(verifyPalindrome('arara'));
// console.log(verifyPalindrome('desenvolvimentos'));
// Requisito 2 - Crie a função getHighestIndex
function getHighestIndex(array) {
  const highestNumber = Math.max(...array);
  return array.indexOf(highestNumber);
}
// let numeros = [2, 3, 4, 5, 6];
// console.log(getHighestIndex(numeros));
// Requisito 3 - Crie a função getSmallestIndex
function getSmallestIndex(array) {
  const highestNumber = Math.min(...array);
  return array.indexOf(highestNumber);
}
// console.log(getSmallestIndex(numeros))

// Requisito 4 - Crie a função getLongestWord
function getLongestWord(array) {
  let maior = '';
  for (let palavra of array) {
    if (palavra.length > maior.length) {
      maior = palavra;
    }
  }
  return maior;
}

// Requisito 5 - Crie a função countHighestNumberMaxOccurrences
function countHighestNumberMaxOccurrences(array) {
  let highestNumber = Math.max(...array);
  let count = 0;

  for (let number of array) {
    if (number === highestNumber) {
      count += 1;
    }
  }
  return count;
}

array = [9, 1, 2, 3, 9, 5, 7, 8];
console.log(countHighestNumberMaxOccurrences(array));
// Não modifique as linhas abaixo
module.exports = {
  verifyPalindrome:
    typeof verifyPalindrome === 'function' ? verifyPalindrome : () => {},
  getHighestIndex:
    typeof getHighestIndex === 'function' ? getHighestIndex : () => {},
  getSmallestIndex:
    typeof getSmallestIndex === 'function' ? getSmallestIndex : () => {},
  getLongestWord:
    typeof getLongestWord === 'function' ? getLongestWord : () => {},
  countHighestNumberMaxOccurrences:
    typeof countHighestNumberMaxOccurrences === 'function'
      ? countHighestNumberMaxOccurrences
      : () => {},
};
