const primes = [2,3,5,7,11,13,17,19];
printArray(primes);
reverseArray(primes);
printArray(primes);
let index = search(primes, 13);
console.log(index);
index = search(primes, 1);
console.log(index);

function printArray(arr){
    console.log('======');
    for(let i = 0; i < arr.length ; i++){
        console.log(arr[i]);
    }
    console.log('======');
}

function reverseArray(arr){
    for(let i = 0, j = arr.length - 1; i < j; i++, j--){
        let temp = arr[i]
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

function search(arr, value){
   let index = -1;
   for (let i = 0; i < arr.length; i++){
    if(arr[i] === value){
        index = i;
        break;
    }
   }
   return index;
}