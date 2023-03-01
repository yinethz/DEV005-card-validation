const validator = {
  maskify: function (word) {
    if (word.length <= 4) {
      return word;
    }
    return word.slice(0, -4).replace(/./g, '#') + word.slice(-4);
  },
  limit: function (cardNumber) {
    if (cardNumber.length > 16) {
      return cardNumber.slice(0, 16);
    }
    return cardNumber;
  },

  isValid: function (cardNumber) {
    const numberArr = cardNumber.split('');
    const numberReverse = numberArr.reverse();

    let total = 0;
    console.log(numberReverse);
    for (let i = 0; i < numberReverse.length; i++) {
      let numberInt = parseInt(numberReverse[i], 10);
      if ((i + 1) % 2 === 0) {
        numberInt *= 2;
        if (numberInt > 9) {
          const sumNumber = 1 + (numberInt - 10);
          numberInt = sumNumber;
        }
      }
      console.log(numberInt);
      total += numberInt;
    }
    console.log("Resultado suma total ", total);
    const endAlgorit = total % 10;

    return endAlgorit === 0;
  }
};


export default validator;
