//배열에 특정 구분자 넣어 문자형으로 변환하기

const dialogue = [
    'Fear is the path to the dark side',
    'Fear leads to anger',
    'Anger leads to hate',
    'Hate leads to suffering',
    'I sense much fear in you.'
];

console.log(dialogue.join('. ')); // 배열의 요소와 요소사이에 연결
console.log(dialogue.join('.\n'));