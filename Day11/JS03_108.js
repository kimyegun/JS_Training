//10진수 아닌 진법을 다른 진법으로 변환

const bin = 1000010011;
const oct = 1023;
const hex = 213;

const dexByBin = parseInt(bin, 2);
//8진수 oct 변수값을 10진수로 변환하여 dexByOct 변수에 할당 선언
const dexByOct = parseInt(oct, 8);
//16진수 hex 변구값을 10진수로 변화하여 dexByhex 할당 선언
const dexByhex = parseInt(hex, 16);

const hexByOct = parseInt(oct, 8).toString(16);

console.log(dexByBin);
console.log(dexByOct);
console.log(dexByhex);
console.log(hexByOct);