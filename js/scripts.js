let one = 1;
let inputedNumber = 30;
let numberArray = [];
while(one <= inputedNumber){
  numberArray.push(one++);
}
const numberString = numberArray.join().split();
const beepBoopArray = numberString.map(function(element) {
	let beepBoop = {
  	1: "beep",
    2: "boop",
    3: "will you be my neighbor"
  }
  return element.replace(/1|2|3/gi, function(matched){
  	return beepBoop[matched];
  });
});
console.log(beepBoopArray)