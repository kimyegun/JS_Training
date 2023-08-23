//정규표현식으로 특정 문자의 포함 여부 확인

const numRegExp = /[0-9]+/;
const phoneRegExp = /\d{3}-\d{3,4}-\d{4}$/;
const emailRegExp =
/^([-_.]?[0-9a-zA-Z]{6,13})+\@([0-9a-z]+)\.([a-z]{2,3})$/i;

console.log(numRegExp.test(12345));
console.log(numRegExp.test('test'));
console.log(phoneRegExp.test('010-3003-0046'));
//phoneRegExp의 패턴에 적합하지 않기 때문에 false를 반환
console.log(phoneRegExp.test('02-8844-1234'));
//emualRegExp 표현식에 맞는 문자열이므로 true
console.log(emailRegExp.test('test123@javascript.org'));
//이메일에 맞지 않은 형식이므로 false를 반환
console.log(emailRegExp.test('test-javascript'));