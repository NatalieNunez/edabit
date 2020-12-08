function profitableGamble(prob, prize, pay) {
	return (prob*prize > pay ? true : false);
}
function profitableGamble(prob, prize, pay) {
	if (prob*prize > pay) {
			return true; 
		} else {
			return false;
		}
	}
	// return prob * prize > pay ? true : false;