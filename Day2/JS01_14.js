var store = {snack: 1000, flowr: 5000, beverage: 2000};

for (var item in store) {
    if(!store.hasOwnProperty(item)) continue;

    console.log(item + '는 가격이' + store[item] + '입니다.') 
}