const tatelines=process.argv[2];
const yokolines=process.argv[3];

for(let i = 1; i <= tatelines; i++){
  let array = [];
   if(i % 2 === 1){
     for(let j = 1; j <= yokolines; j++){
       if(j % 2 === 1){
        array.push("*");
       }else{
         array.push("-");
       }
     }
   }else{
     for(let j = 1; j <= yokolines; j++){
       if(j % 2 === 1){
        array.push("-")
       }else{ 
        array.push("*")
        }
       }
     }
   console.log(array.join(""))
  
  }