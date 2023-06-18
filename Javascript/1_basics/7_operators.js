/**
 *Operators
 * 
 * 연산자
 */

/**
 *산술연산자
 *
 * 1)덧셈
 * 2)뺄셈
 * 3)곱셈
 * 4)나눗셈
 * 5)나머지
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 3); //나머지값

console.log(----------);

console.log(10 * 10(10 + 10));

/**
 *
 * 증가와 감소
 */

let number = 1;

number++; //1씩증가
console.log(number);
number--; //1씩감소
console.log(number);


/**
 *
 * 연산자의 위치
 */

let result = 1;
console.log(result);

result = number++;
console.log(result, number);

result = number--;
console.log(result, number);

result = ++number;
console.log(result, number);

result = --number;
console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +,- 사용하면 어떻게 될까?
 * **/

let sample = "99";

console.log(+sample);
console.log(typeof + sample);  //number

console.log(sample);
console.log(typeof sample);  //string

sample = true;
console.log(+sample);  //1
console.log(typeof +sample);

sample = false;  
console.log(+sample);  //0
console.log(typeof +sample);

sample = "안유진"
//nan -> not a number
console.log(+sample);

let sample = "99";

console.log(-sample);
console.log(typeof - sample);

/**
 * 할당 연산자
 * **/

number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 * **/

console.log(5 == 5);
console.log('5' == 5);
console.log('' == 0); //true
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');

console.log(5 === 5);
console.log('5' === 5); //false
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');

console.log(5 != 5);
console.log('5' != 5);
console.log('' != 0); //true
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');

console.log(5 !== 5);
console.log('5' !== 5);
console.log('' !== 0); //true
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');


console.log( '--------------');
/**
 * 대소 관계 비교 연산자
 *
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 * **/
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

/**
 * 삼항 조건 연산자
 *
 * 
 * **/

console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');  //true일시 왼쪽값 반화


/**
 * 논리 연산
 * 
 * 1) && and
 * 2)||  or
 *
 * **/

//&& 조건은 모두 true여야 true를 반환한다.
console.log(true && true);
console.log(true && false);
console.log(true && false);
console.log(false && false);

// || 는 하나만 true여도 true를 반환한다.
console.log(true || true);
console.log(true || false);
console.log(true || false);
console.log(false || false);
console.log('-------------');
console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);

/**
 * 단축평가
 * 
 * &&를 사용했을떄 좌측이 true이면 우측 값 반환
 * &&를 사용했을떄 좌측이 false 좌측 값 변화
 * ||를 사용했을떄 좌측이 true이면 좌측 값 반환
 * ||를 사용했을떄 좌측이 false 우측 값 변화
 */

 console.log('-------------');
console.log(true || '아이브');
console.log(false || '아이브');
console.log(false && '아이브');
console.log(true && '아이브');

console.log(true && true && '아이브');
console.log(true && false && '아이브');

/**
 * 지수 연산자
 */

console.log(2 ** 2);
console.log(10 ** 3);

/**
 * null 연산자
 */

let name;
console.log(name);

name = name ?? : '코드'; //nan이거나 undefined일 경우 오른쪽값 반환
console.log(name);

name = name ?? : '아이브'; //nan이거나 undefined이지 않아서 오른쪽값 반환못함
console.log(name);