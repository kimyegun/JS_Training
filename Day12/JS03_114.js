//UTC 기준 날짜 출력하기

const date = new Date();
//Date객체의 메소드 UTC 기준의 시간을 반환
const dateUTC = Date.UTC(
    date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
    date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()

);

console.log(new Date(dateUTC));