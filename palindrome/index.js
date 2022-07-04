function isPalindorme(word) {
  const normalizedWord = word.toLowerCase().replaceAll(' ', '');
  let inverseWord = [];
  for (const letter of normalizedWord) {
    inverseWord.unshift(letter)
  }
  inverseWord = inverseWord.join('');
  return inverseWord == normalizedWord;
}

const word = 'Somos O no somos';

const result = isPalindorme(word);
console.log(result);