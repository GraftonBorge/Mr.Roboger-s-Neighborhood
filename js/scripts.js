
function beep(userNumber) {
let one = 1;
let numberArray = [];
while(one <= userNumber){
  numberArray.push(one++);
}
return numberArray;
};
function boop(userArray){
let beepBoopArray = [];
userArray.forEach(element => {
  const number = element.toString();
  if (number.includes('3')){
    beepBoopArray.push('Wont You Be My Neighbor');
  }else if (number.includes('2')){
    beepBoopArray.push('boop');
  }else if (number.includes('1')){
    beepBoopArray.push('beep');
  }else {beepBoopArray.push(number)};
});
return beepBoopArray;
}

$(document).ready(function(){

    $("#form").submit(function(event) {
      event.preventDefault();
      const inputedNumber = parseInt($("#userInput").val());
      const Input = beep(inputedNumber);
      const finalArray = boop(Input);
      $('#final').text(finalArray)
    })
});


