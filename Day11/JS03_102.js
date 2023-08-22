//객체에서 값만 추출하기

const obj = {
    movie: 'Sunny',
    music: 'Like Sugar',
    style: 'Retro',
    price: Infinity
};

const arr = Object.values(obj);
console.log(arr);