function fifth(...args) {
	if (args.length < 5) {
		return "Not enough arguments"
	} else {
		return typeof args[4];
	}
}