function checkUsernameAC() {                             // Declare function
  var elMsg = document.getElementById('feedback1');     // Get feedback element
  var firstLetter = this.value[0];
  firstLetter = firstLetter.toUpperCase();
  firstLetter = firstLetter.charCodeAt(0);
  if (this.value.length < 5 || firstLetter < 65 || firstLetter > 67) {                         // If username too short
    elMsg.textContent = 'Username must be 5 characters or more and begin with A-C'; // Set msg
  } else {                                             // Otherwise
    elMsg.textContent = '';                            // Clear msg
  }
 
  
}

var elUsername = document.getElementById('username1');  // Get username input
// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsernameAC, false);

function checkUsernameDH() {                             // Declare function
  var elMsg = document.getElementById('feedback2');     // Get feedback element
  var firstLetter = this.value[0];
  firstLetter = firstLetter.toUpperCase();
  firstLetter = firstLetter.charCodeAt(0);
  if (this.value.length < 5 || firstLetter > 72 || firstLetter < 68) {                         // If username too short
    elMsg.textContent = 'Username must be 5 characters or more and begin with A-C'; // Set msg
  } else {                                             // Otherwise
    elMsg.textContent = '';                            // Clear msg
  }
 
  
}

var elUsername = document.getElementById('username2');  // Get username input
// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsernameDH, false);

function checkUsernameIM() {                             // Declare function
  var elMsg = document.getElementById('feedback3');     // Get feedback element
  var firstLetter = this.value[0];
  firstLetter = firstLetter.toUpperCase();
  
  firstLetter = firstLetter.charCodeAt(0);
  
  if (this.value.length < 5 || firstLetter > 77 || firstLetter < 73) {                         // If username too short
    elMsg.textContent = 'Username must be 5 characters or more and begin with A-C'; // Set msg
  } else {                                             // Otherwise
    elMsg.textContent = '';                            // Clear msg
  }
 
  
}

var elUsername = document.getElementById('username3');  // Get username input
// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsernameIM, false);

function checkUsernameNP() {                             // Declare function
  var elMsg = document.getElementById('feedback4');     // Get feedback element
  var firstLetter = this.value[0];
  firstLetter = firstLetter.toUpperCase();
  firstLetter = firstLetter.charCodeAt(0);
  if (this.value.length < 5 || firstLetter > 80 || firstLetter < 78) {                         // If username too short
    elMsg.textContent = 'Username must be 5 characters or more and begin with A-C'; // Set msg
  } else {                                             // Otherwise
    elMsg.textContent = '';                            // Clear msg
  }
 
  
}

var elUsername = document.getElementById('username4');  // Get username input
// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsernameNP, false);

function checkUsernameQZ() {                             // Declare function
  var elMsg = document.getElementById('feedback5');     // Get feedback element
  var firstLetter = this.value[0];
  firstLetter = firstLetter.toUpperCase();
  firstLetter = firstLetter.charCodeAt(0);
  if (this.value.length < 5 || firstLetter > 91 ||firstLetter < 81) {                         // If username too short
    elMsg.textContent = 'Username must be 5 characters or more and begin with A-C'; // Set msg
  } else {                                             // Otherwise
    elMsg.textContent = '';                            // Clear msg
  }
 
  
}

var elUsername = document.getElementById('username5');  // Get username input
// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsernameQZ, false);