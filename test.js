var name = 'Michael';
// CHOOSE HOW MANY STICKS TO START WITH


var stickNum = prompt('please choose a number of sticks');

while ( isNaN(stickNum) || (parseInt(stickNum) >100 || parseInt(stickNum)<10) ){
  if (isNaN(stickNum)){
    stickNum = prompt("please choose a number of sticks! You didn't input a number");
  } else if (parseInt(stickNum) >100 || parseInt(stickNum)<10) {
    stickNum = prompt("please choose a number of sticks that is between 10 and 100");
  }
}
stickNumTest;
stickNum = parseInt(stickNum);


// FUNCTION TO TAKE STICKS AWAY
var takeAway, computerChoice;

function takeAwayUser1 (){

	takeAway = prompt('Player 1. \nThere are '+ stickNum+ 'on the table.\nHow many sticks do you want to remove? Only between 1 and 3');

	while ( isNaN(takeAway) || (parseInt(takeAway) >3 || parseInt(takeAway)<0)  || parseFloat(takeAway)%1 !== 0){
	  if (isNaN(takeAway)){
	    takeAway = prompt("please choose a number of sticks! You didn't input a number");
	  } else if (parseInt(takeAway) >3 || parseInt(takeAway)<0) {
	    takeAway = prompt("please choose a number of sticks that is between 1 and 3");
	  } else if (parseFloat(takeAway)%1 !== 0){
	  	takeAway = prompt("please choose a number of sticks that is between 1 and 3 and that is a whole number!");
	  }
	}
	takeAway = parseInt(takeAway);
	console.log(takeAway);
	return takeAway;
}

function takeAwayUser2 (){
	if (stickNum === 4){
		return 3;
	} else if (stickNum ===3){
		return 2;
	} else if (stickNum ===2){
		return 1;
	} else {
		computerChoice = 1 + Math.floor(Math.random() * ((3 - 1) + 1));
	    console.log('the computer chose to take out '+computerChoice+' sticks');
	    return computerChoice;
	}
}


while (stickNum>0){
	stickNum -= takeAwayUser1();
	if (stickNum<=0){
		console.log('There are no sticks left on the table! Player, you lost, the computer wins');
		break;
	}
	stickNum -= takeAwayUser2();
	if (stickNum<=0){
		console.log('There are no sticks left on the table! Player, you won! (the computer looses)');
		break;
	}
}
