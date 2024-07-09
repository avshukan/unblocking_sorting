const generator_with_lock = (size) => {
    let result = [];
    for (let i = 0; i < size; i++) {
        result.push(Math.floor(Math.random() * 100));
    }
    return result;
}

module.exports = generator_with_lock;