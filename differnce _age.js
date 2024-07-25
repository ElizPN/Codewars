// function differenceInAges(ages) {
//     let resArr = []
//     let youngest = ages[0]
//     let oldest = 0;
//     let diff = 0;

//     for (let i = 0; i < ages.length; i++) {
//         if (ages[i] < youngest) {
//             youngest = ages[i]
//         }
//         if (ages[i] > oldest) {
//             oldest = ages[i]
//         }
//     }

//     diff = oldest - youngest
//     resArr.push(youngest, oldest, diff)

//     return resArr
// }


function differenceInAges(ages) {
    return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
}

console.log(differenceInAges([+0, 98, 98]), "fn");
