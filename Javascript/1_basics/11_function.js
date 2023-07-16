/**
 * function -> 함수
 */

/**
 * 만약에 2라는 함수에 * 10/2 %3 스트링으로 변환해서
 * 반환받고싶다면 어떻게 해야할까?
 */
console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());

/**
 * DRY
 * D => don't
 * R => Repeat
 * Y => yourself
 */

function calculate() {
    console.log((2 * 10 / 2 % 3).toString());
}

// calculate();

function calculate(number) {
    console.log((number * 10 / 2 % 3).toString());
}

calculate(4);
calculate(5);

/**
 * 함수에서 입력받는 값에대한 정의를 Parameter라고 한다.
 * 
 * 실제 입력하는 값은 argument라고 한다.
 */

function multiply(x,y){
    console.log(x * y);
}

multiply(2,3)

function multiply(x,y=10){
    console.log(x * y);
}

multiply(2,4);
multiply(2);

/**
 * 반환받기
 * return 받기
 */
console.log("----------------");
function multiply(x,y) {
    return x * y;
}

const result1 = multiply(2,4);
console.log(result1);

const result2 = multiply(4,2);
console.log(result2);

/**
 * Arrow 함수
 */

const multiply2 = (x,y) => {
    return x * y;
}
console.log(multiply2(5,5));

const multiply3 = (x,y) => x*y;
console.log(multiply3(20,3));

const multiply4 = (x) => x*2;
console.log(multiply4(2));

const multiply5 = x=> y => z => `x:${x} y:${y} z:${z}`;
console.log(multiply5(3)(2)(4));

function multiply6 (x) {
    return function(y){
        return function(z){
            `x:${x} y:${y} z:${z}`
        }
    }
}

console.log(multiply5(3)(2)(4));

const multiply7 = function(x,y) {
    return x*y
} 
console.log(multiply7(3,5));

console.log("----------------");

const multiply8 = function(x,y,z){
    console.log(arguments);
    return x*y*z;
}
console.log(multiply8(5,1,6))

const multiplyAll = function(...arguments) {
    return Object.values(arguments).reduce((a,b) => a*b, 1);
}

console.log(multiplyAll(3,4,5,6,7,8,9,10));

//즉시 실행 함수
(function(x,y) {
    console.log(x*y);
})(4,5)

console.log(typeof multiply);
console.log(multiply instanceof Object);