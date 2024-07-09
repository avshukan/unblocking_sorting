const generator_without_lock = (size) => {
    const CHUNK = 1_000_000;
    let result = [];
    let counter = 0;

    console.time('generator_without_lock');

    const fill = (count) => {
        for (let i = 0; i < count; i++) {
            result.push(Math.floor(Math.random() * 100));
        }
    }

    const iterator = (resolve) => {
        console.timeLog('generator_without_lock', 'init', counter);
        if (counter < size) {
            const chunk = Math.min(CHUNK, size - counter);
            fill(chunk);
            counter += chunk;
        }
        if (counter < size) {
            setTimeout(() => {
                iterator(resolve);
            }, 0);
        } else {
            console.timeLog('generator_without_lock', 'resolve', counter);
            resolve(result);
        }
    }

    const promise_generator = new Promise((resolve, reject) => {
        iterator(resolve);
    });

    return promise_generator;
}

module.exports = generator_without_lock;