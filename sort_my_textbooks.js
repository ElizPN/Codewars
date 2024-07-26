
const numberSortFn = (a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    } else if (a.toLowerCase() === b.toLowerCase()) {
        return 0;
    } else {
        return 1;
    }
};

function sorter(textbooks) {
    return textbooks.sort((numberSortFn))
}



console.log(sorter(['Algebra', '^eometry', 'english', 'history']));