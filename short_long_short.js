function solution(a, b) {


    let numberA = parseInt(a)
    let numberB = parseInt(b)
    console.log(typeof numberA);

    if (Number.isNaN(numberA) && Number.isNaN(numberB)) {
        return a.length < b.length ? `${a}${b}${a}` : `${b}${a}${b}`
    } else {
        if (numberA < numberB) {
            numberA = numberA.toString()
            numberB = numberB.toString()
            return numberA + numberB + numberA
        } else {
            numberA = numberA.toString()
            numberB = numberB.toString()
            return numberB + numberA + numberB
        }

    }
}
console.log(solution("kokok", "op"));
