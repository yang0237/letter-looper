/*global console, prompt, document*/

// Declare the variable
var letter,
	i,
	k;

// Printing a "triangle"
while (!letter) {
	letter = prompt("What is the letter?");
}

for (i = 0; i < 10; i += 1) {
	for (k = 0; k <= i; k += 1) {
	    document.write(letter);
	}
	    document.write("<br>");
}

