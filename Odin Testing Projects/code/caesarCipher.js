function caeserCipher(string, sfactor){
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";
    let string = str.toLowerCase();
    let i = 0;
    while(i < string.length) {
      if (string[i] !== " ") {
        let index = alphabet.indexOf(string[i]);
        result += alphabet[(index + key) % 26];
      } else {
        result += " ";
      }
      i++;
    }
  
    return result;
  }
  module.exports = caeserCipher;