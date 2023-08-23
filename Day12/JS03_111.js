//특정 자리수에서 올림하기

//양의 실수
const positiveNum = 93.54;
//음의 실수
const negativeNum = -39.54;
//소수점 기준으로 올림
console.log(Math.ceil(positiveNum));
//소수점 오른쪽 올림
console.log(Math.ceil(negativeNum));
//소수점 두 번째 자리에서 올림
console.log(Math.ceil(positiveNum * 10) / 10);
console.log(Math.ceil(positiveNum / 10) * 10);
console.log(Math.ceil(negativeNum * 10) / 10);
console.log(Math.ceil(negativeNum / 10) * 10);

