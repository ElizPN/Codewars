function explode(x) {
    let res = "Void!"
    let score = 0;
    x.forEach((element) => {
        if (typeof element === "number" && !Number.isNaN(element)) {
            res = []
            score += element;

        }
    });


    if (score > 0) {
        for (let i = 0; i < score; i++) {
            res.push(x);
        }
    }
    return res;
}

console.log(explode(["a", "a"]));
