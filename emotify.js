function emotify(str) {
	return str.replace('smile',':D')
						.replace('grin',':)')
						.replace('sad',':(')
						.replace('mad',':P');
}
/* tests
Test.assertEquals(emotify("Make me smile"), "Make me :D")
Test.assertEquals(emotify("Make me grin"), "Make me :)")
Test.assertEquals(emotify("Make me sad"), "Make me :(")
Test.assertEquals(emotify("Make me mad"), "Make me :P") */

function emotify(str) {
	let [first, mid, last] = str.split(" "); // splits the string at every space and returns as an array
	
	let emotify = {
		"smile": ":D",
		"grin": ":)",
		"sad": ":(",
		"mad": ":P"
	}
	
	return `Make me ${emotify[last]}`;
}
/* The split() method divides a String into an ordered list of substrings, puts these 
substrings into an array,and returns the array.  The division is done by searching 
for a pattern; where the pattern is provided as the first parameter in the method's call. 