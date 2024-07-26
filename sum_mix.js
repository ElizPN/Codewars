function sumMix(x) {
    let sum = 0
    x.forEach(element => {
        if (typeof element === "string") {
            element = parseInt(element)
        }
        sum += element
    });
    return sum
}

console.log(sumMix([9, 3, '7', '3']));