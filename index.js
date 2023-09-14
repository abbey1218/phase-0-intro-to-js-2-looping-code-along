// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"];
const messages = [];
function writeCards(names) {  
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    
    return messages;
  };

const count = [];
function countDown() {
    for (let count = 10; count > -1; count--) {
        console.log(count);
    }
};

