//배열 순환하기

const arr = [
    {id: 0, name:'혜림', age:6},
    {id: 1, name: '은지', age:24},
    {id: 2, name:'예건', age:25},
    {id: 3, name: '지은', age: 22}
]

//각 요소를 출력해주는 메서드
arr.forEach((el) => {
    console.log(el.name);
});