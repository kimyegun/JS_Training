function callRoll(students) {
    if (!Array.isArray(students)) return;

    students.forEach((students) => { //foreach로 반복
        console.log(`Are you here, ${students}`);
    });
}

const students = ['Jun', 'Ali', 'Murry', 'Toby'];
callRoll(students); //콜롤 함수를 선언