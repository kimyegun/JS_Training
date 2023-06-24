/**
 * if and switch
 */
let number = 5;

if(number % 2 ===0) {
    console.log('number 변수는 짝수입니다.')
} else {
    console.log('number 변수는 홀수입니다.')
}

if (number % 2 ===0) {
    console.log('2의배수입니다.')
} else if (number % 3 ===0) {
    console.log('3의배수입니다.') 
    } else if (number % 4 ===0){
    console.log('4의배수입니다.') 
    } else if (number % 5 ===0){
    console.log('5의배수입니다.') 
    } else {
        console.log('2,3,4,5의 배수가 아닙니다.')
    }

const englishDay = 'monday';

    let koreanDay;

    switch (englishDay) {
        case 'monday':
            koreanDay = '월요일'
            break;
            case 'tuseday':
            koreanDay = '화요일'
            break;
            case 'wendesday':
            koreanDay = '수요일'
            break;
            case 'thursday':
            koreanDay = '목요일'
            break;
            case 'friday':
            koreanDay = '금요일'
            break;

        default:
            koreanDay = '주말'
            break;

            console.log(koreanDay)
    }


    
    
