///랜덤값 구하기

const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
//1부터 10사이의 랜덤값을 5회 출력
for (let i=0; i < 5; i++) {
    console.log(generateRandom(1, 10));
}

//숫자 10부터 100사이의 랜덤값을 5회 출력
for (let i = 0; i<5; i++) {
    console.log(generateRandom(10, 100));
}