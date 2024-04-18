const myArr = ['codewars', 'flick', 'code', 'wars', 'flick', "koko"]


function flickSwitch (arr) {
    let indicator = true;

   return arr.map(element => {
    // switch indicator to false if elemnt === "flick"
   if (element === "flick" ) {
    indicator =  !indicator
        console.log(indicator, "indicator");
   } 
   return element = indicator === true ? true : false  
    });
}

console.log(flickSwitch (myArr));