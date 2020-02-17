# Braille
## Goal
Your task is to translate characters from english alphabet to grade 1 braille system.

**You can read about grade 1 braille [here](http://www.acb.org/tennessee/braille.html).**


## What you should implement

* Stage 1: Printing one braille character using ● or ○ in terminal
* Stage 2: Translate characters A, B, C, D
* Stage 3: Translate numbers 1, 2, 3, 4 (it is the same as at stage 2 but with special character - Number sign)
* Stage 4: Translate uppercase characters (it is the same as at stage 2 but special character - Letter sign)
* Stage 5: Translate characters K, L, M, N, U, V, X, Y,
* Stage 6: Translate sentences
* Stage 7: Translate special characters

To test braille you can go [here](https://www.brailletranslator.org/)


## Files
* `app.js` Entry point of program.
* `translator.js` Here is class for containing translator class and it's all functionality. 


## Implementation
You should start implementation with printing one character in braille by extending class `Translator`.

For example `D` is:
```
●●
○●
○○
```
For more information please see [wikipedia](https://en.wikipedia.org/wiki/Braille#Derivation)

Printing one character is very important and should be done at first. 

There are special signs to modify how system is working:
* Letter Sign - all next characters will be small letters
* Capital Sign - next character will be capital (only one)
* Double capital sign - all next characters will be capital
* Number Sign - all next characters will be numbers

All new words are small characters as default. 
Numbers characters need special number sign so `123 abc` you can write as `<NUMBER_SIGN>abc abc`
Interpunction characters do not need special signs so `1,23` you can write as `<NUMBER_SIGN>a,bc`


## How to run
1. Install [Node.js](https://nodejs.org/en/download/)
2. Install [yarn](https://yarnpkg.com/en/docs/install)
3. To install dependencies: `yarn` or `yarn install`
4. Run development server:: `yarn start`
5. Run tests: `yarn test`
## Useful links
1. https://webpack.js.org
2. https://babeljs.io
3. https://jasmine.github.io
