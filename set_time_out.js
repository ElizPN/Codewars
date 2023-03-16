for (var i = 1; i <= 4; i++) {
  function myFn(params) {
    setTimeout(function () {
      console.log(params);
    }, params * 1000);
  }
   myFn(i);
}
