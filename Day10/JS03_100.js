//중첩된 배열을 단일하게 만들기

//arr 변수에 배열 대입하니다. 이때 배열 안에는 숫자혀으 배열, 문자형 값이 나열되어 있습니다.
const arr = [1, [2,3], [4,5,6], ['배열', '나열하기'],'JavaScript'];

//callback 함수의 첫 번쨰 인자 acc와 현재 요소값이 el를 concat으로 병합
const result = arr.reduce((acc, el) => {
    return acc.concat(el);
}, []);

console.log(result);