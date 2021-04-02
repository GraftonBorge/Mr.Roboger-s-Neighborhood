// buisness 
const beepBoopArray = [0,1,2,3,4,5];
  beepBoopArray[1] = "beep";
  beepBoopArray[2] = "boop";
  beepBoopArray[3] = "Won't you be my neighbor?"
function beepBoop(element){
 if (element = beepBoopArray[1]){
   return beepBoopArray[1];
 }
}



// UI logic
$(document).ready(function(){
 
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $(".input").val();
    $("#form").html(passage)
  
  });
});