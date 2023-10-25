//В массиве из 10 элементов поменяйте местами минимальный и максимальный элементы.
function swapMaxMinNum(){
    let numbers = [2, 6, -9,10,17,78,65,8,3,4];
    let min =Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    let indexMin = 1;
    let indexMax = 1;

    console.log(`Изначальный массив ${numbers}`);

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i];
            indexMax = i;
        } if (numbers[i] < min){
            min = numbers[i];
          indexMin=i;
        }
}

let temp = numbers[indexMin];

numbers[indexMin] = numbers[indexMax];
numbers[indexMax] = temp;

console.log(`min = ${min} and max=${max}`);
console.log(numbers);
}

swapMaxMinNum();