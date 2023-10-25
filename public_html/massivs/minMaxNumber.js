//У вас есть 5 чисел. Найдите наибольшее и наименьшее из них.
function findMinAndMaxNumber(){
    let numbers = [0];
    let min =Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    let randomNum = 0;

    for(let i = 0; i <10; i++){
      randomNum =  Math.floor(Math.random() * 70);
      numbers[i] = randomNum;
   }
  console.log(`Массив чисел : ${numbers}`);
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i];
        }if(numbers[i] < min){
            min = numbers[i];
        }
    }
    console.log(`Максимальное число = ${max}`);
    console.log(`Минимальное число =${min}`);
}

 findMinAndMaxNumber();