// Requisito 1 - Crie a função verifyPalindrome
function verifyPalindrome(word) {
  const reverseWord = word.split('').reverse('').join('');
  return word === reverseWord;
}

console.log(verifyPalindrome('arara'));
console.log(verifyPalindrome('desenvolvimentos'));

// Requisito 2 - Crie a função getHighestIndex

// Requisito 3 - Crie a função getSmallestIndex

// Requisito 4 - Crie a função getLongestWord

// Requisito 5 - Crie a função countHighestNumberMaxOccurrences

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
