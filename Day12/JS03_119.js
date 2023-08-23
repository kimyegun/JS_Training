//정규표현식 문자열 확인

const str = 'To lose your path is the way to find that path';

const senstiveCaseRegex = /to/;
const ignoreAllCaseRegex = /to/gi;
const findRangeRegex = /([a-f])\w+i/;
const findAllRangeRegex = /([a-f])\w+/gi;

console.log(str.match(senstiveCaseRegex));
console.log(str.match(ignoreAllCaseRegex));
console.log(str.match(findRangeRegex));
console.log(str.match(findAllRangeRegex));