import app from '../src/app';
import letterTranslate from '../src/letter-translate';

describe('Test suite to test braille translator', () => {
  it('Letter d returns d in braile', () => {
    const result = letterTranslate('d');

    expect(result[0]).toContain('● ●');
  });
  
  it('When printing characters there should be only dots', () => {
    const result = app('   a \n b c d');

    const trimmed = result.replace(/\s/g, '');
    for (var i = 0; i < trimmed.length; i++) {
      expect('●○').toContain(trimmed.charAt(i));
    }
  });
});
