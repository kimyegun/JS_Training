//배열 요소를 분할/변환하기(form)

const str = '12345678';

const distributedArr = Array.from(str); //배열로 변환 하는 메서드를 호출
console.log(distributedArr);

const modifiedArr = Array.from(distributedArr, el => el * 2); //배열안의 각 요소들을 2의 배수로 변환
console.log(modifiedArr);