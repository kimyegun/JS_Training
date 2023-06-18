/**
 * hoisting
 * /
 
 console.log('hello');
  console.log('world');

console.log('name'); //값이 undefined 값이 할당하지 않다.
var name = '코드팩토리'
console.log('name');

var name;
console.log('name'); //값이 할당,지정  하지 않다.

/**
*
 * hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
/

console.log('yujin');
//let yujin = '안유진'; //let,const 호이스팅 발생한다.