import sentenceTranslator from '../src/sentence-translator';

export default function translate(sentence) {
  const SENTENCE = sentence.trim();
  // let resultSentence = '';

  // SENTENCES.forEach(sentence => {
  //   resultSentence += sentenceTranslator(sentence + '\n');
  // });

  return sentenceTranslator(SENTENCE);
};
