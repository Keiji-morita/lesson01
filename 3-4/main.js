const number1 = process.argv[2];
const number2 = process.argv[3];

const reversed = number1.split('')    
                     .reverse()    
                     .join('');    
   
const revresed2 = number2.split('')
                     .reverse()
                     .join('');


                     console.log("reversed + revresed2");
