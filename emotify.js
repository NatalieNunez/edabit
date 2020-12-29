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