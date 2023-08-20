//배열 정렬하기

const numArr1 = [2, 0, 3, 4, 1]
const numArr2 = [2, 0, 3, 4, 1]

const objArr = [
    {id: 2, name: 'yg'},
    {id: 0, name: 'oj'},
    {id: 3, name: 'ds'},
    {id: 4, name: 'hm'},
    {id: 1, name: 'sl'}
]

//오름차순 정렬
numArr1.sort(function(a,b) {return a-b;});
//내림차순 정렬
numArr2.sort(function(a,b) {return b-a;});
objArr.sort(function(a,b) {
    if (a.name > b.name) return 1;
    else if (b.name > a.name) return -1;
    else return 0;
});

console.log(`오름차순 : ${ numArr1}`);
console.log(`내림차순 : ${numArr2}`);
console.log(objArr);