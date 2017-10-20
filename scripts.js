var startButton = document.getElementById("startButton");

startButton.addEventListener("click", function() {

	var userName = prompt("Please enter your name.");
	var grantName = "Grant";
	var userHealth = 40;
	var grantHealth = 10;
	var userWins = 0;
	var grantWins = 0;
	var scoreToWin = 4;

	function damage(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

	function newMatch() {
		grantHealth = 10;
	}

	function grantWinsMatch() {
		grantWins += 1;
		console.log(grantName + " wins the match! The score is: " + userName + " " + userWins + " | " + grantName + " " + grantWins);
		alert(grantName + " wins the match!");
	}

	function userWinsMatch() {
		userWins += 1;
		console.log(userName + " wins the match! The score is: " + userName + " " + userWins + " | " + grantName + " " + grantWins);
		alert(userName + " wins the match!");
	}

	function battle() {
		userHealth -= damage(1,3);
		grantHealth -= damage(1,3);
		console.log(userName + " has " + userHealth + " health left");
		console.log(grantName + " has " + grantHealth  + " health left");
	}

	function userWinsGame() {
		console.log(userName + " WINS THE GAME!");
		alert(userName + " WINS THE GAME!");
	}

	function grantWinsGame() {
		console.log(grantName + " WINS THE GAME!");
		alert(grantName + " WINS THE GAME!");
	}


do { // do...while... loop initializes and plays through each match
	while (userHealth > 0 && grantHealth > 0) { // as long as they are alive... battle.
		battle();
	}	

	// check health to see if there is a winner
	if (userHealth <= 0) {
		grantWinsMatch();
	} else if (grantHealth <= 0){
		userWinsMatch();
	} // end check health, end of each match
	
	newMatch();

} while (userWins < scoreToWin && grantWins < scoreToWin); //end of game do...while...

if (userWins === scoreToWin) {
	userWinsGame();
} else if (grantWins === scoreToWin) {
	grantWinsGame();
}

}); // thanks for playing!