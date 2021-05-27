var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";/*"bottles" */
    if (numberOfBottles === 1) {
        bottleWord = "bottles";/*"bottle" */
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}
var num=100
while(num>0){
  if(num===1){
    console.log(num+" bottle of beer on the wall, "+num+" bottle of beer, Take 1 down, pass it around");
    num--;
    console.log("No more bottles of beer on the wall")
  }
  else{
    console.log(num+" bottles of beer on the wall, "+num+" bottles of beer, Take 1 down, pass it around");
    num--;
    console.log(num+ "bottles of beer on the wall.")
  }
}
/*If you want to challenge yourself
 further, try changing the code to make the english more grammatically correct. 
So the final output should say "1 bottle of beer on the wall" when numberOfBottles is equal to 1 rather than "1 bottles of beer on the wall" 
and when numberOfBottles is equal to 0, you can make the output "No more bottles of beer on the wall" instead of 0 bottles of beer on the wall". */
