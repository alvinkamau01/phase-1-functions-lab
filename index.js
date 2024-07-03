// Code your solution in this file!
function distanceFromHqInBlocks(dist) {
  const hq = 42;
  const distance = Math.abs(dist - hq)
  return distance
}

function distanceFromHqInFeet(distnfeet) {
  const howFar = distanceFromHqInBlocks(distnfeet)
  const distance2 = howFar * 264
  return distance2;
}
function distanceTravelledInFeet(start, stop) {
  const distance3 = Math.abs(start - stop)
  const destination = distance3 * 264
  return destination;
}
function calculatesFarePrice(start, destination) {
  const distance4 = Math.abs(start - destination)*264
  if (distance4 <=400) {
    return 0
  }
  else if(distance4<=2000){
    let target=(distance4-400)*0.02
    return parseFloat(target.toFixed(2))
  }
  else if (distance4<=2500){
    let target=25
    return target
  }
  else if (distance4>2500){
    let target="cannot travel that far"
    return target
  }
  else{
    return "Invalid entry"
  }
}
console.log(calculatesFarePrice(34,32))