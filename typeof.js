function fifth(...args) {
	if (args.length < 5) {
		return "Not enough arguments"
	} else {
		return typeof args[4];
	}
}
function fifth(...args) {
	return args.length < 5 ? "Not enough arguments" : typeof args[4];
	}