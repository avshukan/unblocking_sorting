const generator_without_lock = require('./generator_without_lock');

let i = 0;

console.time('check');

setTimeout(() => {
    console.timeLog('check', 'timeout 0');
}, 0);

setTimeout(() => {
    console.timeLog('check', 'timeout 1000');
}, 1000);

setTimeout(() => {
    console.timeLog('check', 'timeout 2000');
}, 2000);

setTimeout(() => {
    console.timeLog('check', 'timeout 3000');
}, 3000);

setInterval(() => {
    console.timeLog('check', `interval i=${i++}`);
}, 1000);

const batch2 = generator_without_lock(40_000_000);

batch2.then((result) => {
    console.timeLog('check', 'end', batch2.length);
});