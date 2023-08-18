//문자열 대소문자 변환하기

console.log('Find Your Own Voice'.toLowerCase()); //소문자로 변경해주는 메서드
console.log('Find Your Own Voice'.toUpperCase()); //대문자로 변경해주는 메서드

const value = 'Find Your Oen Voice';
console.log(value.toLowerCase() === value.toUpperCase()); // 두 값은 대,소문자로 비교연산하기 떄문에 false가 나온다.