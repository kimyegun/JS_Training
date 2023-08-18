//문자열을 특정 구분자에 의해 배열로 나누기

const capitals = `Prague,Czech Republic
Copenhagen,Denmark
Paris,France
Mardrid,Spain
Rome,Italy`

//각 요소들 내에 있는 수도와 나라 정보를 쉼표를 기준으로 분리합니다
capitals.split('\n').forEach(s => {
    const capital = s.split(',')[0]; //각각의 수도와 나라를 배열로 저장
    const country = s.split(',')[1];
    console.log(`${capital} is in ${country}`);
});