export default function checkTypeOfChart(letter) {
  const IS_NUMBER = !Number.isNaN(Number(letter));
  const IS_CAPITAL = /^[A-Z]*$/.test(letter);

  if (IS_NUMBER) {
    return ['○ ●', '○ ●', '● ●'];
  } else if (IS_CAPITAL) {
    return ['○ ○', '○ ○', '○ ●'];
  } else {
    return null;
  }
}