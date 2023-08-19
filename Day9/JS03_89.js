//배열 인덱스로 특정 요소 수정하기

const friuts = ['melon', 'lemon', 'source', 'apple', 'juice'];

friuts.splice(4, 1);
friuts.splice(4, 0, 'grape');
friuts.splice(2,1, 'mandarin', 'strawberry', 'watermelon');
console.log(friuts);