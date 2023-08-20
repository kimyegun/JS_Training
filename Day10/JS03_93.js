//배열 순서를 반대로 나열하기

const str = 'abcdefghijklmnopqrstuvwxyz';
//독립적인 배열로 요소 정리
const arr = str.split('');
//배열의 요소를 뒤집는다.
arr.reverse();

//배열의 요소들을 연결
console.log(arr.join(''));