function checkCredits(){
	var elMsg = document.getElementById('feedback');
	if( this.value > 92)
		elMsg.textContent = 'You are a senior';
	if( this.value > 61 && this.value < 93)
		elMsg.textContent = 'You are a junior';
	if(this.value > 30 && this.value < 62)
		elMsg.textContent = 'You are a sophomore';
	if(this.value < 30)
		elMsg.textContent = 'You are a freshman';
}

var elCredits = document.getElementById('credits');
elCredits.addEventListener('blur', checkCredits, false);