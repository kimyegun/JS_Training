//문자열 순환하기

const str = "hello";

for (const item of str) {
    console.log(item);
}

const iter = str[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());