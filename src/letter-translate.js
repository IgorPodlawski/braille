import BRAILE_ALPHABET from './braile-alphabet';

export default function letterTranslate(letter) {
  const BRAILE_LETTER = BRAILE_ALPHABET[letter];
  return BRAILE_LETTER;
};