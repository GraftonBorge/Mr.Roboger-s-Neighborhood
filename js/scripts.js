let one = 1;
let inputedNumber = 10;
let numberArray = [];
while(one <= inputedNumber){
  numberArray.push(one++);
}
const numberString = numberArray.join().split("");
const beepBoopArray = numberString.map(function(element) {
  return element.replace(1, "beep");
});


console.log(beepBoopArray.join())