function cardHide(card) {
    let cardArr = card.split("");
    for (let i = cardArr.length - 5; i >= 0; i--) {
      cardArr.splice(i, 1, "*");
    }
     return cardArr.join('');
   }
   /* 
   ###### instructions and tests ######
   Write a function that takes a credit card number 
   and only displays the last four characters. The rest 
   of the card number must be replaced by ************
cardHide("8754456321113213") ➞ "************3213"
cardHide("35123413355523") ➞ "**********5523"

   ###### other solutions #######
   function cardHide(card) {
	card = card.split('');
	for (let i = 0; i < card.length - 4; i++) {
		card[i] = "*";
	}
	return card.join('');
}

const cardHide = card => '*'.repeat(card.length - 4) + card.slice(-4);

const cardHide = card => card.slice(-4).padStart(card.length, '*');

function cardHide(card) {
	let num = card.split('');
	let newArr = [];

	for(let i = 0; i < num.length; i++) {
		if(i > card.length - 5) {
			newArr.push(num[i]);
		} else {
			newArr.push('*');
		}
	}
	
	return newArr.join('');
} */