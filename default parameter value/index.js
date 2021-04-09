function multiply(a, b = 1) // b default is 1
{
    return a * b;
}

console.log(multiply(5, 2));// 10


console.log(multiply(5)); // 5


function divide(a,b){
    var b = b || 2; // b is either  b or  2
    return a / b;
}
console.log(divide(15,3)); // output =  5
console.log(divide(16)); // output = 8

