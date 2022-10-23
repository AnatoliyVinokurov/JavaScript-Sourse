

const arr = [1, 2, 3, 'four', 'five', true]; //not a LET!!! jast const!!
console.log(typeof arr);
console.log(arr[3]);
console.log(typeof arr[3]);
console.log(arr.length);
//arr = null;
arr[3] = 4;
console.log(arr[3]);
console.log(typeof arr[3]);
console.log(arr);
printArray(arr);
arr[arr.length] = 100500;
arr[arr.length] = 42;
console.log(arr);
printArray(arr);
console.log(arr.length);
arr.length = 3;
printArray(arr);
console.log(arr);
console.log(arr.length);

function printArray(arr) {
    console.log('========');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('========');
}