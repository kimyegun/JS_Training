//객체에 속성 추가 못하게 만드ㄹ기

//변수 album에 {name:'LOVE YOURSELF'} 객체를 할당
const album = {
    name : 'LOVE YOURSELF'
};

//선언된 객체 album에 속성 song과 singer를 추가, 
//Object.seal을 호출하기 전에는 기존 객체와 동일할게 마음대로 속성 추가 가능
album.song = 'Euphoria'
album.singer = 'RM';

console.log(album);

//이 이후로 새로운 속성을 추가할수 없다.
Object.seal(album);

album.comment = 'Answer';
//기존 속성에 대해ㅅ 변경 가능
album.singer = 'JK';
delete album.name;

console.log(album);