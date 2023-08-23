//현재 시간을 원하는 포맷으로 출력하기

Date.prototype.yyyymmdd = function() {
    //함수 내 this는 date 객체를 가리킨다
    const yyyy = this.getFullYear();
    //date의 getmonth는 월 단위를 가져옵니다.
    const mm = this.getMonth() < 9 ?
                `0${this.getMonth() + 1}` : this.getMonth() + 1;
    //date의 getdate는 일자값을 가져옵니다
    const dd =this.getDate() < 10 ?
                `0${this.getDate()}` : this.getDate();
    return '' + yyyy + mm + dd;
}

const date = new Date();
console.log(date.yyyymmdd());