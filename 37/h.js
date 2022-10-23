let res = sumDigits(1234);
console.log(`res = ${res}`);
res = lyckyNumber2(1238721);
console.log(res ? 'lucky' : 'unlucky');

function sumDigits(num) {
    let sum = 0;
    while (num) {
        sum += num % 10;
        num = (num - num % 10) / 10;;
    }
    return sum;
}

function lyckyNumber(num) {
    let sum1 = 0;
    let sum2 = 0;
    let pos = 1;
    while (num) {
        if (pos % 2) {
            sum1 += num % 10;
        } else {
            sum2 += num % 10;
        }
        num = (num - num % 10) / 10;
        pos++;
    }
    return sum1 === sum2;
}

function lyckyNumber1(num) {
    let sum1 = 0;
    let sum2 = 0;
    while (num) {
        sum1 += num % 10;
        num = (num - num % 10) / 10;
        sum2 += num % 10;
        num = (num - num % 10) / 10;
    }
    return sum1 === sum2;
}

function lyckyNumber2(num) {
    let sum = 0;
    while (num) {
        sum = num % 10 - sum;
        num = (num - num % 10) / 10;
    }
    return !sum; //sum === 0;
}