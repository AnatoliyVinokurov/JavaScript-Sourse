let res = sumDigits(1234);
console.log(`res = ${res}`);
res = luckyNumber2(1238721);
console.log(res ? 'lucky' : 'unlucky');

function sumDigits(num){
    let sum = 0;
    while(num !== 0){
        sum += num %10;
        num = (num - num % 10) / 10;
    }
    return sum;
}

function luckyNumber(num){
    let sum1 = 0;
    let sum2 = 0;
    let pos = 1;
    while (num !== 0){
        if (pos % 2 === 0){
            sum1 += num % 10;
        }else{
            sum2 += num % 10;
        }
        num = (num - num % 10) / 10;
        pos++;
    }
    // if (sum1 === sum2){
    //     return true;
    // }else{
    //     return false;
    // }
    return sum1 === sum2;
}

function luckyNumber1(num){
    let sum1 = 0;
    let sum2 = 0;
    while (num !== 0){
       sum1 += num % 10;
       num = (num - num % 10) / 10;
       sum2 += num % 10;
       num = (num - num % 10) / 10;
    }
    return sum1 === sum2;
}

function luckyNumber2(num){
    let sum = 0;
    while (num !== 0){
        sum = num % 10 - sum;
        num = (num - num % 10)/10;
    }
    return sum === 0;
}