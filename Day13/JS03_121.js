//정규 표현식으로 문자열 변환

const str = 'Java is not in Javadcript';

//배열에는 표현식과 일치한 값이 할당
const result1 = /java/ig.exec(str);

console.log(result1[0]);
//숫자 -출력
console.log(result1.index);
//변수 값 출력
console.log(result1.input);

const nums = '"1", "2", "3"';
const regex = /\d+/g;
while (result2 = regex.exec(nums)) {
    console.log(result2, regex.lastIndex);
}