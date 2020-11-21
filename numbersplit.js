function numberSplit(n) {
  return (n % 2 === 0 ? [n/2, n/2] : [n-Math.round(n/2), Math.round(n/2)]);
  }
  // 	if (n % 2 === 0) {
  //	return [n/2, n/2];
  //	} else {
  //	return [n-Math.round(n/2), Math.round(n/2)];
  //	}