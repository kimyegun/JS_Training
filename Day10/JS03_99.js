//숫자형 값이 나열된 배열 리터럴을 numArr 변수에 대입
const numArr = [1, 2, 3, 4, 5];

//reduce의 callback 함수 매개변수로, 첫 번째 acc과 el로 정의
const result = numArr.reduce((acc, el) => {
    return acc + el
}, 0);

console.log(result);