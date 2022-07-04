function wordsInPhrase(phrase, word) {
  let phraseNormalized = phrase.toLowerCase();
  phraseNormalized = phraseNormalized.replace(',', '');
  phraseNormalized = phraseNormalized.replace('.', '');
  phraseNormalized = phraseNormalized.replace(':', '');
  phraseNormalized = phraseNormalized.replace(';', '');
  phraseNormalized = phraseNormalized.replace('"', '');
  phraseNormalized = phraseNormalized.replace('\'', '');
  const phraseArray = phraseNormalized.split(' ');
  return phraseArray.filter( element => element === word ).length;
}

const phrase = 'Hola berlin, holA. bonnie';
const word = 'hola';

const result = wordsInPhrase(phrase, word);
console.log(result);