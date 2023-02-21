const validator = {
  maskify: function (word) {
    if (word.length <= 4) {
      return word;
    }
    return word.slice(0, -4).replace(/[0-9]/g, '#') + word.slice(-4);
  },
  limit: function (number) {
    if (number.length > 16) {
      return number.slice(0, 16);
    }
    return number;
  }
};


export default validator;
