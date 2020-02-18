import translate from './translator';

function app(sentence) {
  return translate(sentence)
}

const arg = process.argv[2];
console.log(app(arg));

export default app;