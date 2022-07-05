function reversePhrase(phrase) {
  let reversedPhrase = [];
  for (const letter of phrase) {
    reversedPhrase.unshift(letter);
  }
  reversedPhrase = reversedPhrase.join('');
  return reversedPhrase;
}

const phrase = 'Hola feliz Mundo';

const result = reversePhrase(phrase);
console.log(result);