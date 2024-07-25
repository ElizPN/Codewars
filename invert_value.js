function invert(array) {

    return array.map(x => {
        return x === 0 ? 0 : x * -1
    })
}

console.log(invert([0, -2, 3, -4, 5]));



