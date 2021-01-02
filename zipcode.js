function zipCodeValidator(zipToValidate) {
  if (zipToValidate.length > 5) {
    return false;
  } 
  for (let i = 0; i < zipToValidate.length; i++) {
    if (zipToValidate[i] >= 0) {
  return true;
 } else {
   return false;
 }
}
}
