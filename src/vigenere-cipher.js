const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (reverse = true){
    this.reverse = reverse;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined)
      throw new Error();
      let alphabet ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      key = key.toUpperCase();
      message = message.toUpperCase();
      let solution = [];

      for(let i = 0, count = 0;  i < message.length; i++)
      {
        if(alphabet.indexOf(message[i]) == -1)
        {
          solution.push(message[i]);
        }
        else 
        {
          
          solution.push(alphabet[(alphabet.indexOf(message[i]) + alphabet.indexOf(key[count++ % key.length])) % alphabet.length]);
        }
      }
      return solution.join('');
  }  

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined)
      throw new Error();

    key = key.toUpperCase();
    encryptedMessage = encryptedMessage.toUpperCase();
    let solution = [];
    let alphabet ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    if(this.reverse == false)
    {
     encryptedMessage = encryptedMessage.split('').reverse().join('');
    }
    for(let i = 0, count = 0;  i < encryptedMessage.length; i++)
    {
      if(alphabet.indexOf(encryptedMessage[i]) == -1)
      {
        solution.push(encryptedMessage[i]);
      }
      else 
      {
        let index = alphabet.indexOf(encryptedMessage[i]) - alphabet.indexOf(key[count % key.length]);
        if(index < 0)
        {
         solution.push(alphabet[alphabet.length + index]);
        }
        else{
          solution.push(alphabet[index]);
        }
        ++count;
      }
    }
    if(this.reverse == false)
    {
     return solution.reverse().join('');
    }
  
    return solution.join('');
  }

}

module.exports = VigenereCipheringMachine;
