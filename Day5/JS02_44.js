function createCounterClosure() {
    let count = 0;
    return {
        increase: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
}

const couter1 = createCounterClosure();
const couter2 = createCounterClosure();

couter1.increase();
couter1.increase();
console.log('counter 1의 값 :' + counter1.getCount());
couter2.increase();
console.log('counter 2의 값 :' + couter2.getCount());