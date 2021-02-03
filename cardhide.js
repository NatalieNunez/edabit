function cardHide(card) {
    let cardArr = card.split("");
    for (let i = cardArr.length - 5; i >= 0; i--) {
      cardArr.splice(i, 1, "*");
    }
     return cardArr.join('');
   }