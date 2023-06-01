var x = 5; // 숫자형(number)
var y = 'five'; // 문자형(String)
var isTrue = true; //불린형(Boolean)
var empty = null; //null
var nothing //undefined
var sym = symbol('me'); //Symbol

var item = {
    price: 5000,
    count: 10
}; // 객체(Object)
var fruits = ['apple', 'orange', 'kiwi']; //배열(Array)
var addFruit = function (fruit) {
    fruit.push(fruit);
} //함수(function)
addFruit('watermelon');
console.log(fruits);