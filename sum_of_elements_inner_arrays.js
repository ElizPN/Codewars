const stops = [
  [10, 0],
  [8, 3],
  [2, 3],
];
let newPeople = stops[0][0];
let getOffPeople = stops[0][1];

function numberStops(busStops) {
  let allPeople = 0;

  for (let i = 0; i < busStops.length; i++) {
    allPeople += busStops[i][0];
    allPeople -= busStops[i][1];
  }
  return allPeople;
}

console.log(numberStops(stops));
