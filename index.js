
var random=Math.floor(Math.random()*6);
var c="images/dice"+random;
var random1=Math.floor(Math.random()*6);
var c="images/dice"+random1;
if(random1>random){
  document.querySelector("h1").innerHTML=" 🐸Makri Win the game hehee ";
}
else if(random===random1){
  document.querySelector("h1").innerHTML="draw";
}
else
{
  document.querySelector("h1").innerHTML="🐒Aakri Win the game";
}

// ----------------------------AAKRI SIDE-----------------------
if(random===1)
{
  document.getElementById("os").src="images/dice1.png";
}
else if(random===2)
{
  document.getElementById("os").src="images/dice2.png";
}
else if(random===3)
{
  document.getElementById("os").src="images/dice3.png";
}
else if(random===4)
{
  document.getElementById("os").src="images/dice4.png";
}
else if(random===5)
{
  document.getElementById("os").src="images/dice5.png";
}
else if(random===6)
{
  document.getElementById("os").src="images/dice6.png";
}
// --------------------------------------MAKRI SIDE------------------------------------------
if(random1===1)
{
  document.getElementById("os1").src="images/dice1.png";
}
else if(random1===2)
{
  document.getElementById("os1").src="images/dice2.png";
}
else if(random1===3)
{
  document.getElementById("os1").src="images/dice3.png";
}
else if(random1===4)
{
  document.getElementById("os1").src="images/dice4.png";
}
else if(random1===5)
{
  document.getElementById("os1").src="images/dice5.png";
}
else if(random1===6)
{
  document.getElementById("os1").src="images/dice6.png";
}
