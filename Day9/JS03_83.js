// 배열 길이 구하기

const ship = {
    max: 4, //배의 최대 용량
    passengers: [], //배에 승선한 승객들의 이름을 저장하는 배열
    //배에 승선하는 과정의 메서드
    onBoard: function(name) {
        if (this.passengers.length === 4 ){
            console.log(`This ship is full. ${name} can not board this ship.`);
        } else {
            this.passengers.push(name);
            console.log(`${name} boarded.`);
        }
    }
}

ship.onBoard('chloe');
ship.onBoard('jay');
ship.onBoard('david');
ship.onBoard('asher');
ship.onBoard('daniel');
console.log(ship.passengers);