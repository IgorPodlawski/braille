import letterTranslate from '../src/letter-translate';
import checkTypeOfChar from '../src/check-type-of-char';

export default function sentenceTranslator(sentence) {
  let arrayOfLetters = [];
  let firstRow = '';
  let secondRow = '';
  let thirdRow = '';

  [...sentence].forEach(letter => {
    const IS_NOT_A_SMALL_LETTER = checkTypeOfChar(letter);

    if (IS_NOT_A_SMALL_LETTER !== null) {
      arrayOfLetters.push(IS_NOT_A_SMALL_LETTER);
    }

    const BRAILE_LETTER = letterTranslate(letter.toLowerCase());
    if (BRAILE_LETTER) {
      arrayOfLetters.push(BRAILE_LETTER);
    }
  });

  arrayOfLetters.forEach(braileLetter => {
    firstRow += braileLetter[0] + '  ';
    secondRow += braileLetter[1] + '  ';
    thirdRow += braileLetter[2] + '  ';
  })
  
  const RESULT_SENTENTCE = `${firstRow}\n${secondRow}\n${thirdRow}`;

  return RESULT_SENTENTCE;
}