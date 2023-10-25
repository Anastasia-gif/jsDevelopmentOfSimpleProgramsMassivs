function findOddNumbers(){
  let randomNum = 0;
   let numbers = [0];
   let countOddNum = 0;

   for(let i = 0; i < 10; i++){
      randomNum =  Math.floor(Math.random() * 10);
      numbers[i] = randomNum;
   }

   console.log(`Массив чисел ${numbers}`);

   for(let i = 0; i < numbers.length; i++){
       if(numbers[i] % 2 !== 0){
           countOddNum++;
       }
   }
   console.log(`Количество нечётных чисел ${countOddNum}`);
}
findOddNumbers();