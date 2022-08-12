const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const arrKeys=Object.keys(MORSE_TABLE)
function decode(expr) {    
    let phrase = ''
    for (let i=0; i< expr.length/10 ; i++) {
        let newLetter = expr.substr(i*10,10)
        newLetter=newLetter.substr(newLetter.indexOf('1'))
       newLetter = newLetter.replace(/10/gi,'.')      
       newLetter = newLetter.replace(/11/gi,'-') 
      if (newLetter == '*') {
         phrase=phrase+' '
      }
      else {
       arrKeys.forEach((item) => {
         if (item == newLetter) {
           phrase = phrase+MORSE_TABLE[item]
         }        
       })  
    }
    }  
  
   return phrase
}

module.exports = {
    decode
}