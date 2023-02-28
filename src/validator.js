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
    console.log(numberArr);
    const numberReverse = numberArr.reverse();
    console.log(numberReverse);



    return true;
  }
};


export default validator;
