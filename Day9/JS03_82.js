//배열 앞에 요소 추가하기

const festa = ['mang'];
festa.unshift('chimmy'); //배열의 앞쪽에 요소추가
festa.unshift('tata');
festa.unshift('cooky');
festa.unshift('shooky');
festa.unshift('koya');
festa.unshift('rj');


//foreach를 사용하면 각 요소를 하나 씩 출력
festa.forEach(name => {
    console.log(name);
})
