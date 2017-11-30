function checkUsername() {    // Declare function
	var elm = this.id;
	var num = elm.substr(elm.length -1)
	var output = "feedback"+ num;
	var elMsg = document.getElementById(output);
	
  var elMsg = document.getElementById('feedback1');    // Get feedback element
  if (this.value.length < 5) {                        // If username too short
   elMsg.textContent = 'Username must be 5 characters or more';  // Set msg
  } else {                                            // Otherwise
    elMsg.textContent = '';                           // Clear message
  }
  //alert(this.id);
}
for (var i = 1; i < 6; i++;){
	var elUsername = document.getElementById('username' + i); // Get username input
	elUsername.onblur = checkUsername;  // When it loses focus call checkuserName()
}
var elUsername = document.getElementById('username1'); // Get username input
elUsername.onblur = checkUsername;  // When it loses focus call checkuserName()
var elUsername = document.getElementById('username2'); // Get username input
elUsername.onblur = checkUsername;  // When it loses focus call checkuserName()
var elUsername = document.getElementById('username3'); // Get username input
elUsername.onblur = checkUsername;  // When it loses focus call checkuserName()
var elUsername = document.getElementById('username4'); // Get username input
elUsername.onblur = checkUsername;  // When it loses focus call checkuserName()
var elUsername = document.getElementById('username15'); // Get username input
elUsername.onblur = checkUsername;  // When it loses focus call checkuserName()
var elUsername = document.getElementById('username1'); // Get username input
elUsername.onblur = checkUsername;  // When it loses focus call checkuserName()