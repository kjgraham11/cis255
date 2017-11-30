
 //document.body.style = "background-color: yellow;"
 //document.getElementById("header").innerHTML = "This heading is h1";
 var a = document.createElement("a");
 var b = document.createTextNode("My link");
 //var c = document.createTextNode("My Heading");
 //var d = document.createElement("h1");
 // d.append(c);
 a.setAttribute("href", "www.svsu.edu");
 a.append(b);
 document.body.appendChild(a);
 //document.body.appendChild(d);
// document.getElementById("header").onclick = function(){alert ('goodbye')};
 
 document.getElementById("header").onclick = function(){alert (document.URL)};
 document.getElementById("input1").onkeyup = function(){ 
	var s = document.getElementById("input1").value;
	var result = "";
	for ( var i = 0; i < s.length; i++){
		result += s[i] + ".";
	}
	document.getElementById("span1").innerHTML = result;
 }