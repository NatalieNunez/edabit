function areaOfCountry(name, area) {
	const worldLandmass = 148940000^2;
	const percent = (area/worldLandmass)*10
	return `${name} is ${percent.toFixed(2)}% of the total world's landmass`;
}
/*
##### INSTRUCTIONS #####
Create a function that takes a country's name and its area as arguments 
and returns the area of the country's proportion of the total world's landmass.

##### EXAMPLES #####
areaOfCountry("Russia", 17098242) ➞ "Russia is 11.48% of the total world's landmass"
areaOfCountry("USA", 9372610), "USA is 6.29% of the total world's landmass"
areaOfCountry("Iran", 1648195) ➞ "Iran is 1.11% of the total world's landmass"
*/